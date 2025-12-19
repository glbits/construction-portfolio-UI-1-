
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Work', path: '/projects' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 group">
            <span className="font-serif text-2xl font-bold text-slate-900 group-hover:text-red-800 transition-colors">
              Bharat <span className="text-red-800 italic">Nirman</span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold leading-none">Builders & Contractors</p>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `${
                      isActive 
                      ? 'text-red-800 border-b-2 border-red-800' 
                      : 'text-slate-600 hover:text-slate-900'
                    } px-1 py-2 text-sm font-medium transition-all duration-200`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link 
                to="/contact"
                className="bg-slate-900 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-slate-800 transition-all shadow-md"
              >
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block w-full text-left px-3 py-4 text-base font-medium rounded-md ${
                    isActive ? 'text-red-800 bg-red-50' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
               to="/contact"
               onClick={() => setIsOpen(false)}
               className="block w-full text-center bg-red-800 text-white px-3 py-4 text-base font-medium rounded-md mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
