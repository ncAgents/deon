import React from 'react';

const About: React.FC = () => {
  const expertise = [
    {
      title: 'AI Engineer',
      description: 'Machine Learning & Neural Networks',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Science',
      description: 'Analytics & Statistical Modeling',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Blockchain',
      description: 'Smart Contracts & DeFi',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm4-8a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm4-8a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const languages = [
    { name: 'Python', level: 'Expert' },
    { name: 'Rust', level: 'Advanced' },
    { name: 'R', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I build intelligent systems and intuitive UIs, blending AI, reinforcement learning, and blockchain into elegant, functional products.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-gradient-to-r from-background to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-2xl font-bold text-secondary mb-2">{lang.name}</div>
                <div className="text-sm text-gray-500 font-medium">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
