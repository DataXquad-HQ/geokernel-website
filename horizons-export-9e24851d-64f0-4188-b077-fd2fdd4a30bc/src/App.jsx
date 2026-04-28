import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import { LanguageProvider } from '@/context/LanguageContext';

// Logic to handle root redirect based on browser or localStorage
const RootRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    // Default to 'en' as requested, or saved language if available
    const targetLang = savedLang === 'zh' ? 'zh' : 'en';
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/en" element={<HomePage />} />
          <Route path="/zh" element={<HomePage />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;