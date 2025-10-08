import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Credentials: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const certificates = [
    {
      id: 1,
      image: '/certs/cert.jpg'
    },
    {
      id: 2,
      image: '/certs/udemy1.jpg'
    },
    {
      id: 3,
      image: '/certs/udemy2.jpg'
    }
  ];

  const openLightbox = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const downloadResume = async () => {
    setIsDownloading(true);
    setDownloadSuccess(false);
    
    try {
      // Simulate download progress
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const link = document.createElement('a');
      link.href = '/certs/resume.pdf';
      link.download = 'Deon-Chinese-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      setDownloadSuccess(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-16">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-primary hover:text-secondary transition-colors duration-200">
                Home
              </Link>
              <Link to="/projects" className="text-primary hover:text-secondary transition-colors duration-200">
                Projects
              </Link>
                  <Link to="/credentials" className="text-secondary font-medium">
                    Credentials
                  </Link>
                  <Link to="/skills" className="text-primary hover:text-secondary transition-colors duration-200">
                    Skills
                  </Link>
                  <Link to="/playground" className="text-primary hover:text-secondary transition-colors duration-200">
                    Playground
                  </Link>
                  <Link to="/my-lab" className="text-primary hover:text-secondary transition-colors duration-200">
                    My Lab
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

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
                onClick={closeMobileMenu}
              ></div>
              
              {/* Menu panel */}
              <div className="fixed top-0 right-0 h-full w-64 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-primary">Menu</h2>
                    <button
                      onClick={closeMobileMenu}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Navigation Links */}
                  <div className="flex-1 px-6 py-6">
                    <nav className="space-y-4">
                      <Link
                        to="/"
                        onClick={closeMobileMenu}
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                      </Link>
                      <Link
                        to="/projects"
                        onClick={closeMobileMenu}
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Projects
                      </Link>
                      <Link
                        to="/credentials"
                        onClick={closeMobileMenu}
                        className="flex items-center text-secondary py-3 text-lg font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Credentials
                      </Link>
                      <Link
                        to="/skills"
                        onClick={closeMobileMenu}
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Skills
                      </Link>
                      <Link
                        to="/playground"
                        onClick={closeMobileMenu}
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Playground
                      </Link>
                      <Link
                        to="/my-lab"
                        onClick={closeMobileMenu}
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-wide">
            Credentials
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Professional certifications, courses, and achievements that showcase my expertise
          </p>
        </div>

        {/* Resume Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-light text-primary mb-4 tracking-wide">Resume</h2>
            <p className="text-gray-600 mb-6">
              Download my comprehensive resume to learn more about my experience, skills, and achievements
            </p>
            <button
              onClick={downloadResume}
              disabled={isDownloading}
              className={`inline-flex items-center font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform ${
                isDownloading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : downloadSuccess
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-secondary hover:bg-hover hover:scale-105'
              } text-white`}
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : downloadSuccess ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Downloaded!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </>
              )}
            </button>
            
            {/* Success Message */}
            {downloadSuccess && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Resume downloaded successfully!
              </div>
            )}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-light text-primary text-center mb-12 tracking-wide">Certificates & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary/20"
              >
                {/* Certificate Image */}
                <div 
                  className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt="Certificate"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medium Blogs Section */}
        <div className="bg-gradient-to-br from-secondary/10 to-hover/10 rounded-2xl p-8 mb-12 border border-secondary/20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-hover rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-light text-primary mb-4 tracking-wide">Technical Blog</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              I write about AI, machine learning, blockchain development, and technical insights. 
              Explore my latest articles and tutorials on Medium.
            </p>
            <a
              href="https://medium.com/me/stories?tab=posts-published"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary hover:bg-hover text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
              Read My Articles
            </a>
          </div>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              loading="lazy"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Credentials;
