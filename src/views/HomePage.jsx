import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Zap, WifiOff, LocateFixed,
  Shield, Cpu, Map, Box, Cuboid, Mountain, Layers,
  ScanFace, Calendar, Users, Mail
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HeroSection = ({ t }) => {
  const stats = [
    { label: t.hero.stats.speed, icon: Zap },
    { label: t.hero.stats.offline, icon: WifiOff },
    { label: t.hero.stats.accuracy, icon: LocateFixed },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1643330683233-ff2ac89b002c)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-slate-900/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/90 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {t.hero.titleLine1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300">
              {t.hero.titleLine2}
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-slate-200 font-medium">
              {t.hero.titleLine3}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollTo('partners')}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {t.hero.ctaPartner}
            </button>
            <button
              onClick={() => scrollTo('roadmap')}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 group"
            >
              {t.hero.ctaRoadmap}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center group flex items-center justify-center gap-3">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-lg md:text-xl font-bold text-white tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Competitive Advantages ───────────────────────────────────────────────────

const AdvantagesSection = ({ t }) => {
  const icons = [Zap, WifiOff, Shield, Cpu];

  return (
    <section id="advantages" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.advantages.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t.advantages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Features Intelligence ────────────────────────────────────────────────────

const featureImages = [
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/a72510e6791301b30a3f17572fdaf534.png',
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/67d0d963fd43c9741feb23870f2d1d31.png',
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/3edb00621410ac37ea65d38a29be9390.png',
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/502f087fdb667217224b2f957e08e78b.png',
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/872241766c43b3ae149df21a1a78d129.png',
  'https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/1fe33652a68205706a6ca400010fae2b.png',
];
const featureIcons = [Map, Box, Cuboid, Mountain, Layers, ScanFace];

const FeaturesSection = ({ t }) => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <p className="text-xl text-slate-600">{t.features.subtitle}</p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            const isEven = index % 2 === 0;
            const badge = index === 4 ? t.features.badgeLC : index === 5 ? t.features.badgeER : null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col-reverse gap-8 md:gap-16 items-center ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2 inline-flex items-center gap-3 flex-wrap">
                      {feature.title}
                      {badge && (
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-sm align-middle">
                          {badge}
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-video">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={featureImages[index]}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {badge && (
                    <p className="mt-2 text-xs text-slate-400 text-center italic">
                      {t.features.disclaimer}
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

// ─── Supported Formats ────────────────────────────────────────────────────────

const formatCategoryIcons = [Globe, Box, Layers];

const FormatsSection = ({ t }) => {
  return (
    <section id="formats" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {t.formats.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.formats.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.formats.categories.map((cat, index) => {
            const Icon = formatCategoryIcons[index];
            return (
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
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
                </div>
                <ul className="space-y-4 flex-1">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0 group"
                    >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Roadmap ──────────────────────────────────────────────────────────────────

const dotColors = {
  blue: 'bg-blue-600',
  emerald: 'bg-emerald-600',
  amber: 'bg-amber-600',
};
const titleColors = {
  blue: 'text-blue-700',
  emerald: 'text-emerald-700',
  amber: 'text-amber-700',
};

const RoadmapSection = ({ t }) => {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.roadmap.title}
            </h2>
            <p className="text-xl text-slate-600">{t.roadmap.subtitle}</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px" />
          <div className="space-y-12">
            {t.roadmap.items.map((item, index) => (
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
                <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-50 z-10 shadow-sm">
                  <div className={`w-3 h-3 rounded-full ${dotColors[item.color]}`} />
                </div>
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${titleColors[item.color]}`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Partners ─────────────────────────────────────────────────────────────────

const PartnersSection = ({ t }) => {
  return (
    <section id="partners" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t.partners.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t.partners.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {t.partners.list.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-4 left-4 text-xl bg-slate-50 w-8 h-8 flex items-center justify-center rounded-full border border-slate-100 z-10">
                {partner.flag}
              </div>
              <div className="w-full h-48 flex items-center justify-center mb-4 p-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center w-full mt-auto">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                <div className="border-t border-slate-100 pt-3 w-full">
                  <p className="text-slate-500 font-medium text-sm">{partner.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recruitment CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4">
            <Users size={300} />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
              {t.partners.recruit.title}
            </h3>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {t.partners.recruit.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${t.partners.recruit.email}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 text-white/90 hover:text-white bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/20 hover:bg-white/20"
              >
                <Mail className="w-5 h-5" />
                <span>{t.partners.recruit.email}</span>
              </a>
              <a
                href={`mailto:${t.partners.recruit.email}`}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                {t.partners.recruit.button}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── About ────────────────────────────────────────────────────────────────────

const AboutSection = ({ t }) => {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 flex items-center"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1576768199566-8e894301ede5)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-slate-900/85" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-blue-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm"
          >
            {t.about.title}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10"
          >
            {t.about.tagline}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">{t.about.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── Main Export ──────────────────────────────────────────────────────────────

const HomePage = () => {
  const { tr } = useLanguage();

  if (!tr) return null;

  return (
    <div className="bg-white">
      <HeroSection t={tr} />
      <AdvantagesSection t={tr} />
      <FeaturesSection t={tr} />
      <FormatsSection t={tr} />
      <RoadmapSection t={tr} />
      <PartnersSection t={tr} />
      <AboutSection t={tr} />
    </div>
  );
};

export default HomePage;
