import React, { memo, useEffect, useState, useRef } from 'react';

const Projects: React.FC = memo(() => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to load images when section is about to be visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        rootMargin: '200px 0px', // Start loading 200px before the section is visible
        threshold: 0.1 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: if section is already visible, start loading immediately
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setIsVisible(true);
      }
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Preload critical images with loading state
  useEffect(() => {
    if (!isVisible) return;

    const preloadImages = [
      '/ardena.png',
      '/eats.png',
      '/deeprag.jpg',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center'
    ];
    
    let loadedCount = 0;
    const totalImages = preloadImages.length;

    preloadImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [isVisible]);

  const featuredProjects = [
    {
      id: 0,
      title: 'PDF Chatbot (RAG AI)',
      description: 'An intelligent PDF chatbot that uses Retrieval Augmented Generation (RAG) to read, understand, and answer questions from long PDF documents even 300+ pages. It suports multiple uploads, streaming responses, and document-specific chat memory.',
      image: '/deeprag.jpg',
      githubLink: 'https://github.com/Deon62/pdfchat',
      demoLink: 'https://youtu.be/uJ6D8hBHudc',
      blogLink: '/coming-soon',
      technologies: ['Python', 'Flask', 'LangChain', 'ChromaDB', 'DeepSeek', 'Mistral Embeddings', 'RAG'],
      category: 'Featured Projects'
    },
    {
      id: 1,
      title: 'Ardena',
      description: 'An AI platform that helps people create AI agents without writing any single code. Build intelligent assistants and automate workflows with a user-friendly interface.',
      image: '/ardena.png',
      githubLink: '/private-repo',
      demoLink: 'https://ardena.xyz',
      blogLink: 'https://medium.com/@deon./ardena-native-home-of-ai-agents-9842ebd13540',
      technologies: ['AI/ML', 'Python', 'React', 'FastAPI'],
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'EgerEats',
      description: 'A complete end-to-end food delivery application with restaurant management, order tracking, and payment processing capabilities.',
      image: '/eats.png',
      githubLink: '/private-repo',
      demoLink: 'https://app.egereats.software/',
      blogLink: '/blog-coming-soon',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Stellar Crowdfunding',
      description: 'A decentralized crowdfunding platform built on Stellar blockchain using Soroban smart contracts for secure and transparent fundraising.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop&crop=center',
      githubLink: 'https://github.com/NBW-Hackathon/DeonStellar',
      demoLink: '/coming-soon',
      blogLink: '/blog-coming-soon',
      technologies: ['Stellar', 'Soroban', 'Smart Contracts', 'Rust', 'Blockchain'],
      category: 'Blockchain'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-wide">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {!imagesLoaded ? (
            // Loading skeleton for featured projects
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 animate-pulse">
                <div className="h-36 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-20"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-14"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-7 bg-gray-200 rounded w-16"></div>
                    <div className="h-7 bg-gray-200 rounded w-14"></div>
                    <div className="h-7 bg-gray-200 rounded w-14"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="h-36 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="eager"
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
                <div className="flex gap-1.5">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-white text-center py-1.5 px-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-secondary text-white text-center py-1.5 px-2 rounded-lg hover:bg-hover transition-colors duration-200 text-xs font-medium"
                  >
                    Demo
                  </a>
                  <a
                    href={project.blogLink}
                    target={project.blogLink.startsWith('/') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="flex-1 text-white text-center py-1.5 px-2 rounded-lg transition-colors duration-200 text-xs font-medium"
                    style={{ backgroundColor: '#C6FF00', color: '#000000' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B8E600'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C6FF00'}
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
            ))
          )}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <a
            href="/projects"
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
});

Projects.displayName = 'Projects';

export default Projects;
