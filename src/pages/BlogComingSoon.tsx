import React from 'react';
import { Link } from 'react-router-dom';

const BlogComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-light text-primary mb-4">
          Blog Coming Soon
        </h1>
        
        {/* Decorative line */}
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>

        {/* Message */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          I'm working hard to bring you an in-depth blog post about this project. 
          It will cover the technical challenges, solutions, and insights that went into building it.
        </p>

        <p className="text-base text-gray-500 mb-8">
          Check back soon for the full story! 🤗
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-white text-primary border-2 border-secondary hover:bg-secondary hover:text-white transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            View Projects
          </Link>
          
          <Link
            to="/"
            className="inline-flex items-center bg-secondary text-white hover:bg-hover transition-all duration-200 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>

        {/* Social Media Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            In the meantime, you can find me on:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://medium.com/@deon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-hover transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComingSoon;

