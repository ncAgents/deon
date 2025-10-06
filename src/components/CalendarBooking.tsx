import React from 'react';

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarBooking: React.FC<CalendarBookingProps> = ({ isOpen, onClose }) => {
  const handleBookMeeting = () => {
    window.open('https://calendly.com/625deon/technical-discussion', '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-light text-primary tracking-wide">
              Book a Meeting
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Meeting Details */}
        <div className="p-6">
          {/* Meeting Info */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-hover rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-lg font-semibold text-primary mb-2">
              Technical Discussion
            </h3>
            <p className="text-gray-600 font-light text-sm mb-4">
              AI/ML, blockchain, and technical challenges
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                60 min
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                Free
              </div>
            </div>
          </div>

          {/* Book Button */}
          <div className="text-center mb-4">
            <button
              onClick={handleBookMeeting}
              className="bg-secondary hover:bg-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </button>
          </div>

          {/* Contact Alternative */}
          <div className="text-center">
            <p className="text-gray-500 font-light text-xs">
              Or 
              <a 
                href="mailto:625deon@gmail.com" 
                className="text-secondary hover:text-hover font-medium ml-1"
              >
                email me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
