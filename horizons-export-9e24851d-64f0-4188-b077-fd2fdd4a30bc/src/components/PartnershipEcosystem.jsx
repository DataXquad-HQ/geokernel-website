import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const PartnershipEcosystem = () => {
  const { t } = useLanguage();

  const partnerStaticData = [
    { 
      name: "SkyDynamic 偲愷動力", 
      flag: "🇹🇼",
      logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/777e40669262c24d88bf09eb332bea68.jpg"
    },
    { 
      name: "MapKing", 
      flag: "🇭🇰",
      logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/727af050ed610a4973c958102e09479f.jpg"
    },
    { 
      name: "AI Cities Malaysia", 
      flag: "🇲🇾",
      logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/2350a7ca77fe4d758d6fa6f5c2b063c2.jpg"
    }
  ];

  const partners = partnerStaticData.map((p, i) => ({
    ...p,
    role: t.partners.list[i].role
  }));

  return (
    <section id="partners" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">{t.partners.title}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Current Partners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Flag - Positioned top left */}
              <div className="absolute top-4 left-4 text-xl bg-slate-50 w-8 h-8 flex items-center justify-center rounded-full border border-slate-100 z-10" title={partner.role}>
                {partner.flag}
              </div>

              {/* Logo Area - Main Visual */}
              <div className="w-full h-48 flex items-center justify-center mb-4 p-4">
                 <img 
                   src={partner.logo} 
                   alt={`${partner.name} Logo`}
                   className="max-w-full max-h-full object-contain"
                 />
              </div>
              
              {/* Content */}
              <div className="text-center w-full mt-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {partner.name}
                </h3>
                <div className="border-t border-slate-100 pt-3 w-full">
                  <p className="text-slate-500 font-medium text-sm">{partner.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipEcosystem;