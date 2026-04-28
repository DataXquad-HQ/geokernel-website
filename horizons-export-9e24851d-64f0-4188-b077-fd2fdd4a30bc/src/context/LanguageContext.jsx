import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations } from '@/lib/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState('en');
  const location = useLocation();
  const navigate = useNavigate();

  // Sync state with URL and localStorage
  useEffect(() => {
    const path = location.pathname;
    
    // Determine language from URL
    if (path.startsWith('/zh')) {
      if (language !== 'zh') {
        setLanguageState('zh');
        localStorage.setItem('language', 'zh');
      }
    } else if (path.startsWith('/en')) {
      if (language !== 'en') {
        setLanguageState('en');
        localStorage.setItem('language', 'en');
      }
    }
  }, [location.pathname]);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Logic to switch URL while preserving current path structure if needed
    // For now, we mainly have the home page, so simply navigating to /{lang} is sufficient
    navigate(`/${lang}`);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};