import React, { useState } from 'react';

const About: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const expertise = [
    {
      title: 'AI Engineer',
      description: 'Machine Learning & Neural Networks',
      detailedDescription: 'I specialize in building intelligent systems using deep learning, reinforcement learning, and neural networks. My experience includes developing AI models for trading algorithms, natural language processing, and computer vision applications. I work with frameworks like TensorFlow, PyTorch, and OpenAI APIs to create scalable AI solutions.',
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
      detailedDescription: 'I excel in extracting insights from complex datasets using advanced statistical methods and machine learning techniques. My expertise includes predictive modeling, data visualization, and building data pipelines. I work with Python, R, SQL, and various data science libraries to transform raw data into actionable business intelligence.',
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
      detailedDescription: 'I develop decentralized applications and smart contracts using blockchain technologies. My focus includes DeFi protocols, NFT platforms, and cross-chain solutions. I work with Stellar, Ethereum, and Rust-based blockchain frameworks to create secure, scalable, and efficient decentralized systems.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm0 4a1 1 0 000 2h1.5l.5-1H3zm4-8a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm0 4a1 1 0 000 2h1.5l.5-1H7zm4-8a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2zm0 4a1 1 0 000 2h1.5l.5-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Development',
      description: 'Backend & Frontend Solutions',
      detailedDescription: 'I build full-stack web applications with Python backends and modern frontend interfaces. For backend development, I use Python with frameworks like FastAPI and Django to create robust APIs and server-side logic. On the frontend, I work with JavaScript, TypeScript, and React to build responsive, interactive user interfaces that provide seamless user experiences.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const languages = [
    { name: 'Python', level: 'Expert' },
    { name: 'Rust', level: 'Advanced' },
    { name: 'R', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' }
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-wide">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          I build intelligent systems and intuitive UIs, blending AI, reinforcement learning, and blockchain into elegant, functional products.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                expandedCard === index ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="p-8 text-center">
                <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                {/* Expand/Collapse Icon */}
                <div className="flex justify-center">
                  <svg 
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${
                      expandedCard === index ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedCard === index && (
                <div className="px-8 pb-8 border-t border-gray-100">
                  <div className="pt-6">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {item.detailedDescription}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-white rounded-3xl p-10 md:p-12">
          <h3 className="text-xl font-light text-primary text-center mb-12 tracking-wide">
            Programming Languages
          </h3>
          
          {/* Vertical Timeline */}
          <div className="relative max-w-md mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {/* Languages */}
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="relative flex items-center pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></div>
                  
                  {/* Language name */}
                  <div className="px-4 py-2 bg-gray-50 rounded-full border border-gray-200/60">
                    <span className="text-sm font-normal text-gray-600">
                      {lang.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
