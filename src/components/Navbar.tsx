import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a
                href="/projects"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="/credentials"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Credentials
              </a>
              <a
                href="/skills"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Skills
              </a>
              <a
                href="/playground"
                className="text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Playground
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-primary hover:text-secondary focus:outline-none focus:text-secondary"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="/projects"
                onClick={closeMobileMenu}
                className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="/credentials"
                onClick={closeMobileMenu}
                className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
              >
                Credentials
              </a>
              <a
                href="/skills"
                onClick={closeMobileMenu}
                className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
              >
                Skills
              </a>
              <a
                href="/playground"
                onClick={closeMobileMenu}
                className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
              >
                Playground
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
