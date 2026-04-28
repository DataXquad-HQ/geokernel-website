import React, { useEffect } from 'react';

const FooterEN = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="bg-[#F9FAFB] border-t border-[#F3F4F6] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        {/* Left Column */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src="https://horizons-cdn.hostinger.com/f08c9ebe-9835-47d3-8e95-694abf101e27/e9db5309d0c6aa2f0b5b15c01eca2e99.png" 
              alt="BusyCow Logo" 
              className="w-10 h-10 object-contain" 
            />
            <span className="text-3xl font-bold text-[#1F2937] tracking-wide">
              BusyCow<span className="text-[#0D9488]">.</span>
            </span>
          </div>
          <p className="text-xl font-medium text-[#4B5563] mb-10">
            Digital BusyCow, Your Next Employee
          </p>
          
          <nav className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
            <a href="/#hero" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">Home</a>
            <a href="/#product" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">What is BusyCow</a>
            <a href="/use-cases" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">Use Cases</a>
            <a href="/#pricing" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">Pricing</a>
            <a href="/#testimonials" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">Testimonials</a>
            <a href="/#contact" className="text-[#4B5563] hover:text-[#0D9488] transition-colors font-medium text-base">Contact Us</a>
          </nav>

          <div className="mt-auto pt-8 border-t border-[#E5E7EB]">
            <p className="text-[#4B5563] font-medium mb-2 flex items-center gap-2">
              Contact Us:
              <a href="mailto:Kevin@DataXquad.com" className="text-[#0D9488] hover:underline font-bold">
                Kevin@DataXquad.com
              </a>
            </p>
            <p className="text-sm text-[#6B7280]">
              © 2026 BusyCow. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-[#F3F4F6] p-6 md:p-8">
          <iframe 
            data-tally-src="https://tally.so/embed/81GNGA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="200" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="BusyCow Demo Request"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default FooterEN;