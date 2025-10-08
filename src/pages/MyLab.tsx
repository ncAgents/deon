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
  const [searchTerm, setSearchTerm] = useState('');

  const concepts: Concept[] = [
    {
      id: 1,
      title: "Recursion",
      teaser: "A function that calls itself to solve problems elegantly.",
      description: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. Think of it like Russian nesting dolls, where each doll contains a smaller version of itself. In code, this means breaking down complex problems into simpler, identical sub-problems. The key is having a base case (when to stop) and a recursive case (how to break it down further). It's powerful for tasks like traversing tree structures, calculating factorials, or solving puzzles like the Tower of Hanoi.",
      category: "Algorithms"
    },
    {
      id: 2,
      title: "Breadth First Search",
      teaser: "Exploring all neighbors before moving deeper.",
      description: "Breadth First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It explores all nodes at the present depth level before moving on to nodes at the next depth level. Imagine searching for a friend in a building by checking every room on the first floor before going to the second floor. BFS guarantees finding the shortest path in unweighted graphs and is used in social networks, GPS navigation, and web crawling.",
      category: "Algorithms"
    },
    {
      id: 3,
      title: "Depth First Search",
      teaser: "Going as deep as possible before backtracking.",
      description: "Depth First Search (DFS) is an algorithm that explores as far as possible along each branch before backtracking. Think of it like exploring a maze by always taking the first available path and only turning back when you hit a dead end. DFS uses less memory than BFS and is perfect for problems like finding all possible solutions, detecting cycles, or solving puzzles where you need to explore every possibility.",
      category: "Algorithms"
    },
    {
      id: 4,
      title: "Prisoner's Dilemma",
      teaser: "The classic game of cooperation versus betrayal.",
      description: "The Prisoner's Dilemma is a fundamental example in game theory that shows why two rational individuals might not cooperate, even when it appears to be in their best interest. Two prisoners are interrogated separately and must decide whether to betray their partner or remain silent. The paradox is that while cooperation would benefit both, the rational choice for each individual is to betray. This simple scenario explains complex behaviors in economics, politics, and social interactions.",
      category: "Game Theory"
    },
    {
      id: 5,
      title: "Chicken Game",
      teaser: "The dangerous game of brinkmanship and courage.",
      description: "The Chicken Game is a model of conflict where two parties engage in a potentially dangerous situation to see who will back down first. Named after the dangerous game of driving cars toward each other, it represents situations where backing down means losing face, but continuing means mutual destruction. This game theory model explains nuclear standoffs, business negotiations, and social conflicts where both parties have incentives to appear tough while avoiding catastrophic outcomes.",
      category: "Game Theory"
    },
    {
      id: 6,
      title: "Game Theory",
      teaser: "The mathematics of strategic decision making.",
      description: "Game theory is the mathematical study of strategic decision making in situations where the outcome depends on the choices of multiple players. It analyzes how rational individuals make decisions when their success depends on the actions of others. From economics to biology, game theory explains everything from market competition to evolutionary strategies. It provides frameworks for understanding cooperation, conflict, and the emergence of social norms.",
      category: "Game Theory"
    },
    {
      id: 7,
      title: "Butterfly Effect",
      teaser: "How a small change can have massive consequences.",
      description: "The Butterfly Effect is a concept from chaos theory suggesting that small changes in initial conditions can lead to vastly different outcomes. The name comes from the idea that a butterfly flapping its wings in Brazil could set off a tornado in Texas. This isn't about butterflies causing weather, but about how complex systems are sensitive to initial conditions. It explains why weather prediction is so difficult and why small decisions in our lives can have profound long-term effects.",
      category: "Theories"
    },
    {
      id: 8,
      title: "Fermi Paradox",
      teaser: "If the universe is so vast, where is everyone?",
      description: "The Fermi Paradox asks a simple but profound question: given the vast number of stars and planets in our galaxy, why haven't we found evidence of other intelligent civilizations? Enrico Fermi famously asked 'Where is everybody?' during a lunch conversation in 1950. Possible explanations range from the Great Filter (something prevents civilizations from reaching advanced stages) to the Zoo Hypothesis (advanced civilizations are watching but not interfering). It challenges our assumptions about life, intelligence, and our place in the cosmos.",
      category: "Universe"
    },
    {
      id: 9,
      title: "Quantum Zeno Effect",
      teaser: "How observation can freeze quantum systems.",
      description: "The Quantum Zeno Effect is a phenomenon where frequent measurements of a quantum system can prevent it from changing. Named after Zeno's paradox about motion, it suggests that a watched quantum pot never boils. In quantum mechanics, continuous observation can actually freeze a system in its initial state. This counterintuitive effect has been experimentally verified and has implications for quantum computing, where it can be used to protect quantum states from decoherence.",
      category: "Physics"
    },
    {
      id: 10,
      title: "Banach Tarski Paradox",
      teaser: "The mathematical magic of infinite sets.",
      description: "The Banach Tarski Paradox is a theorem in mathematics that states you can take a solid ball in 3D space and cut it into a finite number of pieces, then reassemble those pieces into two balls identical to the original. This seems impossible because it appears to create matter from nothing. The paradox relies on the Axiom of Choice and works because the pieces are not measurable sets. It demonstrates the strange properties of infinite sets and challenges our intuitive understanding of volume and space.",
      category: "Mathematics"
    },
    {
      id: 11,
      title: "Superposition",
      teaser: "Being in multiple states simultaneously.",
      description: "Superposition is a fundamental principle in quantum mechanics where a quantum system can exist in multiple states simultaneously until it's observed. Like Schrödinger's cat being both alive and dead, quantum particles can be in multiple positions, have multiple energies, or spin in multiple directions at once. This property is what makes quantum computers so powerful, as they can process many possibilities simultaneously. Superposition challenges our classical understanding of reality and is the foundation of quantum mechanics.",
      category: "Physics"
    },
    {
      id: 12,
      title: "Holographic Principle",
      teaser: "The universe as information on a boundary.",
      description: "The Holographic Principle suggests that all the information contained in a volume of space can be represented as information on the boundary of that space. It's like how a 3D hologram can be encoded on a 2D surface. This principle, emerging from black hole physics, suggests that our three-dimensional reality might be a projection of information stored on a two-dimensional surface. It's a radical idea that could unify quantum mechanics and general relativity, potentially explaining the nature of spacetime itself.",
      category: "Physics"
    },
    {
      id: 13,
      title: "Time Dilation",
      teaser: "How time slows down at high speeds.",
      description: "Time dilation is a phenomenon predicted by Einstein's theory of relativity where time passes at different rates for observers in different reference frames. The faster you move, the slower time passes for you relative to someone at rest. This isn't just theoretical: GPS satellites must account for time dilation to maintain accuracy. Time dilation shows that time is not absolute but depends on your motion and gravitational field, fundamentally changing our understanding of the nature of time.",
      category: "Physics"
    },
    {
      id: 14,
      title: "Heat Death of the Universe",
      teaser: "The ultimate fate of our cosmos.",
      description: "The Heat Death of the Universe is a theory about the ultimate fate of the cosmos. As the universe expands, entropy increases, and eventually all energy will be evenly distributed. Stars will burn out, matter will decay, and the universe will reach a state of maximum entropy where no work can be done. It's not a dramatic explosion but a slow, cold fade into darkness. This thermodynamic end state represents the universe's final equilibrium, where no energy gradients exist to drive any processes.",
      category: "Universe"
    },
    {
      id: 15,
      title: "The Halting Problem",
      teaser: "The fundamental limit of computation.",
      description: "The Halting Problem is a fundamental result in computer science that proves it's impossible to create a general algorithm that can determine whether any given program will halt or run forever. Alan Turing proved this in 1936, showing that there are limits to what computers can do. This result has profound implications for the nature of computation, artificial intelligence, and the limits of mathematical proof. It demonstrates that some problems are fundamentally unsolvable, no matter how powerful our computers become.",
      category: "Computer Science"
    },
    {
      id: 16,
      title: "Birthday Paradox",
      teaser: "Why you only need 23 people for a 50% chance of shared birthdays.",
      description: "The Birthday Paradox demonstrates how our intuition about probability can be misleading. In a group of just 23 people, there's a 50% chance that two people share the same birthday. Most people would guess you'd need 183 people for a 50% chance. This counterintuitive result comes from the fact that we're not looking for a specific birthday match, but any match among all possible pairs. It's a classic example of how combinatorial mathematics can surprise us and has applications in cryptography and hash collisions.",
      category: "Mathematics"
    },
    {
      id: 17,
      title: "The Singularity",
      teaser: "When AI surpasses human intelligence.",
      description: "The Singularity refers to a hypothetical future point when artificial intelligence surpasses human intelligence, leading to rapid, unpredictable changes in civilization. Coined by mathematician John von Neumann and popularized by Ray Kurzweil, the concept suggests that once AI reaches human-level intelligence, it could quickly improve itself, leading to superintelligence. This could result in either utopian abundance or existential risk, depending on how the transition is managed. The Singularity represents both the promise and peril of advanced AI development.",
      category: "AI"
    },
    {
      id: 18,
      title: "Neural Emergence",
      teaser: "Intelligence arising from simple units.",
      description: "Neural Emergence is the phenomenon where complex intelligence and behavior arise from the interaction of simple, individual units. Like how consciousness emerges from billions of simple neurons, or how swarm intelligence emerges from simple rules followed by individual agents. This principle suggests that intelligence isn't just about having smart components, but about how those components interact and self-organize. It's the foundation of artificial neural networks and explains how complex behaviors can emerge from simple computational rules.",
      category: "AI"
    },
    {
      id: 19,
      title: "Stochastic Parrots Hypothesis",
      teaser: "Do LLMs understand or just predict?",
      description: "The Stochastic Parrots Hypothesis, proposed by researchers including Emily Bender, suggests that large language models like GPT don't truly understand language but are sophisticated pattern-matching systems that predict the next word based on training data. Like a parrot that can mimic speech without understanding meaning, these models can generate coherent text without genuine comprehension. This hypothesis challenges claims about AI understanding and raises important questions about the nature of intelligence, meaning, and the capabilities of current AI systems.",
      category: "AI"
    },
    {
      id: 20,
      title: "Anthropic Reasoning",
      teaser: "Why we exist in a universe that allows us.",
      description: "Anthropic Reasoning is the principle that we can only observe a universe that is compatible with our existence. It explains why the fundamental constants of physics seem fine-tuned for life. The weak anthropic principle states that we observe the universe as it is because we couldn't exist in a universe with different constants. The strong version suggests the universe must be such that observers can exist. This reasoning helps explain cosmic coincidences and has implications for multiverse theories and the nature of physical laws.",
      category: "Physics"
    },
    {
      id: 21,
      title: "Boltzmann Brains",
      teaser: "Random self-aware fluctuations in space.",
      description: "Boltzmann Brains are hypothetical self-aware entities that could arise from random fluctuations in a universe in thermal equilibrium. Named after physicist Ludwig Boltzmann, the concept suggests that in an infinite universe with infinite time, random quantum fluctuations could occasionally produce a fully formed, conscious brain. This thought experiment challenges our understanding of consciousness, the arrow of time, and the nature of reality. It's a profound puzzle in cosmology that questions whether we might be Boltzmann Brains ourselves.",
      category: "Physics"
    },
    {
      id: 22,
      title: "The Observer Effect",
      teaser: "Observation changes what's observed.",
      description: "The Observer Effect is a fundamental principle in quantum mechanics where the act of observation or measurement changes the system being observed. Unlike classical physics where we can observe without affecting the system, quantum systems are so sensitive that the measurement process itself alters the state. This isn't just about the tools we use, but about the fundamental nature of quantum reality. The Observer Effect shows that consciousness and measurement play a crucial role in determining what exists in the quantum world.",
      category: "Physics"
    },
    {
      id: 23,
      title: "Schrödinger's Cat",
      teaser: "Alive and dead until measured.",
      description: "Schrödinger's Cat is a famous thought experiment that illustrates the strange nature of quantum superposition. A cat is placed in a box with a radioactive atom that has a 50% chance of decaying and releasing poison. According to quantum mechanics, until we open the box and observe, the cat exists in a superposition of being both alive and dead simultaneously. This paradox highlights the difference between quantum weirdness at the microscopic level and our everyday experience of reality.",
      category: "Physics"
    },
    {
      id: 24,
      title: "Causal Loops",
      teaser: "Cause and effect feeding each other in time travel.",
      description: "Causal Loops are theoretical scenarios in time travel where an event causes itself through a circular chain of cause and effect. Imagine going back in time and giving your past self the idea that you later use to go back in time. The information or object has no clear origin point, creating a paradox. These loops challenge our understanding of causality and suggest that time travel might allow for events without clear beginnings. They're a staple of science fiction but also a serious topic in theoretical physics.",
      category: "Physics"
    },
    {
      id: 25,
      title: "The Ship of Theseus",
      teaser: "Identity through gradual change.",
      description: "The Ship of Theseus is a classic philosophical paradox that questions the nature of identity and continuity. If you replace all the planks of a ship one by one, is it still the same ship? What if you use the old planks to build a new ship? This thought experiment explores whether objects maintain their identity through gradual change and challenges our intuitions about what makes something the same thing over time. It applies to everything from cells in our bodies to the gradual evolution of ideas and institutions.",
      category: "Philosophy"
    },
    {
      id: 26,
      title: "Quantum Teleportation",
      teaser: "Transferring information without matter.",
      description: "Quantum Teleportation is a process that transfers quantum information from one location to another without physically moving the particles. It works by creating quantum entanglement between two particles, then measuring the original particle and sending the measurement results to the destination. The receiving particle then transforms into an exact copy of the original. This doesn't violate the speed of light because the actual information transfer requires classical communication. It's a key technology for quantum computing and secure communication.",
      category: "Physics"
    },
    {
      id: 27,
      title: "Chaos Theory",
      teaser: "Order emerging from randomness.",
      description: "Chaos Theory studies how small changes in initial conditions can lead to vastly different outcomes in complex systems. Despite the name, chaos theory reveals hidden order within seemingly random systems. It shows that many natural phenomena, from weather patterns to heart rhythms, follow deterministic rules that are so sensitive to initial conditions that they appear random. This theory has applications in meteorology, economics, biology, and helps us understand the delicate balance between predictability and unpredictability in nature.",
      category: "Mathematics"
    },
    {
      id: 28,
      title: "Fractals",
      teaser: "Infinite self-repeating patterns.",
      description: "Fractals are geometric patterns that repeat at every scale, creating infinite complexity from simple rules. They appear throughout nature in snowflakes, coastlines, tree branches, and even in our lungs. Fractals have fractional dimensions, meaning they exist between whole numbers. A coastline might have a dimension of 1.25, more complex than a line but less than a plane. These patterns reveal the hidden mathematical beauty in natural forms and have applications in computer graphics, antenna design, and understanding natural phenomena.",
      category: "Mathematics"
    },
    {
      id: 29,
      title: "Golden Ratio",
      teaser: "Math hidden in art and nature.",
      description: "The Golden Ratio is approximately 1.618, a mathematical constant that appears throughout art, architecture, and nature. It's the ratio where the whole is to the larger part as the larger part is to the smaller part. This ratio creates aesthetically pleasing proportions found in the Parthenon, the Mona Lisa, sunflower spirals, and even in the proportions of the human body. The Golden Ratio represents a universal standard of beauty and harmony that connects mathematics with aesthetics and natural design.",
      category: "Mathematics"
    },
    {
      id: 30,
      title: "Time Crystals",
      teaser: "Structures that repeat in time instead of space.",
      description: "Time Crystals are a new phase of matter that repeat their structure in time rather than space, creating perpetual motion without energy input. Unlike regular crystals that have repeating patterns in space, time crystals have patterns that repeat over time. They were first proposed in 2012 and experimentally created in 2017. These structures could revolutionize quantum computing and challenge our understanding of thermodynamics by creating systems that never reach equilibrium.",
      category: "Physics"
    },
    {
      id: 31,
      title: "Retrocausality",
      teaser: "Future events influencing the past.",
      description: "Retrocausality is the theoretical possibility that future events can influence past events, reversing the normal flow of cause and effect. While this seems to violate our everyday understanding of time, some interpretations of quantum mechanics suggest that measurement choices in the future can affect quantum states in the past. This doesn't allow for changing history, but it challenges our linear understanding of time and suggests that the quantum world might operate with a more flexible concept of causality than classical physics.",
      category: "Physics"
    },
    {
      id: 32,
      title: "Quantum Levitation",
      teaser: "Objects floating on magnetic fields.",
      description: "Quantum Levitation occurs when superconductors are cooled below their critical temperature and placed in a magnetic field, causing them to float above magnets. This happens because superconductors expel magnetic fields, creating perfect diamagnetism. The quantum locking effect allows the superconductor to hover at specific heights and even tilt at angles while maintaining its position. This phenomenon demonstrates the strange properties of quantum mechanics at macroscopic scales and has potential applications in transportation and energy storage.",
      category: "Physics"
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

  // Filter concepts based on search term
  const filteredConcepts = concepts.filter(concept => 
    concept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.teaser.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    concept.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI': 'bg-blue-100 text-blue-800',
      'Algorithms': 'bg-green-100 text-green-800',
      'Game Theory': 'bg-yellow-100 text-yellow-800',
      'Physics': 'bg-purple-100 text-purple-800',
      'Mathematics': 'bg-indigo-100 text-indigo-800',
      'Computer Science': 'bg-cyan-100 text-cyan-800',
      'Universe': 'bg-pink-100 text-pink-800',
      'Theories': 'bg-orange-100 text-orange-800',
      'Philosophy': 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              My Lab is a space for ideas that make me pause, think, or smile from neural networks to the nature of time. Simple words, deep thoughts, and endless curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Search Bar */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search concepts, categories, or ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/80 backdrop-blur-sm text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {searchTerm && (
            <div className="mt-2 text-sm text-gray-600">
              {filteredConcepts.length} concept{filteredConcepts.length !== 1 ? 's' : ''} found
            </div>
          )}
        </div>
      </div>

      {/* Concepts Grid */}
      <section className="bg-background py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          {filteredConcepts.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">No concepts found</h3>
              <p className="text-gray-500 mb-4">Try searching for different terms or browse all concepts</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-secondary hover:text-hover font-medium"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
              {filteredConcepts.map((concept) => (
              <div
                key={concept.id}
                onClick={() => openModal(concept)}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-100 group"
              >
                <div className="p-3 md:p-6">
                  {/* Title and Category Badge */}
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <h3 className="text-sm md:text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 flex-1">
                      {concept.title}
                    </h3>
                    <span className={`inline-block text-xs font-semibold px-2 py-1 md:px-3 rounded-full ml-2 ${getCategoryColor(concept.category)}`}>
                      {concept.category}
                    </span>
                  </div>
                  
                  {/* Teaser */}
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
                    {concept.teaser}
                  </p>
                  
                  {/* Learn More Button */}
                  <div className="flex items-center text-secondary font-medium text-xs md:text-sm group-hover:text-hover transition-colors duration-200">
                    <span>Learn More</span>
                    <svg className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
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
