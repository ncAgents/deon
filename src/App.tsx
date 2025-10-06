import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Credentials from './pages/Credentials';
import Playground from './pages/Playground';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
};

export default App;
