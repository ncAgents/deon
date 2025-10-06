import React, { useState } from 'react';
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
        { name: 'SQL', description: 'Data querying and optimization' },
        { name: 'JavaScript/TypeScript', description: 'AI web integrations' },
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
              <Link to="/skills" className="text-secondary font-medium">
                Skills
              </Link>
              <Link to="/playground" className="text-primary hover:text-secondary transition-colors duration-200">
                Playground
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

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={closeMobileMenu}
                  className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/credentials"
                  onClick={closeMobileMenu}
                  className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                >
                  Credentials
                </Link>
                <Link
                  to="/skills"
                  onClick={closeMobileMenu}
                  className="block text-secondary font-medium px-3 py-2 text-base"
                >
                  Skills
                </Link>
                <Link
                  to="/playground"
                  onClick={closeMobileMenu}
                  className="block text-primary hover:text-secondary transition-colors duration-200 px-3 py-2 text-base font-medium"
                >
                  Playground
                </Link>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive overview of my technical expertise across programming languages, 
            frameworks, and cutting-edge technologies in AI, blockchain, and data science.
          </p>
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

                case 4: // AI/LLM - Horizontal Scrolling Cards
                  return (
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg flex-shrink-0 w-64"
                        >
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
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
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  );

                case 7: // Tools & Platforms - Simple List
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white/95 transition-all duration-300 border border-white/50 hover:shadow-lg"
                        >
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
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
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
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
  );
};

export default Skills;
