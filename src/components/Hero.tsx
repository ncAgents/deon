import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <img
            src="/deon.jpg"
            alt="Deon Chinese"
            loading="lazy"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-secondary shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light text-primary mb-6 tracking-wide">
          Call me <span className="text-secondary">Deon </span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-primary mb-8 max-w-3xl mx-auto leading-relaxed font-light">
        I merge reinforcement learning, blockchain, and design to create intelligent, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-secondary hover:bg-hover text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            View Projects
          </a>
          <a
            href="/certs/resume.pdf"
            download="Deon_Chinese_Resume.pdf"
            className="bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block shadow-md hover:shadow-lg"
          >
            <svg className="inline-block w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
