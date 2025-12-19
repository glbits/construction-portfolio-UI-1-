
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <section className="py-24 bg-white min-h-screen">
       <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-slate-900 mb-8">Our Journey</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 italic">"Bharat Nirman isn't just about cement and steel. It's about the promise we make to families in Bhopal."</p>
          
          <div className="space-y-12 text-lg text-slate-700">
            <p>In 2012, Aman Sharma started with a single goal: to provide high-quality construction services to mid-scale homeowners without the stress and "hidden costs" that usually come with local contractors.</p>
            
            <img src="https://dynamic.realestateindia.com/proj_images/project9578/proj_header_image-9578-770x400.jpg" className="w-full h-80 object-cover shadow-lg" alt="Team" />

            <div>
              <h3 className="text-2xl font-bold mb-4">The Values We Live By</h3>
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-stone-50 p-6 border-t-4 border-red-800">
                    <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">Transparency</h4>
                    <p className="text-sm">We provide a detailed bill of quantities. You know exactly where every Rupee goes.</p>
                 </div>
                 <div className="bg-stone-50 p-6 border-t-4 border-slate-900">
                    <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">Honesty</h4>
                    <p className="text-sm">If we are running late by 2 days, we tell you 2 weeks in advance. No excuses.</p>
                 </div>
                 <div className="bg-stone-50 p-6 border-t-4 border-stone-400">
                    <h4 className="font-bold mb-2 uppercase text-sm tracking-widest">Local Heritage</h4>
                    <p className="text-sm">We source materials from local suppliers to support the Bhopal economy.</p>
                 </div>
              </div>
            </div>
            
            <div className="bg-stone-900 p-12 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Certified & Insured</h3>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm uppercase tracking-widest">We hold all necessary licenses from the Bhopal Municipal Corporation and RERA compliance where applicable.</p>
              <Link to="/contact" className="bg-red-800 text-white px-10 py-5 uppercase font-bold tracking-widest text-xs">Work With Us</Link>
            </div>
          </div>
       </div>
    </section>
  );
};

export default AboutPage;
