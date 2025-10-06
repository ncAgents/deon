import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Playground: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Deon's AI assistant. I can tell you about his work, projects, skills, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioKnowledge = {
    about: "Deon Chinese is a computer science student passionate about AI, reinforcement learning, and UI design. He builds intelligent systems and intuitive UIs, blending AI, reinforcement learning, and blockchain into elegant, functional products.",
    skills: "Deon's main expertise includes AI Engineering, Data Science, and Blockchain development. His programming languages include Python (Expert), Rust (Advanced), R (Advanced), and React (Intermediate).",
    projects: "Deon has worked on several impressive projects including an AI-Powered Trading Bot using reinforcement learning, a Blockchain Analytics Dashboard, and a Predictive Data Science Platform. You can view all his projects in the Projects section.",
    experience: "Deon specializes in building intelligent systems that merge AI with great user experience. He experiments with blockchain innovations and focuses on creating seamless user experiences.",
    contact: "You can reach Deon through the contact form on this website, or connect with him on social media including Twitter, LinkedIn, GitHub, and WhatsApp.",
    resume: "Deon's resume is available for download in the Credentials section, along with his professional certificates and achievements."
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('about') || message.includes('who') || message.includes('introduce')) {
      return portfolioKnowledge.about;
    } else if (message.includes('skill') || message.includes('expertise') || message.includes('language') || message.includes('programming')) {
      return portfolioKnowledge.skills;
    } else if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('build')) {
      return portfolioKnowledge.projects;
    } else if (message.includes('experience') || message.includes('background') || message.includes('career')) {
      return portfolioKnowledge.experience;
    } else if (message.includes('contact') || message.includes('reach') || message.includes('connect') || message.includes('social')) {
      return portfolioKnowledge.contact;
    } else if (message.includes('resume') || message.includes('cv') || message.includes('certificate') || message.includes('credential')) {
      return portfolioKnowledge.resume;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Deon's work and expertise. Feel free to ask me anything about his projects, skills, or experience!";
    } else if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
      return "Deon is passionate about AI and machine learning! He specializes in building intelligent systems, working with reinforcement learning, and creating AI-powered applications. His AI-Powered Trading Bot is a great example of his expertise in this field.";
    } else if (message.includes('blockchain') || message.includes('crypto') || message.includes('defi')) {
      return "Deon has significant experience in blockchain development! He's worked on blockchain analytics dashboards, smart contracts, and DeFi protocols. He experiments with blockchain innovations and integrates them into his projects.";
    } else if (message.includes('design') || message.includes('ui') || message.includes('ux') || message.includes('interface')) {
      return "Deon focuses on creating seamless user experiences and intuitive UIs. He blends technical expertise with great design to create elegant, functional products that users love.";
    } else {
      return "That's an interesting question! While I have extensive knowledge about Deon's work, projects, and expertise, I might not have specific information about that. Feel free to ask about his AI projects, blockchain work, data science experience, or any other aspects of his portfolio!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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
              <Link to="/credentials" className="text-primary hover:text-secondary transition-colors duration-200">
                Credentials
              </Link>
              <Link to="/playground" className="text-secondary font-medium">
                Playground
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Greeting */}
        <div className="text-center mb-8">
          <p className="text-xl text-primary font-light">Hello, let's chat about Deon 🤗</p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px] flex flex-col">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-start space-x-3`}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-hover rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-secondary text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.isUser ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                
                {message.isUser && (
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-hover rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Deon's work, projects, or expertise..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-secondary hover:bg-hover disabled:bg-gray-300 text-white p-3 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
