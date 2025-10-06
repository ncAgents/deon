import React, { useState } from 'react';

interface CalendarBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarBooking: React.FC<CalendarBookingProps> = ({ isOpen, onClose }) => {
  const [selectedMeeting, setSelectedMeeting] = useState<string | null>(null);

  const meetingTypes = [
    {
      id: 'consultation',
      title: 'AI/ML Consultation',
      duration: '30 minutes',
      description: 'Discuss AI projects, machine learning strategies, and technical solutions',
      price: 'Free',
      color: 'bg-blue-500'
    },
    {
      id: 'collaboration',
      title: 'Project Collaboration',
      duration: '45 minutes',
      description: 'Explore potential partnerships and collaborative opportunities',
      price: 'Free',
      color: 'bg-green-500'
    },
    {
      id: 'mentorship',
      title: 'Career Mentorship',
      duration: '30 minutes',
      description: 'Get guidance on AI/ML career paths and skill development',
      price: 'Free',
      color: 'bg-purple-500'
    },
    {
      id: 'technical',
      title: 'Technical Discussion',
      duration: '60 minutes',
      description: 'Deep dive into blockchain, reinforcement learning, or system architecture',
      price: 'Free',
      color: 'bg-orange-500'
    }
  ];

  const handleBookMeeting = (meetingType: string) => {
    const calendlyUrls: { [key: string]: string } = {
      consultation: 'https://calendly.com/625deon/ai-ml-consultation',
      collaboration: 'https://calendly.com/625deon/project-collaboration',
      mentorship: 'https://calendly.com/625deon/career-mentorship',
      technical: 'https://calendly.com/625deon/technical-discussion'
    };
    
    window.open(calendlyUrls[meetingType], '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
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
            Choose a meeting type that best fits your needs
          </p>
        </div>

        {/* Meeting Types Grid */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {meetingTypes.map((meeting) => (
              <div
                key={meeting.id}
                className={`border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedMeeting === meeting.id
                    ? 'border-secondary bg-secondary/5'
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
                onClick={() => setSelectedMeeting(meeting.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full ${meeting.color} mr-3`}></div>
                    <h3 className="text-lg font-semibold text-primary">
                      {meeting.title}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {meeting.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 font-light leading-relaxed">
                  {meeting.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">
                    ⏱️ {meeting.duration}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookMeeting(meeting.id);
                    }}
                    className="bg-secondary hover:bg-hover text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-hover/10 rounded-xl border border-secondary/20">
            <h3 className="text-lg font-semibold text-primary mb-3">
              📅 Meeting Details
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
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
            <p className="text-gray-600 font-light">
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
