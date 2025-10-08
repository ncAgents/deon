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
      text: "Hello, let's chat about Deon 🤗\n\nThis is a preview AI assistant. For a more intelligent and comprehensive AI about Deon, visit: ",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const portfolioKnowledge = {
    about: "Deon Chinese is a brilliant computer science student who's basically a wizard at merging AI, reinforcement learning, and blockchain into beautiful, functional products. He's like the Tony Stark of tech - but with better UI design skills! 😄",
    skills: "Deon's superpowers include: Python (he speaks it fluently), Rust (because C++ wasn't hard enough), R (for when he wants to be fancy with statistics), and React (for making things look pretty). His main expertise? AI Engineering, Data Science, and Blockchain development - basically the holy trinity of modern tech!",
    projects: {
      ardena: "Ardena is Deon's AI platform that lets people create AI agents without writing a single line of code. It's like having a personal AI assistant factory! The demo is live at ardena.xyz - check it out!",
      egereats: "EgerEats is a complete food delivery app that Deon built from scratch. It's like Uber Eats, but probably with better code (and hopefully better food recommendations). You can try it at app.egereats.software!",
      stellar: "Stellar Crowdfunding is Deon's blockchain baby - a decentralized crowdfunding platform built on Stellar using Soroban smart contracts. It's like Kickstarter, but with more blockchain magic and less fees!",
      moon: "Moon Landing Agent - Deon trained an AI to land on the moon using reinforcement learning. Because apparently, teaching AI to land on celestial bodies is just a casual side project for him! 🚀",
      sixDegrees: "Six Degrees of Separation - Deon built a graph-based algorithm to explore how we're all connected. It's like Facebook's 'People You May Know' but way more sophisticated and probably less creepy!"
    },
    experience: "Deon specializes in building intelligent systems that actually make sense to humans (which is harder than it sounds). He experiments with blockchain innovations and creates seamless user experiences - basically making complex tech look easy!",
    contact: "Want to chat with Deon? You can use the contact form on this site, or stalk him on social media: Twitter (@Deonchinese), LinkedIn, GitHub (@Deon62), or even WhatsApp (+254702248984). He's surprisingly responsive for someone who probably has 47 projects running simultaneously!",
    resume: "Deon's resume is available in the Credentials section, along with his professional certificates. It's probably the most impressive resume you'll see today - unless you're also a blockchain AI wizard!",
    humor: [
      "Fun fact: Deon probably dreams in Python syntax! 🐍",
      "I heard Deon once debugged a blockchain issue by staring at it really hard. True story!",
      "Deon's code is so clean, it probably has better hygiene than most humans!",
      "Legend says Deon can make AI models that actually understand human emotions. Scary, right?",
      "Deon once built a neural network that learned to make coffee. It was the best coffee ever made by a computer!"
    ]
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Specific project questions first
    if (message.includes('ardena')) {
      return portfolioKnowledge.projects.ardena;
    }
    if (message.includes('egereats') || message.includes('eats')) {
      return portfolioKnowledge.projects.egereats;
    }
    if (message.includes('stellar') || message.includes('crowdfunding')) {
      return portfolioKnowledge.projects.stellar;
    }
    if (message.includes('moon') || message.includes('landing')) {
      return portfolioKnowledge.projects.moon;
    }
    if (message.includes('six degrees') || message.includes('separation')) {
      return portfolioKnowledge.projects.sixDegrees;
    }
    
    // General project questions
    if (message.includes('project') || message.includes('work') || message.includes('portfolio') || message.includes('build')) {
      return "Deon has some seriously impressive projects! There's Ardena (AI platform), EgerEats (food delivery), Stellar Crowdfunding (blockchain), Moon Landing Agent (AI space mission), and Six Degrees of Separation (graph algorithms). Each one is more mind-blowing than the last! Want to know about any specific project?";
    }
    
    // About Deon
    if (message.includes('about') || message.includes('who') || message.includes('introduce') || message.includes('know about him')) {
      return portfolioKnowledge.about;
    }
    
    // Skills and expertise
    if (message.includes('skill') || message.includes('expertise') || message.includes('language') || message.includes('programming')) {
      return portfolioKnowledge.skills;
    }
    
    // Experience and background
    if (message.includes('experience') || message.includes('background') || message.includes('career')) {
      return portfolioKnowledge.experience;
    }
    
    // Contact information
    if (message.includes('contact') || message.includes('reach') || message.includes('connect') || message.includes('social')) {
      return portfolioKnowledge.contact;
    }
    
    // Resume and credentials
    if (message.includes('resume') || message.includes('cv') || message.includes('certificate') || message.includes('credential')) {
      return portfolioKnowledge.resume;
    }
    
    // AI and Machine Learning
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning') || message.includes('ml')) {
      return "Deon is absolutely obsessed with AI! He's built Ardena (AI agent platform), trained a Moon Landing Agent using reinforcement learning, and probably has a neural network making his coffee by now! His AI projects are like watching magic happen, but with more math and less rabbits. 🧠✨";
    }
    
    // Blockchain and crypto
    if (message.includes('blockchain') || message.includes('crypto') || message.includes('defi')) {
      return "Deon's blockchain game is strong! He built Stellar Crowdfunding using Soroban smart contracts. It's like he's trying to make blockchain actually useful for regular people (revolutionary concept, I know!). He experiments with blockchain innovations and makes them look easy - which they definitely are not! 🔗";
    }
    
    // Design and UI/UX
    if (message.includes('design') || message.includes('ui') || message.includes('ux') || message.includes('interface')) {
      return "Deon has this magical ability to make complex tech look beautiful and intuitive. He blends technical expertise with great design to create products that don't make users want to throw their computers out the window. It's like he speaks both 'developer' and 'human' fluently! 🎨";
    }
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Deon's work and expertise. Feel free to ask me anything about his projects, skills, or experience!";
    }
    
    // Humor and fun responses
    if (message.includes('funny') || message.includes('joke') || message.includes('humor')) {
      return portfolioKnowledge.humor[Math.floor(Math.random() * portfolioKnowledge.humor.length)];
    }
    
    // Technology questions
    if (message.includes('python')) {
      return "Python is Deon's first language (after English, presumably). He uses it for everything from AI models to web backends. I'm pretty sure he could write Python in his sleep! 🐍";
    }
    if (message.includes('rust')) {
      return "Rust is Deon's choice for when he wants to write code that's both fast AND safe. It's like he enjoys a challenge! He uses it for blockchain development and system programming. Brave soul! 🦀";
    }
    if (message.includes('react')) {
      return "React is how Deon makes the web look pretty! He uses it for building user interfaces that don't make people cry. His React skills are solid - probably because he actually reads the documentation! ⚛️";
    }
    
    // Default response
    return "That's an interesting question! While I have extensive knowledge about Deon's work, projects, and expertise, I might not have specific information about that. Feel free to ask about his AI projects, blockchain work, data science experience, or any other aspects of his portfolio!";
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
                  <Link to="/credentials" className="text-primary hover:text-secondary transition-colors duration-200">
                    Credentials
                  </Link>
                  <Link to="/skills" className="text-primary hover:text-secondary transition-colors duration-200">
                    Skills
                  </Link>
                  <Link to="/playground" className="text-secondary font-medium">
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
                        className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
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
                        className="flex items-center text-secondary py-3 text-lg font-medium"
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
      <div className="h-[calc(100vh-64px)] flex flex-col">
        {/* Simple Greeting */}
        <div className="text-center py-6 bg-white border-b border-gray-200">
          <p className="text-xl text-primary font-light">Hello, let's chat about Deon 🤗</p>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 bg-white flex flex-col">

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
                      ? 'bg-gray-800 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  {message.id === 1 ? (
                    <div className="text-sm leading-relaxed">
                      <p>{message.text}</p>
                      <a 
                        href="https://huggingface.co/spaces/chinesemusk/Deon" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-hover underline font-medium"
                      >
                        Hugging Face Spaces
                      </a>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  )}
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
            
            {/* AI Notice */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                This is a preview AI assistant. For a more intelligent and comprehensive AI about Deon, visit{' '}
                <a 
                  href="https://huggingface.co/spaces/chinesemusk/Deon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-hover underline"
                >
                  Hugging Face Spaces
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
