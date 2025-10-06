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
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-8xl md:text-9xl font-light text-primary mb-4 tracking-wide">
            <span className={`inline-block ${bounceCount > 0 ? 'animate-bounce' : ''}`}>4</span>
            <span className={`inline-block ${bounceCount > 1 ? 'animate-bounce' : ''} delay-100`}>0</span>
            <span className={`inline-block ${bounceCount > 2 ? 'animate-bounce' : ''} delay-200`}>4</span>
          </h1>
        </div>

        {/* Fun Animation Container */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Floating Elements */}
          <div className="relative mb-8">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full animate-pulse"></div>
            <div className="absolute -top-2 -right-6 w-6 h-6 bg-hover rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-hover rounded-full animate-pulse delay-1000"></div>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6 tracking-wide">
            Oops! This project is cooking! 
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            Don't worry, this demo is currently under development. 
            <br />
            I'm working hard to bring you something amazing!
          </p>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-400"></div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Development in Progress...
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center bg-secondary text-white hover:bg-hover transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
            
            <Link
              to="/projects"
              className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Other Projects
            </Link>
          </div>

          {/* Fun Footer Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-secondary/10 to-hover/10 rounded-2xl border border-secondary/20">
            <p className="text-sm text-gray-600 font-light">
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
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/5 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-hover/5 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-secondary/10 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
