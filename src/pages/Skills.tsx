import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Skills: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const skillCategories = [
    {
      id: 'core-languages',
      title: 'Core Languages',
      style: 'gradient-blue',
      description: 'Programming languages that form the foundation of my technical expertise',
      skills: [
        { name: 'Python', description: 'Data science, AI, ML, and blockchain scripting' },
        { name: 'Rust', description: 'Blockchain backend & performance-critical systems' },
        { name: 'R', description: 'Statistical computing and data analysis' },
        { name: 'JS/TS', description: 'AI web integrations and frontend' },
        { name: 'SQL', description: 'Data querying and optimization' },
        { name: 'C++', description: 'Reinforcement learning environments, performance tuning' }
      ]
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      style: 'gradient-green',
      description: 'Tools and libraries for data analysis, visualization, and statistical modeling',
      skills: [
        { name: 'NumPy', description: 'Numerical computing and array operations' },
        { name: 'Pandas', description: 'Data manipulation and analysis' },
        { name: 'Matplotlib', description: 'Data visualization and plotting' },
        { name: 'Seaborn', description: 'Statistical data visualization' },
        { name: 'Plotly / Dash', description: 'Interactive web-based visualizations' },
        { name: 'Scikit-learn', description: 'Machine learning algorithms and tools' },
        { name: 'Statsmodels', description: 'Statistical modeling and analysis' },
        { name: 'Polars', description: 'Modern high-performance data processing' }
      ]
    },
    {
      id: 'ml-dl',
      title: 'Machine Learning & Deep Learning',
      style: 'gradient-purple',
      description: 'Frameworks and tools for building intelligent systems',
      skills: [
        { name: 'TensorFlow', description: 'End-to-end machine learning platform' },
        { name: 'PyTorch', description: 'Deep learning framework with dynamic computation' },
        { name: 'Keras', description: 'High-level neural networks API' },
        { name: 'Hugging Face Transformers', description: 'Pre-trained transformer models' },
        { name: 'XGBoost / LightGBM / CatBoost', description: 'Gradient boosting frameworks' },
        { name: 'Optuna', description: 'Hyperparameter optimization framework' },
        { name: 'ONNX', description: 'Model deployment and portability' }
      ]
    },
    {
      id: 'reinforcement-learning',
      title: 'Reinforcement Learning',
      style: 'gradient-orange',
      description: 'Specialized tools for training intelligent agents',
      skills: [
        { name: 'Stable Baselines3', description: 'Reliable RL implementations' },
        { name: 'Gymnasium / OpenAI Gym', description: 'RL environment standards' },
        { name: 'RLlib (Ray)', description: 'Scalable reinforcement learning' },
        { name: 'PettingZoo / MARLlib', description: 'Multi-agent reinforcement learning' }
      ]
    },
    {
      id: 'ai-llm',
      title: 'AI / LLM Development',
      style: 'gradient-pink',
      description: 'Modern AI development tools and large language model integration',
      skills: [
        { name: 'LangChain / LangGraph', description: 'LLM application development' },
        { name: 'LlamaIndex', description: 'Data framework for LLM applications' },
        { name: 'OpenAI API / Gemini API / DeepSeek API', description: 'Large language model APIs' },
        { name: 'Vector Databases', description: 'Pinecone, Weaviate, Chroma, FAISS' },
        { name: 'Prompt Engineering', description: 'Tool chaining and optimization' }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3',
      style: 'gradient-cyan',
      description: 'Decentralized technologies and smart contract development',
      skills: [
        { name: 'Stellar SDK / Soroban', description: 'Stellar blockchain development' },
        { name: 'Web3.js / Ethers.js', description: 'Ethereum blockchain interaction' },
        { name: 'Rust (Smart Contracts)', description: 'High-performance smart contracts' },
        { name: 'Solidity / Hardhat / Foundry', description: 'Ethereum smart contract development' },
        { name: 'IPFS / Arweave', description: 'Decentralized storage solutions' },
        { name: 'Substrate', description: 'Building custom blockchains' }
      ]
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & MLOps',
      style: 'gradient-indigo',
      description: 'Infrastructure and tools for production ML systems',
      skills: [
        { name: 'Apache Airflow / Prefect', description: 'Workflow orchestration' },
        { name: 'Docker / Kubernetes', description: 'Containerization and orchestration' },
        { name: 'DVC / MLflow', description: 'ML experiment tracking and versioning' },
        { name: 'Supabase / Firebase / PostgreSQL', description: 'Database and backend services' },
        { name: 'AWS / GCP / Hugging Face Hub', description: 'Cloud platforms and ML services' }
      ]
    },
    {
      id: 'tools-platforms',
      title: 'Tools & Platforms',
      style: 'gradient-gray',
      description: 'Development tools and platforms for productivity',
      skills: [
        { name: 'VS Code / Jupyter / Google Colab', description: 'Development environments' },
        { name: 'Git / GitHub Actions', description: 'Version control and CI/CD' },
        { name: 'Vercel / Render / Hugging Face Spaces', description: 'Deployment platforms' },
        { name: 'Anaconda', description: 'Python package management' },
        { name: 'Notion / Obsidian', description: 'Knowledge management systems' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skills</title>
        <meta name="description" content="Explore Deon's skills and expertise." />
        <link rel="canonical" href="https://deon-7anr.vercel.app/" />
      </Helmet>
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
                <Link to="/experience" className="text-primary hover:text-secondary transition-colors duration-200">
                  Experience
                </Link>
                <Link to="/skills" className="text-secondary font-medium">
                  Skills
                </Link>
                <Link to="/playground" className="text-primary hover:text-secondary transition-colors duration-200">
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
                          to="/experience"
                          onClick={closeMobileMenu}
                          className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Experience
                        </Link>
                        <Link
                          to="/skills"
                          onClick={closeMobileMenu}
                          className="flex items-center text-secondary py-3 text-lg font-medium"
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Skills
                        </Link>
                        <Link
                          to="/playground"
                          onClick={closeMobileMenu}
                          className="flex items-center text-primary hover:text-secondary transition-colors duration-200 py-3 text-lg font-medium"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 tracking-wide">
              Technical Skills
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary to-hover mx-auto mb-8"></div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {skillCategories.map((category, index) => {
              const getGradientClasses = (style: string) => {
                switch (style) {
                  case 'gradient-blue':
                    return 'from-blue-500/10 to-cyan-500/10 border-blue-200/50';
                  case 'gradient-green':
                    return 'from-green-500/10 to-emerald-500/10 border-green-200/50';
                  case 'gradient-purple':
                    return 'from-purple-500/10 to-violet-500/10 border-purple-200/50';
                  case 'gradient-orange':
                    return 'from-orange-500/10 to-amber-500/10 border-orange-200/50';
                  case 'gradient-pink':
                    return 'from-pink-500/10 to-rose-500/10 border-pink-200/50';
                  case 'gradient-cyan':
                    return 'from-cyan-500/10 to-teal-500/10 border-cyan-200/50';
                  case 'gradient-indigo':
                    return 'from-indigo-500/10 to-blue-500/10 border-indigo-200/50';
                  case 'gradient-gray':
                    return 'from-gray-500/10 to-slate-500/10 border-gray-200/50';
                  default:
                    return 'from-secondary/10 to-hover/10 border-secondary/20';
                }
              };

              const getTextColor = (style: string) => {
                switch (style) {
                  case 'gradient-blue':
                    return 'text-blue-600';
                  case 'gradient-green':
                    return 'text-green-600';
                  case 'gradient-purple':
                    return 'text-purple-600';
                  case 'gradient-orange':
                    return 'text-orange-600';
                  case 'gradient-pink':
                    return 'text-pink-600';
                  case 'gradient-cyan':
                    return 'text-cyan-600';
                  case 'gradient-indigo':
                    return 'text-indigo-600';
                  case 'gradient-gray':
                    return 'text-gray-600';
                  default:
                    return 'text-secondary';
                }
              };

              const getAccentColor = (style: string) => {
                switch (style) {
                  case 'gradient-blue':
                    return 'bg-blue-500';
                  case 'gradient-green':
                    return 'bg-green-500';
                  case 'gradient-purple':
                    return 'bg-purple-500';
                  case 'gradient-orange':
                    return 'bg-orange-500';
                  case 'gradient-pink':
                    return 'bg-pink-500';
                  case 'gradient-cyan':
                    return 'bg-cyan-500';
                  case 'gradient-indigo':
                    return 'bg-indigo-500';
                  case 'gradient-gray':
                    return 'bg-gray-500';
                  default:
                    return 'bg-secondary';
                }
              };

              // Different layouts for different sections
              const renderSkills = () => {
                switch (index) {
                  case 0: // Core Languages - Grid Layout
                    return (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg text-center"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  case 1: // Data Science - Timeline with Circles
                    return (
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                        <div className="space-y-6">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="relative flex items-start space-x-4">
                              <div className={`w-8 h-8 ${getAccentColor(category.style)} rounded-full flex items-center justify-center flex-shrink-0 relative z-10`}>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                              </div>
                              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg flex-1">
                                <h3 className="text-lg font-semibold text-primary mb-2">
                                  {skill.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                  {skill.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );

                  case 2: // Machine Learning - Hexagonal Cards
                    return (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg transform hover:rotate-1"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  case 3: // Reinforcement Learning - Vertical List with Icons
                    return (
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg flex items-center space-x-4"
                          >
                            <div className={`w-6 h-6 ${getAccentColor(category.style)} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-primary">
                                {skill.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {skill.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    );

                  case 4: // AI/LLM - Masonry Style Grid
                    return (
                      <div className="columns-1 md:columns-2 gap-4 space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg break-inside-avoid mb-4"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  case 5: // Blockchain - Tag Cloud Style
                    return (
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-1">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  case 6: // Data Engineering - Compact Grid
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  case 7: // Tools & Platforms - Simple List
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );

                  default:
                    return (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg"
                          >
                            <h3 className="text-sm font-semibold text-primary mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                }
              };

              return (
                <div
                  key={category.id}
                  className={`bg-gradient-to-br ${getGradientClasses(category.style)} rounded-2xl p-8 border transition-all duration-500 hover:shadow-xl`}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <h2 className={`text-3xl md:text-4xl font-light ${getTextColor(category.style)} mb-4 tracking-wide`}>
                      {category.title}
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills with Different Layouts */}
                  {renderSkills()}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-secondary/10 to-hover/10 rounded-2xl p-8 border border-secondary/20">
              <h3 className="text-2xl font-light text-primary mb-4 tracking-wide">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Let's discuss how my technical expertise can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 bg-secondary hover:bg-hover text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  View My Projects
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold rounded-lg transition-all duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
