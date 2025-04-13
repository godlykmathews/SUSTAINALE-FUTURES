import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Instagram, Facebook, Twitter, Leaf, Wind, Droplets } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productImages = [
    "https://i.pinimg.com/736x/06/a3/40/06a34021c40903dcafecbad4e04c48b5.jpg",
    "https://i.etsystatic.com/17393568/r/il/868ab3/1625526718/il_fullxfull.1625526718_g4qk.jpg",
    "https://i.etsy.com/i2/0eb63f0e6ae7ef1bed89b4829b9d0f344798c899/d2F0ZXJtYXJrX3RleHRfdjI/ODMuNjI1LjU1MC43OTU=/z/kpo/il_794xN.1438708795_kpo2.jpg",
    "https://i.etsy.com/i2/7163acdcf859d88be9a674435477155db9b4d4c9/d2F0ZXJtYXJrX3RleHRfdjI/ODMuNjI1LjU1MC43OTU=/z/~B0/il_794xN.2899813344_~B0l.jpg"
  ];

  const woodTypes = [
    { name: "Teak Wood", color: "amber-700", description: "Elegant, durable, and water-resistant" },
    { name: "Mango Wood", color: "amber-500", description: "Unique grain patterns with golden hues" },
    { name: "Blueberry Wood", color: "amber-900", description: "Rich dark tones with subtle blue hints" },
    { name: "Reclaimed Wood", color: "amber-800", description: "Eco-conscious with vintage character" }
  ];

  const features = [
    { icon: <Leaf className="h-10 w-10 text-primary" />, title: "100% Biodegradable", description: "Naturally decomposes without harming the environment" },
    { icon: <Wind className="h-10 w-10 text-primary" />, title: "Low Carbon Footprint", description: "Minimal environmental impact in production" },
    { icon: <Droplets className="h-10 w-10 text-primary" />, title: "15+ Years Durability", description: "Handcrafted for exceptional longevity" }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveImage(prev => (prev + 1) % productImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, productImages.length]);

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="ml-2 font-montserrat font-bold text-2xl">WOODEN ARTISTRY</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Features</a>
              <a href="#collection" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Collection</a>
              <a href="#testimonials" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Testimonials</a>
              <button className="btn-primary">Shop Now</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-inherit">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 nav-link">Features</a>
              <a href="#collection" className="block px-3 py-2 nav-link">Collection</a>
              <a href="#testimonials" className="block px-3 py-2 nav-link">Testimonials</a>
              <button className="w-full btn-primary mt-4">Shop Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/80 to-amber-950/90"></div>
          <img 
            src="https://images.unsplash.com/photo-1597654042052-2e1bf8e5aa5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80" 
            className="w-full h-full object-cover object-center"
            alt="Wooden background"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Wooden Glasses <span className="text-accent">Reimagined</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90 max-w-lg">
              Exquisite handcrafted drinkware from sustainable woods. Where tradition meets modern elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <button className="btn-primary text-lg py-4 px-8">Shop Collection</button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-fade-in">
            <div 
              className="rounded-full w-[450px] h-[450px] bg-white/10 backdrop-blur-md p-10 border border-white/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {productImages.map((src, idx) => (
                <img 
                  key={idx}
                  src={src}
                  alt={`Wooden glass ${idx + 1}`}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 object-contain rounded-lg transition-all duration-700 ${
                    activeImage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                />
              ))}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeImage === idx ? 'bg-accent w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="text-offwhite fill-current h-20 w-full">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose <span className="text-primary">Wood</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card group hover:bg-primary hover:text-white transition-all duration-300">
                <div className="mb-6 group-hover:text-white transition-colors">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white">{feature.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Sustainable Woods</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {woodTypes.map((wood, index) => (
                <div key={index} className={`p-6 rounded-xl bg-${wood.color}/10 border border-${wood.color}/30 hover:shadow-xl transition-all hover:scale-105`}>
                  <div className={`w-10 h-10 rounded-full bg-${wood.color} mb-4`}></div>
                  <h4 className="text-xl font-bold mb-2">{wood.name}</h4>
                  <p className="text-gray-600">{wood.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </section>

      {/* Product Showcase */}
      <section id="collection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Exquisite Collection</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Handcrafted with passion, our wooden glasses elevate every drinking experience with their natural beauty and sustainable elegance.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="feature-card overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://i.etsystatic.com/17393568/r/il/868ab3/1625526718/il_fullxfull.1625526718_g4qk.jpg"
                  alt="Wooden Wine Glass"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <button className="btn-primary">Quick View</button>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Teak Wood Wine Glass</h3>
              <p className="text-gray-600 mb-4">
                Perfect for your favorite wine, these elegant glasses showcase the natural grain of premium teak wood.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$45.00</span>
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>

            <div className="feature-card overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src="https://i.etsy.com/i2/0eb63f0e6ae7ef1bed89b4829b9d0f344798c899/d2F0ZXJtYXJrX3RleHRfdjI/ODMuNjI1LjU1MC43OTU=/z/kpo/il_794xN.1438708795_kpo2.jpg"
                  alt="Wooden Drinking Glass"
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <button className="btn-primary">Quick View</button>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Handcrafted Drinking Set</h3>
              <p className="text-gray-600 mb-4">
                A complete set of drinking glasses made from sustainable mango wood, perfect for everyday use.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">$75.00</span>
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Thompson</h4>
                  <p className="text-gray-600 text-sm">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "These wooden glasses are absolutely stunning. The craftsmanship is exceptional, and they make every drink feel special. Highly recommend!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">James Wilson</h4>
                  <p className="text-gray-600 text-sm">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I bought these for my home bar and they're always a conversation starter. Beautiful grain patterns and surprisingly durable."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michelle Chen</h4>
                  <p className="text-gray-600 text-sm">Verified Buyer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As someone who cares deeply about sustainability, these glasses are perfect. They're beautiful, functional, and I love knowing they're eco-friendly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Drinkware?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the movement towards sustainable living with our handcrafted wooden glasses. Limited stock available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 active:scale-95">
              Shop Collection
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wooden Artistry</h3>
              <p className="text-white/80">
                Handcrafted wooden drinkware for the eco-conscious consumer. Sustainable, durable, beautiful.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-accent">Features</a></li>
                <li><a href="#collection" className="hover:text-accent">Collection</a></li>
                <li><a href="#testimonials" className="hover:text-accent">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: hello@woodenartistry.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Craftsman Way, Woodville</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent"><Instagram className="w-8 h-8" /></a>
                <a href="#" className="hover:text-accent"><Facebook className="w-8 h-8" /></a>
                <a href="#" className="hover:text-accent"><Twitter className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} Wooden Artistry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;