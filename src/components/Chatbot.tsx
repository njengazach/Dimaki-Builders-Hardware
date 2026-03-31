import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Modality } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { cn } from '@/src/lib/utils';

// Types for Chat
interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! Welcome to Dimaki Builders Hardware. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { role: 'user', text } as Message];
    setMessages(newMessages);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: newMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are a helpful assistant for Dimaki Builders Hardware, located in Elburgon Town, Kenya (Besides Molo Line Office). You provide information about construction materials, tools, plumbing, electrical supplies, and general hardware. Be professional, friendly, and knowledgeable about the Kenyan construction market. Contact us at +254 720 342 039 or kibedavi@gmail.com.",
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-brand-navy text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm">Dimaki Assistant</h3>
                  <p className="text-[10px] opacity-70">Always here to help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.role === 'user' 
                      ? "bg-brand-orange text-white rounded-tr-none" 
                      : "bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm"
                  )}>
                    <div className="markdown-body prose prose-sm max-w-none prose-p:leading-relaxed">
                      <ReactMarkdown>
                        {msg.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(inputText)}
                />
                <button 
                  onClick={() => setIsVoiceMode(true)}
                  className="text-slate-400 hover:text-brand-orange transition-colors"
                >
                  <Mic size={18} />
                </button>
                <button 
                  onClick={() => handleSend(inputText)}
                  disabled={!inputText.trim()}
                  className="text-brand-navy hover:text-brand-orange disabled:opacity-30 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-navy text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Voice Assistant Overlay */}
      <AnimatePresence>
        {isVoiceMode && (
          <VoiceAssistant onClose={() => setIsVoiceMode(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function VoiceAssistant({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    startSession();
    return () => {
      stopSession();
    };
  }, []);

  const startSession = async () => {
    try {
      setStatus('listening');
      const session = await ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: "You are the voice assistant for Dimaki Builders Hardware, located in Elburgon Town, Kenya. Keep your responses concise and helpful. You are speaking to a customer in Kenya. If they ask about products, mention we have cement, steel, tools, and more. Our contact is +254 720 342 039.",
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
          }
        },
        callbacks: {
          onopen: () => {
            setupAudioCapture();
          },
          onmessage: async (message) => {
            if (message.serverContent?.modelTurn?.parts[0]?.inlineData?.data) {
              setStatus('speaking');
              playAudio(message.serverContent.modelTurn.parts[0].inlineData.data);
            }
            if (message.serverContent?.interrupted) {
              stopAudioPlayback();
            }
          }
        }
      });
      sessionRef.current = session;
    } catch (err) {
      console.error("Voice session error:", err);
      onClose();
    }
  };

  const setupAudioCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const audioContext = new AudioContext({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      
      source.connect(processor);
      processor.connect(audioContext.destination);
      
      processor.onaudioprocess = (e) => {
        if (sessionRef.current) {
          const inputData = e.inputBuffer.getChannelData(0);
          // Convert Float32 to Int16 PCM
          const pcmData = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
          }
          const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
          sessionRef.current.sendRealtimeInput({
            audio: { data: base64Data, mimeType: 'audio/pcm;rate=16000' }
          });
        }
      };
    } catch (err) {
      console.error("Audio capture error:", err);
    }
  };

  const playAudio = (base64Data: string) => {
    const binary = atob(base64Data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const pcmData = new Int16Array(bytes.buffer);
    const floatData = new Float32Array(pcmData.length);
    for (let i = 0; i < pcmData.length; i++) {
      floatData[i] = pcmData[i] / 0x7FFF;
    }

    if (audioContextRef.current) {
      const buffer = audioContextRef.current.createBuffer(1, floatData.length, 16000);
      buffer.getChannelData(0).set(floatData);
      const source = audioContextRef.current.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContextRef.current.destination);
      source.start();
      source.onended = () => setStatus('listening');
    }
  };

  const stopAudioPlayback = () => {
    // Simple implementation: would need to track active sources to stop them properly
    setStatus('listening');
  };

  const stopSession = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    if (sessionRef.current) {
      sessionRef.current.close();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] bg-brand-navy/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-white"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X size={32} />
      </button>

      <div className="relative mb-12">
        <motion.div
          animate={{
            scale: status === 'listening' ? [1, 1.2, 1] : 1,
            opacity: status === 'listening' ? [0.5, 1, 0.5] : 0.5,
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 bg-brand-orange rounded-full blur-3xl"
        />
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-2xl">
          {status === 'listening' ? <Mic size={48} className="animate-pulse" /> : <Volume2 size={48} />}
        </div>
      </div>

      <h2 className="text-3xl font-display font-bold mb-4 text-center">
        {status === 'listening' ? "Listening..." : status === 'speaking' ? "Speaking..." : "Thinking..."}
      </h2>
      <p className="text-white/60 text-center max-w-md">
        Ask me about our hardware supplies, pricing, or locations in Kenya.
      </p>

      <div className="mt-12 flex gap-4">
        <button 
          onClick={onClose}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-semibold transition-colors"
        >
          End Session
        </button>
      </div>
    </motion.div>
  );
}
