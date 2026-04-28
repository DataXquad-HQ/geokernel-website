import React from 'react';
import { motion } from 'framer-motion';
import { Zap, WifiOff, Shield, Cpu } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CompetitiveAdvantages = () => {
  const { t } = useLanguage();
  
  const icons = [Zap, WifiOff, Shield, Cpu];

  const advantages = t.advantages.items.map((item, index) => ({
    ...item,
    icon: icons[index]
  }));

  return (
    <section id="advantages" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.advantages.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.advantages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;