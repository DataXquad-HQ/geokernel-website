import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const UseCasesPage = () => {
  const { getSection } = useLanguage();
  const page = getSection('useCasesPage');
  const sections = page.sections || [];

  return (
    <div className="bg-white min-h-screen pt-20">
{/* Hero Section */}
      <section className="bg-white pt-[80px] md:pt-[120px] pb-[60px] border-b border-[#F3F4F6]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-teal mb-6">{page.label}</span>
            <h1 className="text-[40px] md:text-[48px] font-bold text-[#1F2937] leading-tight mb-6">
              {page.heroTitle}<span className="text-[#0D9488]">{page.heroTitleAccent}</span>
            </h1>
            <p className="text-[18px] text-[#4B5563] max-w-[800px] mx-auto leading-relaxed">
              {page.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Sections */}
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="py-16 md:py-20 bg-white border-b border-[#F3F4F6]">
          <div className="max-w-[1200px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{section.emoji}</span>
                <div>
                  <h2 className="text-3xl font-bold text-[#1F2937]">{section.category}</h2>
                  <p className="text-[#4B5563] text-lg mt-2">{section.summary}</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(section.cases || []).map((useCase, caseIdx) => (
                <motion.div
                  key={caseIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: caseIdx * 0.1 }}
                  className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="p-6 flex-shrink-0">
                    <h3 className="text-xl font-bold text-[#1F2937] mb-3">{useCase.title}</h3>
                    <p className="text-[#4B5563] leading-relaxed">{useCase.summary}</p>
                  </div>

                  <div className="w-full flex-1 min-h-[350px] md:min-h-[400px] bg-[#111827] border-t border-[#E5E7EB] flex items-center justify-center relative overflow-hidden">
                    {useCase.videoId && !useCase.videoId.startsWith('PLACEHOLDER') ? (
                      <iframe
                        className="w-full h-full absolute inset-0"
                        src={`https://www.youtube.com/embed/${useCase.videoId}?rel=0`}
                        title={useCase.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="text-center p-8 absolute inset-0 flex flex-col items-center justify-center bg-[#F9FAFB]">
                        <div className="w-16 h-16 bg-[#E5E7EB] rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-[#9CA3AF]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        </div>
                        <p className="text-sm text-[#6B7280]">{page.videoComingSoon}</p>
                        <p className="text-xs text-[#9CA3AF] mt-1">Video ID: {useCase.videoId}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default UseCasesPage;
