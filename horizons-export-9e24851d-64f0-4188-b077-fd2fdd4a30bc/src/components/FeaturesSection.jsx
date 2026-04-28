import React from 'react';
import { motion } from 'framer-motion';
import { Zap, WifiOff, Shield, Cpu } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: '10倍速運算',
      description: '強大的並行處理能力，快速處理海量地理空間數據'
    },
    {
      icon: WifiOff,
      title: '100% 全離線',
      description: '無需網絡連接，在任何環境下都能穩定運行'
    },
    {
      icon: Shield,
      title: '極致數據安全',
      description: 'AES-256 軍規加密，確保敏感數據絕對安全'
    },
    {
      icon: Cpu,
      title: '工業級 IPC 硬件',
      description: '高性能工業級處理器，適應惡劣環境運作'
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          核心功能
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#137fec] to-[#0d6ac7] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-white group"
              >
                <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;