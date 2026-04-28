import React from 'react';
import { motion } from 'framer-motion';
import { Map, Layers, Cuboid, Mountain, ScanFace, Box } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FeaturesIntelligence = () => {
  const { t } = useLanguage();
  
  const iconMap = [Map, Box, Cuboid, Mountain, Layers, ScanFace];
  const imageMap = [
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/a72510e6791301b30a3f17572fdaf534.png",
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/67d0d963fd43c9741feb23870f2d1d31.png",
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/3edb00621410ac37ea65d38a29be9390.png",
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/502f087fdb667217224b2f957e08e78b.png",
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/872241766c43b3ae149df21a1a78d129.png",
    "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/1fe33652a68205706a6ca400010fae2b.png"
  ];

  const features = t.features.items.map((item, index) => {
    const feature = {
      ...item,
      icon: iconMap[index],
      image: imageMap[index],
    };

    if (index === 4) { // AI Land Classification
      feature.badge = t.features.badgeLC;
      feature.disclaimer = t.features.disclaimer;
    }
    if (index === 5) { // Advanced Detection
      feature.badge = t.features.badgeER;
      feature.disclaimer = t.features.disclaimer;
    }
    return feature;
  });

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">
              {t.features.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-slate-600">
              {t.features.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Feature Rows */}
        <div className="space-y-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col-reverse gap-8 md:gap-16 items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 inline-flex items-center gap-3 flex-wrap">
                      {feature.title}
                      {feature.badge && (
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-sm align-middle">
                          {feature.badge}
                        </span>
                      )}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Image Content */}
                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-video md:aspect-[4/3] lg:aspect-video">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {feature.disclaimer && (
                    <p className="mt-2 text-xs text-slate-400 text-center italic">
                      {feature.disclaimer}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntelligence;