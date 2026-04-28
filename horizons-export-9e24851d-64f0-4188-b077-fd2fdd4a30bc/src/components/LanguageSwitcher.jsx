import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100/10 text-slate-200 hover:text-white border border-transparent hover:border-slate-700"
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'en' ? '中文' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;