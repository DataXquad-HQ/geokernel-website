import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext.jsx';
import Footer from './Footer.jsx';

export default function FooterIsland() {
  return (
    <LanguageProvider>
      <Footer />
    </LanguageProvider>
  );
}
