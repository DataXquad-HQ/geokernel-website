import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import UseCasesPage from './UseCasesPage.jsx';

function UseCasesContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"><UseCasesPage /></main>
      <Footer />
    </div>
  );
}

export default function UseCasesApp() {
  return (
    <LanguageProvider>
      <UseCasesContent />
    </LanguageProvider>
  );
}
