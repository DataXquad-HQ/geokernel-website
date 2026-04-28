import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const RecruitmentSection = () => {
  const { t } = useLanguage();

  return (
    <section id="recruitment" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4">
            <Users size={300} />
          </div>
          <div className="absolute bottom-0 left-0 p-12 opacity-[0.03] transform -translate-x-1/4 translate-y-1/4">
            <Users size={200} />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">{t.partners.recruit.title}</h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {t.partners.recruit.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={`mailto:${t.partners.recruit.email}`} className="w-full sm:w-auto flex items-center justify-center gap-3 text-white/90 hover:text-white bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/20 hover:bg-white/20">
                <Mail className="w-5 h-5" />
                <span>{t.partners.recruit.email}</span>
              </a>
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
                {t.partners.recruit.button}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruitmentSection;