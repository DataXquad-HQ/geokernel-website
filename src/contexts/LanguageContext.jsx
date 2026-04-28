import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations.js';

const LANG_EVENT = 'geokernel:lang';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === 'undefined') return 'zh';
    return localStorage.getItem('language') || 'zh';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
  };

  useEffect(() => {
    const handler = (e) => setLanguageState(e.detail);
    window.addEventListener(LANG_EVENT, handler);
    return () => window.removeEventListener(LANG_EVENT, handler);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const tr = translations[language] || translations['zh'];
  const getSection = (section) => tr?.[section] || {};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, tr, getSection }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
