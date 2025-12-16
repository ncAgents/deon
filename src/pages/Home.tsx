import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CalendarBooking from '../components/CalendarBooking';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const openCalendar = () => {
    setIsCalendarOpen(true);
  };

  const closeCalendar = () => {
    setIsCalendarOpen(false);
  };

  return (
    <>
      <SEO
        url="https://deonhq.xyz/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Deon Orina",
          "alternateName": ["chinesemusk", "ChineseMusk", "Deon Chinese", "Deon Gideon", "Dion Orina"],
          "jobTitle": "AI Engineer",
          "url": "https://deonhq.xyz/",
          "image": "https://deonhq.xyz/deon.jpg",
          "sameAs": [
            "https://twitter.com/Deonchinese",
            "https://www.linkedin.com/in/deon-gideon-4a1722252/",
            "https://github.com/deon62",
            "https://medium.com/@deon"
          ]
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Projects />

        {/* Book a Meeting Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6 tracking-wide">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to discuss your next AI project or explore collaboration opportunities?
              Let's schedule a meeting to talk about how we can work together.
            </p>

            <button
              onClick={openCalendar}
              className="bg-secondary hover:bg-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Meeting
            </button>
          </div>
        </section>

        <Contact />
        <Footer />

        {/* Calendar Booking Modal */}
        <CalendarBooking isOpen={isCalendarOpen} onClose={closeCalendar} />
      </div>
    </>
  );
};

export default Home;
