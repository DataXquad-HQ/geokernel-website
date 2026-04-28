import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomePage from './HomePage.jsx';

function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"><HomePage /></main>
      <Footer />
    </div>
  );
}

export default function HomeApp() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}
