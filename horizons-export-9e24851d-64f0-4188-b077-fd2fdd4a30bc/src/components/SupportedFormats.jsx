import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Box, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SupportedFormats = () => {
  const { t } = useLanguage();

  const iconMap = [Globe, Box, Layers];
  const extMap = [
    [".tif", ""], // 2D
    ["", ".las, .laz", ".obj, .ply"], // 3D
    [".shp, .dxf", ""] // Vector
  ];

  const categories = t.formats.categories.map((cat, catIndex) => ({
    ...cat,
    icon: iconMap[catIndex],
    items: cat.items.map((item, itemIndex) => ({
      ...item,
      ext: extMap[catIndex][itemIndex]
    }))
  }));

  return (
    <section id="formats" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.formats.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.formats.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
              </div>
              
              <ul className="space-y-4 flex-1">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0 group">
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </span>
                    {item.ext && (
                      <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">
                        {item.ext}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedFormats;