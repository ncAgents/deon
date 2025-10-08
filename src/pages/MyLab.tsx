import React, { useState, memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Concept {
  id: number;
  title: string;
  teaser: string;
  description: string;
  category: string;
}

const MyLab: React.FC = memo(() => {
  const [selectedConcept, setSelectedConcept] = useState<Concept | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Recursion",
      teaser: "A function that calls itself to solve problems elegantly.",
      description: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It's like a Russian nesting doll - each doll contains a smaller version of itself. In code, this means breaking down complex problems into simpler, identical sub-problems. The key is having a base case (when to stop) and a recursive case (how to break it down further). It's powerful for tasks like traversing tree structures, calculating factorials, or solving puzzles like the Tower of Hanoi.",
      category: "Algorithms"
    },
    {
      id: 2,
      title: "Fermi Paradox",
      teaser: "If the universe is so vast, where is everyone?",
      description: "The Fermi Paradox asks a simple but profound question: given the vast number of stars and planets in our galaxy, why haven't we found evidence of other intelligent civilizations? Enrico Fermi famously asked 'Where is everybody?' during a lunch conversation in 1950. Possible explanations range from the Great Filter (something prevents civilizations from reaching advanced stages) to the Zoo Hypothesis (advanced civilizations are watching but not interfering). It challenges our assumptions about life, intelligence, and our place in the cosmos.",
      category: "Universe"
    },
    {
      id: 3,
      title: "Neural Networks",
      teaser: "Teaching computers to think like brains, one connection at a time.",
      description: "Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) that process information by passing signals between layers. Each connection has a weight that adjusts during learning, similar to how our brains strengthen connections through experience. These networks can recognize patterns, make predictions, and even create art. They're the foundation of modern AI, powering everything from image recognition to language translation.",
      category: "AI"
    },
    {
      id: 4,
      title: "Blockchain",
      teaser: "A digital ledger that's impossible to tamper with.",
      description: "Blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) linked and secured using cryptography. Each block contains a cryptographic hash of the previous block, creating an unbreakable chain. This makes it virtually impossible to alter past records without changing all subsequent blocks. Beyond cryptocurrency, blockchain enables smart contracts, supply chain tracking, and decentralized applications that don't require trusted intermediaries.",
      category: "Technology"
    },
    {
      id: 5,
      title: "Creative Constraints",
      teaser: "Sometimes limitations are the key to breakthrough innovation.",
      description: "Creative constraints are limitations that actually enhance creativity rather than hinder it. When we have unlimited options, we often suffer from choice paralysis. But when we're forced to work within specific boundaries - like using only three colors, writing a story in exactly 100 words, or building with limited materials - our brains find novel solutions. This principle is used in design thinking, where constraints like time, budget, or resources often lead to the most innovative solutions.",
      category: "Creativity"
    },
    {
      id: 6,
      title: "Quantum Computing",
      teaser: "Computing with the weirdness of quantum mechanics.",
      description: "Quantum computing harnesses quantum mechanical phenomena like superposition and entanglement to process information. Unlike classical bits that are either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously. This allows quantum computers to explore many solutions at once, potentially solving certain problems exponentially faster than classical computers. While still in early stages, quantum computing could revolutionize cryptography, drug discovery, and optimization problems.",
      category: "Technology"
    },
    {
      id: 7,
      title: "The Butterfly Effect",
      teaser: "How a small change can have massive consequences.",
      description: "The Butterfly Effect is a concept from chaos theory suggesting that small changes in initial conditions can lead to vastly different outcomes. The name comes from the idea that a butterfly flapping its wings in Brazil could set off a tornado in Texas. This isn't about butterflies causing weather, but about how complex systems are sensitive to initial conditions. It explains why weather prediction is so difficult and why small decisions in our lives can have profound long-term effects.",
      category: "Theories"
    },
    {
      id: 8,
      title: "Design Thinking",
      teaser: "Human-centered problem solving that starts with empathy.",
      description: "Design thinking is a methodology for solving complex problems by focusing on human needs. It follows five stages: Empathize (understand users), Define (identify problems), Ideate (brainstorm solutions), Prototype (create simple versions), and Test (gather feedback). This iterative process ensures solutions are both innovative and practical. It's used beyond traditional design - in business strategy, education, and social innovation. The key insight is that the best solutions come from deeply understanding the people you're designing for.",
      category: "Creativity"
    }
  ];

  const openModal = (concept: Concept) => {
    setSelectedConcept(concept);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedConcept(null);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI': 'bg-blue-100 text-blue-800',
      'Algorithms': 'bg-green-100 text-green-800',
      'Universe': 'bg-purple-100 text-purple-800',
      'Technology': 'bg-cyan-100 text-cyan-800',
      'Creativity': 'bg-orange-100 text-orange-800',
      'Theories': 'bg-pink-100 text-pink-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            My Lab is a space for ideas that make me pause, think, or smile from neural networks to the nature of time. Simple words, deep thoughts, and endless curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Concepts Grid */}
      <section className="bg-background py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
            {concepts.map((concept) => (
              <div
                key={concept.id}
                onClick={() => openModal(concept)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100 group"
              >
                <div className="p-4 md:p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(concept.category)}`}>
                      {concept.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                    {concept.title}
                  </h3>
                  
                  {/* Teaser */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {concept.teaser}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center text-secondary font-medium text-sm group-hover:text-hover transition-colors duration-200">
                    <span>Learn More</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedConcept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="mb-3">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(selectedConcept.category)}`}>
                      {selectedConcept.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {selectedConcept.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed text-base">
                  {selectedConcept.description}
                </p>
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={closeModal}
                  className="w-full bg-secondary hover:bg-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
});

MyLab.displayName = 'MyLab';

export default MyLab;
