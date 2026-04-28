import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext.jsx';
import Header from './Header.jsx';

export default function HeaderIsland() {
  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}
