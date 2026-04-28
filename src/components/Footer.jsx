import React from 'react';
import { useLanguage } from '../contexts/LanguageContext.jsx';
import FooterZH from './FooterZH.jsx';
import FooterEN from './FooterEN.jsx';

const Footer = () => {
  const { language } = useLanguage();
  return language === 'zh' ? <FooterZH /> : <FooterEN />;
};

export default Footer;