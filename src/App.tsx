import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const AllProjects = React.lazy(() => import('./pages/AllProjects'));
const Credentials = React.lazy(() => import('./pages/Credentials'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Playground = React.lazy(() => import('./pages/Playground'));
const MyLab = React.lazy(() => import('./pages/MyLab'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const PrivateRepo = React.lazy(() => import('./pages/PrivateRepo'));
const BlogComingSoon = React.lazy(() => import('./pages/BlogComingSoon'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-primary font-light">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/my-lab" element={<MyLab />} />
          <Route path="/coming-soon" element={<NotFound />} />
          <Route path="/blog-coming-soon" element={<BlogComingSoon />} />
          <Route path="/private-repo" element={<PrivateRepo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
