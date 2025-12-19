
import React from 'react';
import { PROJECTS } from '../constants';

const ProjectSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Real Work. <br />Real Stories.
            </h2>
            <p className="text-lg text-slate-600">
              We don't do mass-produced. Each project is tailored to the family living there. From first brick to final lighting.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="flex space-x-2 text-sm uppercase tracking-widest font-bold text-slate-400">
               <span>Gallery</span>
               <span>/</span>
               <span className="text-red-800">Projects</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group ${idx % 2 !== 0 ? 'lg:mt-20' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 border border-stone-200">
                  {project.category}
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-800 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-slate-400 uppercase bg-stone-50 px-2 py-1 border border-stone-100">
                    {project.duration}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  {project.location}
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                {project.clientStory && (
                  <div className="border-l-2 border-red-800 pl-4 py-1 mb-8">
                    <p className="text-sm italic text-slate-500">
                      "{project.clientStory}"
                    </p>
                  </div>
                )}
                <button className="inline-flex items-center text-slate-900 font-bold text-sm uppercase tracking-widest hover:text-red-800 transition-colors">
                  View Full Gallery
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <button className="bg-slate-900 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all shadow-lg">
             Explore All 150+ Projects
           </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
