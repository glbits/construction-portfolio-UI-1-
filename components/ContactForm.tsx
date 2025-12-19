
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'New Construction',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dhanyawad! We will get back to you within 24 hours.');
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 blueprint-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
              Let's talk about your <br />
              <span className="text-red-400">dream project.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-md">
              Whether it's a small renovation in Kolar or a new commercial project in MP Nagar, we're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-800/20 p-3 rounded-sm">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Call Aman Directly</p>
                  <p className="text-2xl font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-800/20 p-3 rounded-sm">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">WhatsApp Us</p>
                  <a href="#" className="text-2xl font-medium text-green-400 hover:underline">Quick Chat Now</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-slate-800 p-3 rounded-sm">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Office Address</p>
                  <p className="text-lg">Flat 202, Indrapuri Sector C, <br />Bhopal, MP - 462022</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 max-w-sm">
               <p className="text-xs text-slate-400 mb-1">Response Time</p>
               <p className="text-sm font-bold uppercase tracking-widest">We reply within 2 hours</p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 text-slate-900 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-12 h-12 bg-red-800 flex items-center justify-center -translate-y-1/2 translate-x-1/2 rotate-12 shadow-lg">
                <span className="text-white text-xl">✍️</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-8">Get a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-red-800 transition-colors"
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-red-800 transition-colors"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Service Type</label>
                <select 
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-red-800 transition-colors"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>New House Construction</option>
                  <option>Renovation & Interiors</option>
                  <option>Commercial Projects</option>
                  <option>Consultancy</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">How can we help?</label>
                <textarea 
                  rows={4}
                  className="w-full bg-stone-50 border-b border-stone-200 py-3 px-4 focus:outline-none focus:border-red-800 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-800 text-white font-bold uppercase tracking-widest py-5 hover:bg-red-900 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
            <p className="text-[10px] text-center mt-6 text-slate-400 uppercase tracking-widest">
              By submitting, you agree to our terms of service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
