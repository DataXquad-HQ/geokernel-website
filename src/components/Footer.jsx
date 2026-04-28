import React from 'react';
import { Hexagon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Footer = () => {
  const { tr } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Hexagon className="w-6 h-6 text-blue-500 fill-blue-500/10" />
            <span className="font-bold text-lg text-slate-200 tracking-tight">GeoKernel</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/blog"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              Blog
            </a>
            <a
              href="mailto:sales@dataxquad.com"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              sales@dataxquad.com
            </a>
          </div>

          <div className="text-sm">
            {tr?.footer?.rights || '© 2026 DataXquad Technologies.'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
