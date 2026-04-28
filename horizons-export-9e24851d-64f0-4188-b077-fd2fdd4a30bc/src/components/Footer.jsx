import React from 'react';
import { Hexagon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-slate-600 fill-current/10" />
            <span className="font-bold text-lg text-slate-200 tracking-tight">GeoKernel</span>
          </div>

          <div className="text-sm">
             {t.footer.rights}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;