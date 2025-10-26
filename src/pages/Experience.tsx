import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Experience: React.FC = memo(() => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const experiences = [
    {
      id: 1,
      role: 'Freelance AI Engineer',
      description: 'Building AI and ML systems, deploying intelligent applications, and exploring reinforcement learning projects.',
      date: '2025 – Present',
      category: 'work'
    },
    {
      id: 2,
      role: 'Developer Relations – Stellar East Africa',
      description: 'Leading technical sessions, empowering developers to build on Stellar, and organizing community events.',
      date: '2025 – Present',
      category: 'work'
    },
    {
      id: 3,
      role: 'Intern – Ministry of Public Service (Kenya)',
      description: 'Worked on data processing and system support under the ICT division.',
      date: 'May 2025 – August 2025',
      category: 'work'
    },
    {
      id: 4,
      role: 'Intern – Future Interns (Remote)',
      description: 'Collaborated on data science and AI-related projects remotely with a cross-functional team.',
      date: 'January 2025 – February 2025',
      category: 'work'
    },
    {
      id: 5,
      role: 'Speaker – Stellar Workshop, Addis Ababa (Ethiopia)',
      description: 'Delivered a session on blockchain development and the Stellar ecosystem for African developers.',
      date: '2025',
      category: 'speaking'
    },
    {
      id: 6,
      role: 'Speaker – Kampala Blockchain Fest (Uganda)',
      description: 'Led a workshop on decentralized systems and Stellar-based applications.',
      date: '2025',
      category: 'speaking'
    },
    {
      id: 7,
      role: 'AI Speaker – ETHSafari 2025 (Kenya)',
      description: 'Discussed reinforcement learning and AI agent development during the AI track at ETHSafari.',
      date: '2025',
      category: 'speaking'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<'All' | 'work' | 'speaking'>('All');

  const filteredExperiences = selectedCategory === 'All'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Deon | Experience</title>
        <meta name="description" content="Professional experiences and speaking engagements" />
        <link rel="canonical" href="https://deon-7anr.vercel.app/experience" />
      </Helmet>
      <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-50" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-16">
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link to="/projects" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Projects
                </Link>
                <Link to="/experience" className="flex items-center font-medium" style={{ color: '#00C853' }}>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Experience
                </Link>
                <Link to="/credentials" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Credentials
                </Link>
                <Link to="/skills" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills
                </Link>
                <Link to="/playground" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Playground
                </Link>
                <Link to="/my-lab" className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  My Lab
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="text-gray-800 hover:text-green-600 focus:outline-none"
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

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 z-50 md:hidden">
                <div
                  className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                  onClick={closeMobileMenu}
                ></div>

                <div className="fixed top-0 right-0 h-full w-64 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                      <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                      <button
                        onClick={closeMobileMenu}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex-1 px-6 py-6">
                      <nav className="space-y-4">
                        <Link
                          to="/"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          Home
                        </Link>
                        <Link
                          to="/projects"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          Projects
                        </Link>
                        <Link
                          to="/experience"
                          onClick={closeMobileMenu}
                          className="flex items-center py-3 text-lg font-medium"
                          style={{ color: '#00C853' }}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Experience
                        </Link>
                        <Link
                          to="/credentials"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Credentials
                        </Link>
                        <Link
                          to="/skills"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Skills
                        </Link>
                        <Link
                          to="/playground"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Playground
                        </Link>
                        <Link
                          to="/my-lab"
                          onClick={closeMobileMenu}
                          className="flex items-center text-gray-800 hover:text-green-600 transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          My Lab
                        </Link>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light mb-6" style={{ color: '#1C1C1C' }}>
              Experience
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${selectedCategory === 'All'
                ? 'text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:border-green-600'
                }`}
              style={selectedCategory === 'All' ? { backgroundColor: '#00C853' } : {}}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('work')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${selectedCategory === 'work'
                ? 'text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:border-green-600'
                }`}
              style={selectedCategory === 'work' ? { backgroundColor: '#00C853' } : {}}
            >
              Work
            </button>
            <button
              onClick={() => setSelectedCategory('speaking')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 text-sm ${selectedCategory === 'speaking'
                ? 'text-white'
                : 'bg-white text-gray-800 border border-gray-300 hover:border-green-600'
                }`}
              style={selectedCategory === 'speaking' ? { backgroundColor: '#00C853' } : {}}
            >
              Speaking
            </button>
          </div>

          {/* Experience Cards */}
          <div className="relative">
            {filteredExperiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                <div
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden relative group"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      experience.category === 'work' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}>
                      {experience.category === 'work' ? (
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      )}
                      {experience.category === 'work' ? 'Work' : 'Speaking'}
                    </span>
                  </div>

                  {/* Subtle accent line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                    experience.category === 'work' 
                      ? 'bg-gradient-to-b from-green-400 to-green-300' 
                      : 'bg-gradient-to-b from-purple-400 to-purple-300'
                  }`}></div>

                  <div className="p-6 pl-8">
                    <div className="flex items-start mb-3">
                      <div className={`mr-3 mt-1 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        experience.category === 'work' 
                          ? 'bg-green-50' 
                          : 'bg-purple-50'
                      }`}>
                        {experience.category === 'work' ? (
                          <svg className={`w-5 h-5 ${experience.category === 'work' ? 'text-green-600' : 'text-purple-600'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium mb-1.5" style={{ color: '#1C1C1C', fontFamily: "'Inter', 'Poppins', sans-serif" }}>
                          {experience.role}
                        </h3>
                        <p className="text-xs mb-2 font-medium" style={{ color: '#00C853', fontFamily: "'Inter', 'Poppins', sans-serif" }}>
                          {experience.date}
                        </p>
                        <p className="leading-relaxed text-gray-600" style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}>
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {index < filteredExperiences.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-green-300 via-green-200 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

Experience.displayName = 'Experience';

export default Experience;


