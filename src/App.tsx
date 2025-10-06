import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
