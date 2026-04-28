import React, { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPartners = () => {
    const element = document.getElementById('partners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg shadow-blue-900/5 py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Hexagon className="w-8 h-8 text-blue-500 fill-current/20" />
          <span className="font-bold text-xl tracking-tight text-white">
            GeoKernel
          </span>
        </a>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          {/* CTA Button */}
          <button 
            onClick={scrollToPartners}
            className={`px-6 py-2.5 rounded-full font-bold transition-all duration-200 hover:scale-105 shadow-md text-sm ${
            scrolled 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white text-blue-900 hover:bg-blue-50'
          }`}>
            {t.common.contactSales}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;