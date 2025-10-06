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
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-secondary shadow-lg"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light text-primary mb-6 tracking-wide">
          Hi, I'm <span className="text-secondary">Deon Chinese</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-primary mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          I build intelligent systems and design seamless user experiences.
        </p>
        
        <div className="flex justify-center">
          <a
            href="#projects"
            className="bg-secondary hover:bg-hover text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
