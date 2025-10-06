import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Credentials: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      name: 'Certificate 1',
      issuer: 'Issuing Organization',
      image: '/certs/cert.jpg',
      description: 'Description of the certificate and what it represents'
    },
    {
      id: 2,
      name: 'Udemy Course 1',
      issuer: 'Udemy',
      image: '/certs/udemy1.jpg',
      description: 'Professional development course completion certificate'
    },
    {
      id: 3,
      name: 'Udemy Course 2',
      issuer: 'Udemy',
      image: '/certs/udemy2.jpg',
      description: 'Advanced skills certification from Udemy platform'
    }
  ];

  const openLightbox = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/certs/resume.pdf';
    link.download = 'Deon-Chinese-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <Link to="/projects" className="text-primary hover:text-secondary transition-colors duration-200">
                Projects
              </Link>
              <Link to="/credentials" className="text-secondary font-medium">
                Credentials
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-primary hover:text-secondary focus:outline-none focus:text-secondary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Credentials
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
            <h2 className="text-2xl font-bold text-primary mb-4">Resume</h2>
            <p className="text-gray-600 mb-6">
              Download my comprehensive resume to learn more about my experience, skills, and achievements
            </p>
            <button
              onClick={downloadResume}
              className="inline-flex items-center bg-secondary hover:bg-hover text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Certificates & Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                {/* Certificate Image */}
                <div 
                  className="h-48 bg-gray-100 cursor-pointer"
                  onClick={() => openLightbox(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Certificate Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
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
