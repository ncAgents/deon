import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a
                href="#about"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-primary hover:text-secondary focus:outline-none focus:text-secondary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
