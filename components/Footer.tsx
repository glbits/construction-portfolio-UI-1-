
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-3xl font-bold text-slate-900">
              Bharat <span className="text-red-800 italic">Nirman</span>
            </span>
            <p className="mt-6 text-slate-500 max-w-sm leading-relaxed">
              Dedicated to excellence in construction, renovation, and interior design across Bhopal. We build trust before we build walls.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/" className="hover:text-red-800 transition-colors">Home</Link></li>
              <li><Link to="/projects" className="hover:text-red-800 transition-colors">Our Work</Link></li>
              <li><Link to="/services" className="hover:text-red-800 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-red-800 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Contact Details</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center"><span className="mr-2">📞</span> +91 98765 43210</li>
              <li className="flex items-center"><span className="mr-2">📧</span> hello@bharatnirman.in</li>
              <li className="flex items-center"><span className="mr-2">📍</span> Indrapuri, Bhopal</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2024 Bharat Nirman & Co. All Rights Reserved.</p>
          <div className="flex space-x-6 text-slate-400 text-xs uppercase tracking-widest font-bold">
             <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
             <a href="#" className="hover:text-slate-900 transition-colors">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
