import React, { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Header = () => {
  const { language, setLanguage, tr } = useLanguage();

  const [isHome] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.location.pathname === '/';
  });

  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const toggleLanguage = () => setLanguage(language === 'zh' ? 'en' : 'zh');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 group"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              scrollToSection('hero');
            }
          }}
        >
          <Hexagon className="w-8 h-8 text-blue-400 fill-blue-400/10" />
          <span className="font-bold text-xl tracking-tight text-white">
            GeoKernel
          </span>
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-white/70 hover:text-white text-sm font-medium transition-colors px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>

          <button
            onClick={() => scrollToSection('partners')}
            className={`px-5 py-2.5 rounded-full font-bold transition-all duration-200 hover:scale-105 shadow-md text-sm ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-white text-slate-900 hover:bg-blue-50'
            }`}
          >
            {tr?.common?.contactSales || 'Contact Sales'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
