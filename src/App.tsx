import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import Credentials from './pages/Credentials';
import Skills from './pages/Skills';
import Playground from './pages/Playground';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/coming-soon" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
