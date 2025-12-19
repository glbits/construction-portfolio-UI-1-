
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 min-h-screen">
       <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-12 text-center">Our Expertise</h1>
          <div className="grid gap-12">
            {SERVICES.map((s, i) => (
              <div key={s.id} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-xl overflow-hidden border border-stone-100`}>
                 <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                 </div>
                 <div className="md:w-1/2 p-12 flex flex-col justify-center">
                    <span className="text-4xl mb-4">{s.icon}</span>
                    <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">{s.description}</p>
                    <ul className="space-y-3 mb-10 text-sm text-slate-500 font-medium uppercase tracking-wider">
                      <li className="flex items-center"><span className="text-red-800 mr-2">✓</span> Professional Grade Materials</li>
                      <li className="flex items-center"><span className="text-red-800 mr-2">✓</span> Weekly Progress Reports</li>
                      <li className="flex items-center"><span className="text-red-800 mr-2">✓</span> 5-Year Leakage Guarantee</li>
                    </ul>
                    <Link to="/contact" className="bg-slate-900 text-white py-4 px-8 self-start font-bold uppercase tracking-widest text-xs hover:bg-red-900 transition-colors shadow-lg">Request Quotation</Link>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default ServicesPage;
