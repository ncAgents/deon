import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const allProjects = [
    {
      id: 1,
      title: 'AI-Powered Trading Bot',
      description: 'An intelligent trading system using reinforcement learning to optimize cryptocurrency trading strategies with real-time market analysis.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/ai-trading-bot',
      demoLink: 'https://ai-trading-demo.vercel.app',
      technologies: ['Python', 'TensorFlow', 'Reinforcement Learning', 'APIs'],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 2,
      title: 'Blockchain Analytics Dashboard',
      description: 'A comprehensive dashboard for analyzing blockchain transactions, smart contract interactions, and DeFi protocol metrics.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/blockchain-analytics',
      demoLink: 'https://blockchain-dashboard.netlify.app',
      technologies: ['React', 'Rust', 'Web3', 'D3.js'],
      category: 'Blockchain',
      featured: true
    },
    {
      id: 3,
      title: 'Predictive Data Science Platform',
      description: 'A machine learning platform for predictive analytics with automated model selection and real-time data processing capabilities.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/predictive-platform',
      demoLink: 'https://predictive-platform.herokuapp.com',
      technologies: ['Python', 'R', 'Scikit-learn', 'FastAPI'],
      category: 'Data Science',
      featured: true
    },
    {
      id: 4,
      title: 'Neural Network Image Classifier',
      description: 'A deep learning model for image classification using convolutional neural networks with 95% accuracy on custom datasets.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/image-classifier',
      demoLink: 'https://image-classifier-demo.vercel.app',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Flask'],
      category: 'AI/ML',
      featured: false
    },
    {
      id: 5,
      title: 'Smart Contract DeFi Protocol',
      description: 'A decentralized finance protocol built on Ethereum with automated market making and yield farming capabilities.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/defi-protocol',
      demoLink: 'https://defi-protocol-demo.netlify.app',
      technologies: ['Solidity', 'Web3.js', 'React', 'Hardhat'],
      category: 'Blockchain',
      featured: false
    },
    {
      id: 6,
      title: 'Real-time Data Pipeline',
      description: 'A scalable data processing pipeline for real-time analytics with Apache Kafka and stream processing capabilities.',
      image: '/api/placeholder/400/250',
      githubLink: 'https://github.com/deonchinese/data-pipeline',
      demoLink: 'https://data-pipeline-demo.herokuapp.com',
      technologies: ['Python', 'Apache Kafka', 'Docker', 'PostgreSQL'],
      category: 'Data Science',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Blockchain', 'Data Science'];

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-primary hover:text-secondary transition-colors duration-200">
                Home
              </Link>
              <Link to="/projects" className="text-secondary font-medium">
                Projects
              </Link>
                  <Link to="/credentials" className="text-primary hover:text-secondary transition-colors duration-200">
                    Credentials
                  </Link>
                  <Link to="/skills" className="text-primary hover:text-secondary transition-colors duration-200">
                    Skills
                  </Link>
                  <Link to="/playground" className="text-primary hover:text-secondary transition-colors duration-200">
                    Playground
                  </Link>
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
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={closeMobileMenu}
                  className="block text-secondary font-medium px-3 py-2 text-base"
                >
                  Projects
                </Link>
                    <Link
                      to="/credentials"
                      onClick={closeMobileMenu}
                      className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                    >
                      Credentials
                    </Link>
                    <Link
                      to="/skills"
                      onClick={closeMobileMenu}
                      className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                    >
                      Skills
                    </Link>
                    <Link
                      to="/playground"
                      onClick={closeMobileMenu}
                      className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                    >
                      Playground
                    </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-wide">
            All Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A comprehensive showcase of my work in AI, blockchain, and data science
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white text-primary border border-gray-300 hover:border-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
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
                  {project.featured && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                      Featured
                    </span>
                  )}
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

        {/* Back to Home */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
