import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Moon, Frown, Zap, TrendingDown, Brain, Hand, Battery, ArrowRight, Server, Cloud, Shield, CheckCircle2, PlusCircle, Info, Rocket, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

// Icons for use case categories — order must match translations useCasesSection.categories
const useCaseCategoryIcons = [Shield, Zap, Rocket, Wrench];
// Icons for brand reveal items — order must match translations brandReveal.items
const brandRevealIcons = [
  <DollarSign className="w-8 h-8 text-white" />,
  <Zap className="w-8 h-8 text-white" />,
  <Battery className="w-8 h-8 text-white" />,
];
// Icons for pain items — order must match translations pain.items
const painIcons = [
  <DollarSign className="w-6 h-6 text-[#0D9488]" />,
  <AlertTriangle className="w-6 h-6 text-[#0D9488]" />,
  <Moon className="w-6 h-6 text-[#0D9488]" />,
  <Frown className="w-6 h-6 text-[#0D9488]" />,
  <Zap className="w-6 h-6 text-[#0D9488]" />,
  <TrendingDown className="w-6 h-6 text-[#0D9488]" />,
];

const HomePage = () => {
  const { getSection } = useLanguage();

  // ROI Calculator State
  const [q1, setQ1] = useState(20000);
  const [q2, setQ2] = useState(2);
  const [q3, setQ3] = useState(50);
  const yearlyHRCost = q1 * q2 * (q3 / 100) * 12;
  const busyCowCost = 55000;
  const savings = yearlyHRCost - busyCowCost;
  const paybackDays = yearlyHRCost > 0 ? Math.round(busyCowCost / yearlyHRCost * 365) : 0;
  const roiPercent = busyCowCost > 0 ? Math.round((yearlyHRCost - busyCowCost) / busyCowCost * 100) : 0;

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const hero = getSection('hero');
  const pain = getSection('pain');
  const product = getSection('product');
  const useCasesSection = getSection('useCasesSection');
  const brandReveal = getSection('brandReveal');
  const pricing = getSection('pricing');
  const roiSection = getSection('roi');
  const testimonials = getSection('testimonials');
  const contact = getSection('contact');

  return <div className="bg-white min-h-screen pt-20">
{/* HERO SECTION */}
      <section id="hero" className="bg-white pt-[80px] md:pt-[120px] pb-[80px]">
        <div className="max-w-[1000px] mx-auto px-[24px] md:px-[40px] flex flex-col items-center text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="flex flex-col items-center w-full">
            <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-bold text-[#1F2937] leading-[1.1] tracking-tight">
              <span className="text-[#0D9488]">{hero.headingAccent}</span>{hero.headingRest}
            </h1>

            <p className="text-[16px] md:text-[18px] text-[#4B5563] mt-[16px] leading-relaxed max-w-[800px]">
              {hero.description}
            </p>

            <p className="text-[20px] md:text-[24px] text-[#1F2937] mt-[24px] font-medium">
              {hero.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[32px] w-full sm:w-auto">
              <button onClick={() => scrollToSection('pain')} className="btn-primary !rounded-full w-full sm:w-auto">
                {hero.cta1}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="btn-secondary !rounded-full w-full sm:w-auto border-transparent bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563]">
                {hero.cta2}
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-[40px]">
              {(hero.badges || []).map((stat, idx) => <div key={idx} className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] text-[14px] font-medium text-[#4B5563] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mr-2"></span>
                  {stat}
                </div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="w-full max-w-[800px] mt-[48px]">
            <img src="https://horizons-cdn.hostinger.com/f08c9ebe-9835-47d3-8e95-694abf101e27/gemini_generated_image_vk7dutvk7dutvk7d-Ezlbz.png" alt={hero.heroImgAlt} className="w-full aspect-video object-cover rounded-[16px] shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PAIN SECTION */}
      <section id="pain" className="bg-white border-t border-[#F3F4F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="badge-teal mb-6">{pain.label}</span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1F2937] leading-tight">
            {pain.title}
          </h2>
          <p className="text-[16px] text-[#4B5563] mt-4 max-w-[640px] mx-auto leading-relaxed">
            {pain.description}
          </p>

          <div className="bg-[#F0FDFB] border-l-4 border-[#0D9488] rounded-r-[12px] p-5 md:p-6 max-w-[600px] mx-auto text-left mt-12 shadow-sm">
            <h3 className="text-[1.05rem] font-bold text-[#1F2937] mb-2">{pain.boxTitle}</h3>
            <p className="text-[0.9rem] text-[#4B5563] leading-[1.7]">
              {pain.boxDesc}
            </p>
          </div>

          <div className="max-w-[600px] mx-auto mt-12 text-left space-y-5">
            {(pain.items || []).map((item, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: idx * 0.1
            }} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#F3F4F6] shadow-sm">
                <div className="mt-0.5 p-2 bg-[#F0FDFB] rounded-lg">{painIcons[idx]}</div>
                <p className="text-[16px] text-[#4B5563] leading-snug pt-1">
                  <span className="font-bold text-[#1F2937]">{item.title}</span> {item.desc}
                </p>
              </motion.div>)}
          </div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-[20px] md:text-[24px] text-[#0D9488] font-bold mt-16">
            {pain.conclusion}
          </motion.p>
        </div>
      </section>

      {/* SECTION 4: WHAT IS BUSYCOW */}
      <section id="product" className="bg-white border-t border-[#F3F4F6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="badge-teal mb-6">{product.label}</span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{product.title}</h2>
          <p className="text-[16px] md:text-[18px] text-[#4B5563] mt-4 mb-16 max-w-[800px] mx-auto">
            {product.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto text-left">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-[#F9FAFB] p-8 md:p-10 rounded-2xl border border-[#F3F4F6] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#F0FDFB] rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-[#0D9488]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">{product.brainTitle}</h3>
              <p className="text-[#4B5563] text-[16px] leading-relaxed">
                {product.brainDesc}
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-[#F9FAFB] p-8 md:p-10 rounded-2xl border border-[#F3F4F6] shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-[#F0FDFB] rounded-2xl flex items-center justify-center mb-6">
                <Hand className="w-8 h-8 text-[#0D9488]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">{product.handsTitle}</h3>
              <p className="text-[#4B5563] text-[16px] leading-relaxed">
                {product.handsDesc}
              </p>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="max-w-[1000px] mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl border border-[#F3F4F6]">
            <img src={product.dashboardImg} alt={product.dashboardAlt} className="w-full aspect-video object-cover" />
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="text-[24px] md:text-[28px] font-bold text-[#0D9488] mt-16">
            {product.highlight}
          </motion.p>
        </div>
      </section>

      {/* SECTION: USE CASES (SIMPLIFIED) */}
      <section id="usecases" className="section bg-[#F9FAFB] border-t border-[#F3F4F6] py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-teal mb-6">{useCasesSection.label}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{useCasesSection.title}</h2>
            <p className="text-[16px] md:text-[18px] text-[#4B5563] mt-4 max-w-[800px] mx-auto">
              {useCasesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {(useCasesSection.categories || []).map((category, idx) => {
              const IconComponent = useCaseCategoryIcons[idx];
              return <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                <IconComponent className="w-12 h-12 text-[#0D9488] mb-4" />
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{category.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed flex-grow mb-6">{category.summary}</p>
                <a href="/use-cases" className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F0FDFB] text-[#0D9488] rounded-xl font-bold hover:bg-[#0D9488] hover:text-white transition-colors text-sm">
                  {useCasesSection.viewDetails}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>;
            })}
          </div>

          <div className="text-center">
            <a href="/use-cases" className="btn-primary !rounded-full inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-lg shadow-lg hover:shadow-xl">
              {useCasesSection.viewAll}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: BRAND REVEAL */}
      <section className="bg-[#0F766E] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight">{brandReveal.title}</h2>
          <p className="text-[16px] md:text-[18px] text-teal-100 mt-4 mb-16">
            {brandReveal.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto text-left">
            {(brandReveal.items || []).map((item, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.2
            }} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="mb-5">{brandRevealIcons[idx]}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-teal-50 text-[15px] leading-relaxed">{item.desc}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* SECTION: PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-white border-t border-[#F3F4F6]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="badge-teal mb-6">{pricing.label}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{pricing.title}</h2>
            <p className="text-[16px] md:text-[18px] text-[#4B5563] mt-4 max-w-[600px] mx-auto">
              {pricing.subtitle}
            </p>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="bg-white rounded-3xl shadow-xl border border-[#E5E7EB] overflow-hidden mb-10">
            <div className="p-8 md:p-12 bg-[#0F766E] text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <h3 className="text-xl md:text-2xl font-medium text-teal-100 mb-4 relative z-10">{pricing.deploymentFeeLabel}</h3>
              <div className="text-5xl md:text-6xl font-bold mb-4 tracking-tight relative z-10">{pricing.deploymentPrice}</div>
              <p className="text-teal-50 text-lg relative z-10">{pricing.deploymentDesc}</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E5E7EB] hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                      <Server className="w-5 h-5 text-[#1F2937]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1F2937]">{pricing.onPremiseTitle}</h4>
                  </div>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {pricing.onPremiseDesc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[#1F2937] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#1F2937]">{pricing.onPremiseNote}</span>
                  </div>
                </div>

                <div className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E5E7EB] hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-[#E5E7EB]">
                      <Cloud className="w-5 h-5 text-[#1F2937]" />
                    </div>
                    <h4 className="text-xl font-bold text-[#1F2937]">{pricing.cloudTitle}</h4>
                  </div>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {pricing.cloudDesc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB] flex items-start gap-2">
                    <Zap className="w-4 h-4 text-[#1F2937] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#1F2937]">{pricing.cloudNote}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#1F2937] mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#0D9488]" />
                  {pricing.includedTitle}
                </h4>
                <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  {(pricing.includedItems || []).map((item, idx) => <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-2 shrink-0"></div>
                      <span className="text-[#4B5563]">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 bg-[#F9FAFB] rounded-xl flex items-center justify-center mb-6 border border-[#E5E7EB]">
                <Brain className="w-6 h-6 text-[#1F2937]" />
              </div>
              <h4 className="text-xl font-bold text-[#1F2937] mb-2">{pricing.aiModelTitle}</h4>
              <div className="text-3xl font-bold text-[#1F2937] mb-2">{pricing.aiModelPrice} <span className="text-lg text-[#6B7280] font-normal">{pricing.aiModelPer}</span></div>
              <p className="text-[#4B5563] flex-grow mt-4">
                {pricing.aiModelDesc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-[#F9FAFB] px-4 py-2 rounded-lg border border-[#E5E7EB] w-fit">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm font-bold text-[#1F2937]">{pricing.aiModelBadge}</span>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 bg-[#F0FDFB] rounded-xl flex items-center justify-center mb-6 border border-[#0D9488]/20">
                <PlusCircle className="w-6 h-6 text-[#0D9488]" />
              </div>
              <h4 className="text-xl font-bold text-[#1F2937] mb-2">{pricing.upgradeTitle} <span className="text-sm font-normal text-[#6B7280]">{pricing.upgradeOptional}</span></h4>
              <div className="text-3xl font-bold text-[#1F2937] mb-6">{pricing.upgradePrice} <span className="text-lg text-[#6B7280] font-normal">{pricing.upgradePer}</span></div>
              <p className="text-[#4B5563] mb-4">
                {pricing.upgradeDesc}
              </p>
              <ul className="space-y-2 text-[#4B5563] text-sm flex-grow">
                {(pricing.upgradeItems || []).map((item, idx) => <li key={idx} className="flex items-start gap-2"><span className="text-[#0D9488]">✔</span> {item}</li>)}
              </ul>
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 text-sm text-[#6B7280] bg-[#F9FAFB] p-4 rounded-xl border border-[#E5E7EB]">
            <Info className="w-5 h-5 text-[#9CA3AF] shrink-0" />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <span>{pricing.note1}</span>
              <span>{pricing.note2}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: ROI CALCULATOR */}
      <section id="roi" className="section bg-[#F9FAFB] border-t border-[#F3F4F6]">
        <div className="container max-w-[1000px]">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{roiSection.title}</h2>
            <p className="subtitle">{roiSection.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-[#F3F4F6]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#4B5563]">{roiSection.q1Label}</label>
                <input type="number" value={q1} onChange={e => setQ1(Number(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all text-[#1F2937]" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#4B5563]">{roiSection.q2Label}</label>
                <input type="number" min="1" max="50" value={q2} onChange={e => setQ2(Number(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all text-[#1F2937]" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-[#4B5563]">{roiSection.q3Label}</label>
                <select value={q3} onChange={e => setQ3(Number(e.target.value))} className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 outline-none transition-all bg-white text-[#1F2937]">
                  <option value={25}>25%</option>
                  <option value={50}>50%</option>
                  <option value={75}>75%</option>
                  <option value={100}>100%</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#F9FAFB] p-8 rounded-xl border border-[#F3F4F6]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-[#6B7280] font-medium mb-1">{roiSection.yearlyHRCostLabel}</p>
                  <p className="text-2xl font-bold text-[#1F2937]">HK$ {yearlyHRCost.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] font-medium mb-1">{roiSection.busyCowCostLabel}</p>
                  <p className="text-2xl font-bold text-[#0D9488]">HK$ {busyCowCost.toLocaleString()}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{roiSection.busyCowCostNote}</p>
                </div>
              </div>
              <div className="space-y-6 border-t md:border-t-0 md:border-l border-[#E5E7EB] pt-6 md:pt-0 md:pl-8">
                <div>
                  <p className="text-sm text-[#6B7280] font-medium mb-1">{roiSection.savingsLabel}</p>
                  <p className="text-3xl font-bold text-[#10B981]">HK$ {Math.max(0, savings).toLocaleString()}</p>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-sm text-[#6B7280] font-medium mb-1">{roiSection.paybackLabel}</p>
                    <p className="text-xl font-bold text-[#1F2937]">{paybackDays} {roiSection.paybackUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] font-medium mb-1">{roiSection.roiLabel}</p>
                    <p className="text-xl font-bold text-[#0D9488]">{roiPercent}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TESTIMONIALS */}
      <section id="testimonials" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="badge-teal mb-6">{testimonials.label}</span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{testimonials.title}</h2>
          </div>

          <div className="grid-3">
            {(testimonials.items || []).map((item, idx) => <div key={idx} className="card flex flex-col">
              <div className="mb-6">
                <span className="text-sm font-bold text-[#0D9488] bg-[#F0FDFB] px-3 py-1 rounded-md">{item.tag}</span>
              </div>
              <p className="text-[#1F2937] text-lg font-medium leading-relaxed flex-grow">
                {item.quote}
              </p>
              <div className="mt-8 pt-6 border-t border-[#F3F4F6] flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center text-[#4B5563] font-bold">{item.initial}</div>
                <div>
                  <p className="font-bold text-[#1F2937]">{item.name}</p>
                  <p className="text-sm text-[#6B7280]">{item.company}</p>
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT PARTNERS */}
      <section id="contact" className="section bg-[#F9FAFB] border-t border-[#F3F4F6]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1F2937] leading-tight">{contact.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mb-10">
            {(contact.partners || []).map((partner, idx) => <div key={idx} className="bg-white rounded-xl p-6 border border-[#F3F4F6] shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center">
                <div className="text-4xl mb-3">{partner.flag}</div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-1">{partner.region}</h3>
                <p className="text-sm text-[#6B7280] mb-6">{partner.name}</p>
                <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="w-full py-2.5 !rounded-full bg-[#F0FDFB] text-[#0D9488] font-bold hover:bg-[#0D9488] hover:text-white transition-colors text-sm">
                  {contact.contactBtn}
                </button>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};

export default HomePage;
