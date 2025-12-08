import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Arsenal } from './components/Arsenal';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-iron-950 text-parchment-200 selection:bg-blood-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Arsenal />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Global Vignette & Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-overlay opacity-30 bg-grunge"></div>
      <div className="fixed inset-0 pointer-events-none z-[99] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
    </div>
  );
};

export default App;