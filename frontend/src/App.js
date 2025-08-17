import React, { useState } from 'react';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import LatestModels from './components/LatestModels';
import StoreFeatures from './components/StoreFeatures';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className={`App ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <Categories language={language} />
        <LatestModels language={language} />
        <StoreFeatures language={language} />
        <Testimonials language={language} />
        <FAQ language={language} />
      </main>
      <Footer language={language} />
      <Toaster />
    </div>
  );
}

export default App;