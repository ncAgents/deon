import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bounceCount, setBounceCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setBounceCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-background via-white to-gray-50 flex items-center justify-center px-4 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto w-full">
        {/* Animated 404 */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-primary mb-2 sm:mb-4 tracking-wide">
            <span className={`inline-block ${bounceCount > 0 ? 'animate-bounce' : ''}`}>4</span>
            <span className={`inline-block ${bounceCount > 1 ? 'animate-bounce' : ''} delay-100`}>0</span>
            <span className={`inline-block ${bounceCount > 2 ? 'animate-bounce' : ''} delay-200`}>4</span>
          </h1>
        </div>

        {/* Fun Animation Container */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating Elements */}
          <div className="relative mb-4 sm:mb-6 md:mb-8">
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-secondary rounded-full animate-pulse"></div>
            <div className="absolute -top-1 -right-3 sm:-top-2 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-hover rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-secondary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-hover rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Main Message */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-primary mb-3 sm:mb-4 md:mb-6 tracking-wide">
            Oops! This project is cooking! 
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed font-light px-2">
            Don't worry, this demo is currently under development. 
            <br />
            I'm working hard to bring you something amazing!
          </p>

          {/* Progress Indicator */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-pulse delay-400"></div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              Development in Progress...
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-6 md:mb-8">
            <Link
              to="/"
              className="inline-flex items-center bg-secondary text-white hover:bg-hover transition-all duration-200 font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <svg className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            
            <Link
              to="/projects"
              className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-2 sm:py-3 px-4 sm:px-6 md:px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <svg className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Other Projects
            </Link>
          </div>

          {/* Fun Footer Message */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-secondary/10 to-hover/10 rounded-xl sm:rounded-2xl border border-secondary/20">
            <p className="text-xs sm:text-sm text-gray-600 font-light">
              💡 <strong>Pro tip:</strong> While you wait, check out my other completed projects or 
              <Link to="/playground" className="text-secondary hover:text-hover font-medium ml-1">
                chat with my AI assistant
              </Link> 
              to learn more about my work!
            </p>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-secondary/5 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-hover/5 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-secondary/10 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
