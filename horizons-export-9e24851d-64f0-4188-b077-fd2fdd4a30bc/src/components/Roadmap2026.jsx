import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Roadmap2026 = () => {
  const { t } = useLanguage();

  const colors = ["blue", "emerald", "amber"];
  
  const timelineData = t.roadmap.items.map((item, index) => ({
    ...item,
    color: colors[index]
  }));

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.roadmap.title}</h2>
            <p className="text-xl text-slate-600">{t.roadmap.subtitle}</p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-50 z-10 shadow-sm">
                   <div className={`w-3 h-3 rounded-full ${
                     item.color === 'blue' ? 'bg-blue-600' : 
                     item.color === 'emerald' ? 'bg-emerald-600' : 'bg-amber-600'
                   }`} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 flex items-center gap-1.5`}>
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 ${
                      item.color === 'blue' ? 'text-blue-700' : 
                      item.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Space for Grid Alignment (Desktop Only) */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap2026;