import React from 'react';
import { motion } from 'framer-motion';

const StatsGrid = () => {
  const stats = [
    { value: '10x', label: '處理速度提升' },
    { value: '0%', label: '網絡依賴' },
    { value: 'AES-256', label: '軍規加密' },
    { value: 'RTK', label: '厘米級定位' }
  ];
  
  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#137fec] mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-semibold text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;