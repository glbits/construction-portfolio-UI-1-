
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-stone-100 overflow-hidden">
      {/* Background with texture and image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/build123/1920/1080" 
          alt="Construction Site" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100 via-stone-100/90 to-transparent"></div>
        <div className="absolute inset-0 blueprint-pattern opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-800/10 border border-red-800/20 text-red-800 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span>Serving Bhopal Since 2012</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Building Homes with <br />
            <span className="text-red-800">Honesty</span> & Craft.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
            We’re not just contractors. We’re a small, dedicated team building the spaces where your families will grow. Transparent pricing, real timelines, and local expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-slate-900 text-white px-8 py-4 text-lg font-medium hover:bg-slate-800 transition-all shadow-xl hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-slate-900 border border-stone-300 px-8 py-4 text-lg font-medium hover:bg-stone-50 transition-all"
            >
              View Our Work
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-stone-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">150+</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">12 yrs</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Local Experience</p>
            </div>
            <div className="hidden md:block">
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">Commitment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Handcrafted visual element - Signature/Note */}
      <div className="absolute bottom-10 right-10 hidden lg:block transform rotate-[-3deg] bg-white p-4 shadow-lg border border-stone-100 max-w-xs">
        <p className="font-serif italic text-slate-600 text-sm mb-2">
          "We pick up the phone — always. No hidden charges. No surprises. Just honest building."
        </p>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
             <img src="https://picsum.photos/seed/contractor-face/100/100" alt="Aman" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 uppercase">Aman Sharma</p>
            <p className="text-[10px] text-slate-500">Founder, Bharat Nirman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
