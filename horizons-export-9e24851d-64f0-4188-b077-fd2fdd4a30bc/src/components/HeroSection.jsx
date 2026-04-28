import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Zap, WifiOff, LocateFixed } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToPartners = () => {
    const element = document.getElementById('partners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: t.hero.stats.speed, icon: Zap },
    { label: t.hero.stats.offline, icon: WifiOff },
    { label: t.hero.stats.accuracy, icon: LocateFixed },
  ];

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1643330683233-ff2ac89b002c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/90 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {t.hero.titleLine1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300">
              {t.hero.titleLine2}
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-slate-200 font-medium">
              {t.hero.titleLine3}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button 
              onClick={scrollToPartners}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t.hero.ctaPartner}
            </button>
            <button 
              onClick={scrollToRoadmap}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 group"
            >
              {t.hero.ctaRoadmap}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center group flex items-center justify-center gap-3">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-lg md:text-xl font-bold text-white tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;