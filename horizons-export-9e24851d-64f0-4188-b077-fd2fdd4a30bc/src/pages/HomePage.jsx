import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompetitiveAdvantages from '@/components/CompetitiveAdvantages';
import FeaturesIntelligence from '@/components/FeaturesIntelligence';
import SupportedFormats from '@/components/SupportedFormats';
import Roadmap2026 from '@/components/Roadmap2026';
import PartnershipEcosystem from '@/components/PartnershipEcosystem';
import RecruitmentSection from '@/components/RecruitmentSection';
import AboutDataXquad from '@/components/AboutDataXquad';
import Footer from '@/components/Footer';

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Helmet>
      
      <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
        <Header />
        <main>
          <HeroSection />
          <CompetitiveAdvantages />
          <FeaturesIntelligence />
          <SupportedFormats />
          <Roadmap2026 />
          <PartnershipEcosystem />
          <RecruitmentSection />
          <AboutDataXquad />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;