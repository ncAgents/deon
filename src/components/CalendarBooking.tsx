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
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light text-primary tracking-wide">
              Book a Meeting
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mt-2 font-light">
            Let's discuss your project or collaboration ideas
          </p>
        </div>

        {/* Meeting Details */}
        <div className="p-6">
          {/* Meeting Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Main Meeting Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-secondary/10 to-hover/10 rounded-2xl p-6 border border-secondary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-hover rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Technical Discussion
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Let's discuss AI/ML projects, blockchain development, reinforcement learning, 
                    or any technical challenges you're working on. I'm here to help with solutions and collaboration opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Duration & Price Card */}
            <div className="space-y-4">
              {/* Duration Card */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-lg font-semibold text-primary">60 minutes</p>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Price</p>
                    <p className="text-lg font-semibold text-green-600">Free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <div className="text-center mb-6">
            <button
              onClick={handleBookMeeting}
              className="bg-secondary hover:bg-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Now
            </button>
          </div>

          {/* Meeting Details */}
          <div className="p-4 bg-gradient-to-r from-secondary/10 to-hover/10 rounded-xl border border-secondary/20">
            <h4 className="text-sm font-semibold text-primary mb-3">
              📅 Meeting Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div>
                <strong>Timezone:</strong> East Africa Time (EAT)
              </div>
              <div>
                <strong>Platform:</strong> Google Meet / Zoom
              </div>
              <div>
                <strong>Preparation:</strong> Come with questions or project details
              </div>
              <div>
                <strong>Follow-up:</strong> Resources shared after the meeting
              </div>
            </div>
          </div>

          {/* Contact Alternative */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 font-light text-sm">
              Prefer to email instead? 
              <a 
                href="mailto:625deon@gmail.com" 
                className="text-secondary hover:text-hover font-medium ml-1"
              >
                Send me an email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
