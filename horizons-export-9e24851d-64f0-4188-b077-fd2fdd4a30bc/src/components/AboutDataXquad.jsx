import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const AboutDataXquad = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about"
      className="relative py-24 lg:py-32 flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1576768199566-8e894301ede5)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/85" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm"
          >
            {t.about.title}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10"
          >
            {t.about.tagline}
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t.about.desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDataXquad;