import React from 'react';

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'AI-Powered Trading Bot',
      description: 'An intelligent trading system using reinforcement learning to optimize cryptocurrency trading strategies with real-time market analysis.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/ai-trading-bot',
      demoLink: 'https://ai-trading-demo.vercel.app',
      technologies: ['Python', 'TensorFlow', 'Reinforcement Learning', 'APIs'],
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Blockchain Analytics Dashboard',
      description: 'A comprehensive dashboard for analyzing blockchain transactions, smart contract interactions, and DeFi protocol metrics.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/blockchain-analytics',
      demoLink: 'https://blockchain-dashboard.netlify.app',
      technologies: ['React', 'Rust', 'Web3', 'D3.js'],
      category: 'Blockchain'
    },
    {
      id: 3,
      title: 'Predictive Data Science Platform',
      description: 'A machine learning platform for predictive analytics with automated model selection and real-time data processing capabilities.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/predictive-platform',
      demoLink: 'https://predictive-platform.herokuapp.com',
      technologies: ['Python', 'R', 'Scikit-learn', 'FastAPI'],
      category: 'Data Science'
    }
  ];

  return (
    <section id="projects" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-1">🚀</div>
                  <p className="text-gray-500 text-xs">Project Preview</p>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4">
                {/* Category Badge */}
                <div className="mb-2">
                  <span className="inline-block bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Project Title */}
                <h3 className="text-lg font-bold text-primary mb-2">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white text-center py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-white text-center py-2 px-3 rounded-lg hover:bg-hover transition-colors duration-200 text-xs font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="#all-projects"
            className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
