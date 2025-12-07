import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <ContactSection />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;