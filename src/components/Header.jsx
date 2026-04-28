import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [pathname, setPathname] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'product', 'usecases', 'pricing', 'testimonials', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = language === 'zh' ? [
    { label: '首頁', id: 'hero', path: '/' },
    { label: '應用情境', id: 'usecases', path: '/use-cases' },
    { label: '價格方案', id: 'pricing', path: '/' },
    { label: 'Blog', id: 'blog', path: '/blog' },
  ] : [
    { label: 'Home', id: 'hero', path: '/' },
    { label: 'Use Cases', id: 'usecases', path: '/use-cases' },
    { label: 'Pricing', id: 'pricing', path: '/' },
    { label: 'Blog', id: 'blog', path: '/blog' },
  ];

  const isExternalPath = (path) => path !== '/';

  const handleNavClick = (link) => {
    if (isExternalPath(link.path)) {
      window.location.href = link.path;
    } else if (pathname === '/') {
      scrollToSection(link.id);
    } else {
      window.location.href = `/#${link.id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group transition-all duration-200"
          >
            <img
              src="https://horizons-cdn.hostinger.com/f08c9ebe-9835-47d3-8e95-694abf101e27/e9db5309d0c6aa2f0b5b15c01eca2e99.png"
              alt="BusyCow Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold text-[#1F2937] group-hover:text-[#0D9488] transition-colors duration-200 tracking-wide">
              BusyCow<span className="text-[#0D9488]">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              isExternalPath(link.path) ? (
                <a
                  key={link.id}
                  href={link.path}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    pathname === link.path
                      ? 'text-[#0D9488]'
                      : 'text-[#4B5563] hover:text-[#0D9488]'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    activeSection === link.id && pathname === '/'
                      ? 'text-[#0D9488]'
                      : 'text-[#4B5563] hover:text-[#0D9488]'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="bg-[#F9FAFB] border border-[#F3F4F6] px-4 py-2 rounded-full text-[14px] font-bold text-[#1F2937] hover:text-[#0D9488] hover:border-[#0D9488]/30 transition-all duration-200 flex items-center gap-2"
            >
              <span className="text-lg leading-none">🌐</span> {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-[14px] font-bold text-[#1F2937] bg-[#F9FAFB] px-3 py-1.5 rounded-full border border-[#F3F4F6]"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1F2937] hover:text-[#0D9488] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 border-b border-border pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navLinks.map((link) => (
              isExternalPath(link.path) ? (
                <a
                  key={link.id}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                    pathname === link.path ? 'text-[#0D9488] bg-[#F0FDFB]' : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`block w-full text-left px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                    activeSection === link.id && pathname === '/' ? 'text-[#0D9488] bg-[#F0FDFB]' : 'text-[#4B5563] hover:bg-[#F9FAFB]'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
