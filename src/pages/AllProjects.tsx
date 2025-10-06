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
      title: 'Ardena',
      description: 'An AI platform that helps people create AI agents without writing any single code. Build intelligent assistants and automate workflows with a user-friendly interface.',
      image: '/ardena.png',
      githubLink: 'https://github.com/deonchinese/ardena',
      demoLink: 'https://ardena.xyz',
      technologies: ['AI/ML', 'Python', 'React', 'FastAPI'],
      category: 'AI/ML',
      featured: true
    },
    {
      id: 2,
      title: 'EgerEats',
      description: 'A complete end-to-end food delivery application with restaurant management, order tracking, and payment processing capabilities.',
      image: '/eats.png',
      githubLink: 'https://github.com/deonchinese/egereats',
      demoLink: 'https://app.egereats.software/',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
      featured: true
    },
    {
      id: 3,
      title: 'Stellar Crowdfunding',
      description: 'A decentralized crowdfunding platform built on Stellar blockchain using Soroban smart contracts for secure and transparent fundraising.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center',
      githubLink: 'https://github.com/NBW-Hackathon/DeonStellar',
      demoLink: 'https://stellar-crowdfunding.vercel.app',
      technologies: ['Stellar', 'Soroban', 'Smart Contracts', 'Rust', 'Blockchain'],
      category: 'Blockchain',
      featured: true
    },
    {
      id: 4,
      title: 'Moon Landing Agent',
      description: 'AI-powered simulation that models the autonomous landing of a spacecraft on the moon using reinforcement learning.',
      image: '/moon.png',
      githubLink: 'https://github.com/Deon62/Lunar-Moon-landing-Agent',
      demoLink: 'https://moon-landing-demo.vercel.app',
      technologies: ['Python', 'PyTorch', 'OpenAI Gym', 'Reinforcement Learning'],
      category: 'AI/ML',
      featured: false
    },
    {
      id: 5,
      title: 'Six Degrees of Separation',
      description: 'Six Degrees of Separation is a graph-based algorithmic project that explores the theory that any two people are connected by six or fewer relationships. It demonstrates the power of graph theory in understanding human networks and the interconnectedness of modern social systems.',
      image: '/six.png',
      githubLink: 'https://github.com/Deon62/AI-6-Degrees-of-separation-movie_actors',
      demoLink: 'https://six-degrees-demo.vercel.app',
      technologies: ['Gymnasium', 'Swig', 'PyTorch', 'GNNs'],
      category: 'AI/ML',
      featured: false
    }
  ];

  const categories = ['All', 'AI/ML', 'Blockchain', 'Web Development'];

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
              <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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

        {/* View More Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/Deon62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
            >
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View More on GitHub
            </a>
            <a
              href="https://huggingface.co/chinesemusk/spaces"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
            >
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              View More on Hugging Face
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
