import React from 'react';
import { 
  Hammer, 
  Wrench, 
  HardHat, 
  Truck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2,
  Menu,
  ShoppingBag,
  Star,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import Chatbot from './components/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-navy p-2 rounded-lg">
              <Hammer className="text-brand-orange" size={24} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-brand-navy">
              DIMAKI<span className="text-brand-orange">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-brand-orange transition-colors">Products</a>
            <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
            <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
            <a 
              href="https://docs.google.com/spreadsheets/d/1k7hKZLOuf93LCeaEaUg6SAX1I7scYn47BxKrgajFabM/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-orange hover:underline flex items-center gap-1"
            >
              Price List <ExternalLink size={14} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white rounded-full text-sm font-semibold hover:bg-brand-orange transition-all duration-300 cursor-pointer">
              Request Quote
            </button>
            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Star size={14} />
                  Kenya's Trusted Hardware Partner
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-navy leading-[1.1] mb-6">
                  Building the Future of <span className="text-brand-orange">Kenya</span> with Quality.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                  Dimaki Builders Hardware provides premium construction materials, tools, and expert advice for projects of all sizes. From foundation to finish, we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-brand-navy text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-brand-navy/10 cursor-pointer">
                    Explore Inventory <ArrowRight size={20} />
                  </button>
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1k7hKZLOuf93LCeaEaUg6SAX1I7scYn47BxKrgajFabM/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white border-2 border-slate-200 text-brand-navy rounded-full font-bold hover:border-brand-navy transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Price Sheet <ExternalLink size={20} />
                  </a>
                </div>
                
                <div className="mt-12 flex items-center gap-8">
                  <div>
                    <p className="text-3xl font-bold text-brand-navy">15k+</p>
                    <p className="text-sm text-slate-500">Products</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div>
                    <p className="text-3xl font-bold text-brand-navy">10+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div className="w-px h-10 bg-slate-200"></div>
                  <div>
                    <p className="text-3xl font-bold text-brand-navy">500+</p>
                    <p className="text-sm text-slate-500">Daily Customers</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                  {/* Note: To use your specific uploaded image, please upload it to the file explorer as 'nairobi-cbd.jpg' in the src folder */}
                  <img 
                    src="https://picsum.photos/seed/nairobi-street-life/800/800" 
                    alt="Nairobi CBD Street Life" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="text-green-600" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy">Genuine Quality</p>
                      <p className="text-xs text-slate-500">Certified Suppliers Only</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="products" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">Everything You Need to Build</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We stock a wide range of high-quality hardware products from leading international and local brands.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Construction Materials", icon: Hammer, desc: "Cement, steel bars, timber, and roofing sheets." },
                { title: "Power Tools", icon: Wrench, desc: "Drills, grinders, saws, and specialized machinery." },
                { title: "Electrical Supplies", icon: ShoppingBag, desc: "Wiring, switches, lighting, and circuit breakers." },
                { title: "Plumbing & Sanitary", icon: Truck, desc: "Pipes, fittings, tanks, and bathroom fixtures." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-brand-navy mb-8 leading-tight">Why Dimaki is the Preferred Choice for Kenyan Builders</h2>
                <div className="space-y-6">
                  {[
                    { title: "Competitive Pricing", desc: "We offer the best rates in the market through direct sourcing." },
                    { title: "Island-wide Delivery", desc: "Fast and reliable delivery to construction sites across Kenya." },
                    { title: "Expert Consultation", desc: "Our staff are trained to provide technical advice for your projects." }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center mt-1">
                        <CheckCircle2 className="text-white" size={14} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy mb-1">{feature.title}</h4>
                        <p className="text-slate-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-10 px-8 py-3 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-colors cursor-pointer">
                  Learn More About Us
                </button>
              </div>
              <div className="bg-brand-navy rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 italic">"Dimaki didn't just sell me tools; they helped me understand exactly what I needed for my home foundation. Their service is unmatched in Elburgon."</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                      <img src="https://picsum.photos/seed/kenyan-contractor/100/100" alt="Samuel Kamau" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold">Samuel Kamau</p>
                      <p className="text-sm text-white/60">Independent Contractor</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-brand-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-bold mb-8">Visit Our Branch</h2>
                <p className="text-white/60 mb-12 max-w-md">Our store is located in Elburgon Town, ready to serve all your building needs.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Location</p>
                      <p className="font-medium">Elburgon Town, Besides Molo Line Office</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Call Us</p>
                      <p className="font-medium">+254 720 342 039</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-white/40 uppercase tracking-widest font-bold">Email</p>
                      <p className="font-medium">kibedavi@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="+254..." />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-100 rounded-xl border-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <button className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold hover:bg-brand-navy transition-all duration-300 cursor-pointer">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-brand-navy p-1.5 rounded-lg">
                <Hammer className="text-brand-orange" size={18} />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-brand-navy">
                DIMAKI<span className="text-brand-orange">.</span>
              </span>
            </div>
            
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Sitemap</a>
            </div>
            
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} Dimaki Builders Hardware. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}
