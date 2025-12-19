
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      <Hero onCtaClick={() => {}} />
      
      <section className="py-24 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 blueprint-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Services we offer with pride</h2>
            <p className="text-lg text-slate-600">From the first map approval to the final coat of paint, we are with you at every step.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 border border-stone-200 hover:border-red-800/30 transition-all group hover:shadow-xl">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{service.description}</p>
                <Link 
                  to="/contact"
                  className="text-xs font-bold uppercase tracking-widest text-red-800 hover:text-red-900 flex items-center"
                >
                  Inquire Now
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSection />

      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://i.pinimg.com/736x/f9/75/27/f97527b4d854063aae45c764b89b2c59.jpg" 
                alt="Aman on site" 
                className="w-full aspect-[4/5] object-cover shadow-2xl custom-border border-8 p-4 bg-white" 
              />
              <div className="absolute -bottom-10 -right-10 bg-slate-900 p-8 text-white hidden md:block">
                <p className="text-4xl font-serif mb-1">12+</p>
                <p className="text-xs uppercase tracking-[0.2em] font-bold">Years Building Bhopal</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight italic">"We treat every house like it's our own."</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded by Aman Sharma in 2012, Bharat Nirman started as a small team of three. Today, we have successfully delivered over 150 homes and commercial spaces across Bhopal.
                </p>
              </div>
              <Link 
                to="/about"
                className="inline-block mt-8 text-slate-900 font-bold uppercase tracking-widest text-sm border-b-2 border-red-800 pb-1"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-serif">What our clients say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 bg-stone-50 border border-stone-100 relative">
                <span className="absolute -top-6 left-10 text-8xl text-red-800/10 font-serif">"</span>
                <p className="text-lg italic text-slate-700 mb-8 relative z-10">{t.text}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{t.location}, Bhopal</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
