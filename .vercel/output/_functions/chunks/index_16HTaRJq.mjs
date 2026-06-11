import { c as createComponent } from './astro-component_CrqRtv0y.mjs';
import 'piccolore';
import { h as addAttribute, p as renderHead, l as renderComponent, r as renderTemplate } from './entrypoint_Cv6_H07Q.mjs';
/* empty css                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useContext } from 'react';
import { Hexagon, Zap, WifiOff, LocateFixed, Globe, ArrowRight, Shield, Cpu, Map, Box, Cuboid, Mountain, Layers, ScanFace, Calendar, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const translations = {
  en: {
    meta: {
      title: "GeoKernel - Tactical Intelligence at the Edge",
      description: "GeoKernel 2.0. Mission-critical intelligence, 100% offline. Instant drone imagery processing for disaster relief and real-time decision making."
    },
    common: {
      contactSales: "Contact Sales",
      languageName: "EN",
      blog: "Blog"
    },
    hero: {
      titleLine1: "Tactical Intelligence at the Edge.",
      titleLine2: "MISSION-CRITICAL INTELLIGENCE.",
      titleLine3: "100% OFFLINE.",
      subtitle: "Transform raw drone data into actionable intelligence in minutes. No internet required, no cloud upload, zero latency. Designed for extreme disaster environments, powered by industrial-grade GPU computing platforms to safeguard every second of rescue time.",
      ctaPartner: "Become a Distribution Partner",
      ctaRoadmap: "View 2026 Roadmap",
      stats: {
        speed: "10X Processing Speed",
        offline: "Zero Internet Dependency",
        accuracy: "High Positioning Accuracy"
      }
    },
    advantages: {
      title: "Why Choose GeoKernel?",
      subtitle: "Compared to cloud or desktop software like Pix4D, DroneDeploy, and Agisoft, GeoKernel is built for 'front-line operations'.",
      items: [
        { title: "10X Speed", desc: "Generate DOM within 10 minutes of landing, far exceeding traditional solutions." },
        { title: "100% Offline", desc: "Operates independently even in communication-dead zones, with zero reliance on the internet." },
        { title: "Data Sovereignty & Security", desc: "All processing and storage are done locally, ensuring sensitive geospatial intelligence never leaks." },
        { title: "Industrial Rugged Hardware", desc: "Uses GPU-powered industrial embedded platforms with superior heat and shock resistance for harsh environments." }
      ]
    },
    features: {
      sectionTitle: "Functions & Intelligence",
      title: "Core Functionalities & Intelligence Layers",
      subtitle: "GeoKernel offers comprehensive geospatial tools from basic mapping to advanced AI recognition.",
      badgeLC: "LC/ER Tiers",
      badgeER: "ER Tier",
      disclaimer: "Images are for illustration purposes. Actual results depend on development outcomes.",
      items: [
        { title: "Real-Time Data Processing", desc: "Rapidly stitch drone imagery into high-precision maps. No internet needed, stitch on-site to immediately grasp the disaster overview." },
        { title: "Digital Mapping", desc: "Generate Digital Orthophoto Maps (DOM) and Digital Surface Models (DSM). Provides precise coordinates and elevation data for reliable command decisions." },
        { title: "3D Visualization", desc: "Produce immersive 3D Mesh and Dense Point Clouds. Supports arbitrary rotation for precise structural damage assessment." },
        { title: "Terrain Analysis", desc: "Automatically generate contours for terrain interpretation and flood simulation. Intuitively visualize terrain relief to aid in planning rescue and evacuation routes." },
        { title: "AI Land Classification", desc: "Automatically identify roads, buildings, water bodies, and vegetation. Uses deep learning to quickly annotate key features, drastically reducing manual interpretation time." },
        { title: "Advanced Detection", desc: "Real-time AI recognition optimized for SAR to pinpoint trapped targets. Effectively identifies people and vehicles even in low light or complex environments." }
      ]
    },
    formats: {
      title: "Supported Output Formats",
      subtitle: "GeoKernel ensures seamless integration with global GIS and CAD standards for immediate multi-agency collaboration:",
      categories: [
        {
          title: "2D Imagery",
          items: [{ name: "GeoTIFF", ext: ".tif" }, { name: "Tileset", ext: "" }]
        },
        {
          title: "3D / Elevation Data",
          items: [{ name: "DSM", ext: "" }, { name: "Dense Point Cloud", ext: ".las, .laz" }, { name: "3D Model", ext: ".obj, .ply" }]
        },
        {
          title: "Vector Data",
          items: [{ name: "Contours", ext: ".shp, .dxf" }, { name: "AI Classification Layers", ext: "" }]
        }
      ]
    },
    roadmap: {
      title: "2026 Product Roadmap",
      subtitle: "Preview of the next-generation GeoKernel series",
      items: [
        { date: "March 2026", title: "GeoKernel-Lite", desc: "Essential Processing: Real-time DOM, DSM, 3D Mesh, and Contour output.", color: "blue" },
        { date: "H2 2026", title: "GeoKernel-LC", desc: "GeoKernel Lite features plus Land Classification: Adds 8-class AI land classification and semantic segmentation.", color: "emerald" },
        { date: "Custom on Demand", title: "GeoKernel-ER", desc: "Additional Emergency Response Edition: Advanced Human & Vehicle detection for SAR missions.", color: "amber" }
      ]
    },
    partners: {
      title: "Global Partnership Ecosystem",
      subtitle: "We are collaborating with regional leaders to deploy life-saving technology at the ground level.",
      list: [
        { name: "SkyDynamic 偲愷動力", flag: "🇹🇼", role: "Taiwan Service Partner", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/777e40669262c24d88bf09eb332bea68.jpg" },
        { name: "MapKing", flag: "🇭🇰", role: "Distribution Partner", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/727af050ed610a4973c958102e09479f.jpg" },
        { name: "AI Cities Malaysia", flag: "🇲🇾", role: "Distribution Partner", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/2350a7ca77fe4d758d6fa6f5c2b063c2.jpg" }
      ],
      recruit: {
        title: "Interested in Distribution?",
        desc: "We are actively seeking partners with expertise in geospatial tech and emergency services.\nJoin our global network.",
        email: "sales@dataxquad.com",
        button: "Become a Partner"
      }
    },
    about: {
      tagline: "Deploy Intelligence. Build Resilience.",
      title: "About DataXquad",
      desc: "DataXquad is headquartered in Singapore, with R&D and hardware integration centers in Taiwan. Merging Singapore's strategic vision with Taiwan's engineering prowess, we are dedicated to developing cutting-edge data processing technologies that deliver substantial impact in critical moments."
    },
    footer: {
      rights: "© 2026 DataXquad Technologies."
    }
  },
  zh: {
    meta: {
      title: "GeoKernel - 全球首款邊緣運算地理空間平台",
      description: "GeoKernel 2.0 正式上線。無人機影像秒速處理，離線獨立運作，數據永不外洩。專為災害救援與即時決策打造的工業級解決方案。"
    },
    common: {
      contactSales: "聯絡銷售團隊",
      languageName: "中文",
      blog: "部落格"
    },
    hero: {
      titleLine1: "全球最速離線",
      titleLine2: "地理空間情報系統",
      titleLine3: "— 數據轉化，就在一瞬之間",
      subtitle: "將原始無人機數據在數分鐘內轉化為可立即使用的決策情報。無需網路、免雲端上傳、零延遲。專為極端災難環境設計，搭載工業級 GPU 運算平台 (Industrial Grade IPC with GPU)，守護每一秒救援黃金時間。",
      ctaPartner: "成為全球經銷夥伴",
      ctaRoadmap: "查看 2026 產品藍圖",
      stats: {
        speed: "10X 處理速度",
        offline: "零 網路依賴",
        accuracy: "高定位精度"
      }
    },
    advantages: {
      title: "為什麼選擇 GeoKernel？",
      subtitle: "相較於 Pix4D、DroneDeploy、Agisoft 等雲端或桌面軟體，GeoKernel 專為「第一線實戰」打造。",
      items: [
        { title: "10 倍速極速處理", desc: "無人機降落後 10 分鐘內即可生成數位正射影像 (DOM)，效能遠超傳統方案。" },
        { title: "100% 離線運作", desc: "即使在通訊中斷的災區，GeoKernel 也能獨立運作，不依賴網路。" },
        { title: "數據主權與安全", desc: "所有資料處理與存儲皆在本地完成，確保敏感地理情報絕不外洩。" },
        { title: "工業級強韌硬體", desc: "採用搭載 GPU 的工業級嵌入式運算平台，具備卓越耐熱與抗震能力，適應各種惡劣環境。" }
      ]
    },
    features: {
      sectionTitle: "Functions & Intelligence",
      title: "功能清單與智能層級",
      subtitle: "GeoKernel 提供從基礎測繪到進階 AI 識別的全方位工具箱",
      badgeLC: "GeoKernel LC/ER 等級",
      badgeER: "GeoKernel ER 等級",
      disclaimer: "圖片為示意圖，實際依照開發結果為主",
      items: [
        { title: "即時地圖生成", desc: "快速將無人機拍攝的影像拼接成高精度地圖。無需依賴網際網路，現場即飛即拼，立即掌握災區全貌。" },
        { title: "數位建模", desc: "生成數位正射影像 (DOM) 及數位表面模型 (DSM)。提供精確的地理坐標與高程資訊，為救災指揮提供可靠數據。" },
        { title: "3D 視覺化", desc: "產出沉浸式 3D 網格模型 (Mesh) 與 密集點雲 (Dense Point Clouds)。支援任意角度旋轉檢視，精確評估建築物結構受損情形。" },
        { title: "地形分析", desc: "自動生成等高線，協助地形判讀與淹水模擬。直觀呈現地形起伏，輔助決策者規劃最佳救援路徑與撤離路線。" },
        { title: "AI 土地分類", desc: "自動辨識道路、建築、水體與植被。利用深度學習技術，快速標註關鍵地物，大幅縮短人工判讀時間。" },
        { title: "進階人車偵測", desc: "專為搜救 (SAR) 優化的即時 AI 辨識，精準定位受困目標。即使在光線不足或複雜環境下，仍能有效識別人員與車輛。" }
      ]
    },
    formats: {
      title: "支援輸出格式",
      subtitle: "GeoKernel 支援標準 GIS 與 CAD 格式，確保與全球救災體系無縫接軌",
      categories: [
        {
          title: "2D 影像",
          items: [{ name: "GeoTIFF", ext: ".tif" }, { name: "Tileset", ext: "" }]
        },
        {
          title: "3D / 高程資料",
          items: [{ name: "DSM", ext: "" }, { name: "密集點雲", ext: ".las, .laz" }, { name: "3D 模型", ext: ".obj, .ply" }]
        },
        {
          title: "向量資料",
          items: [{ name: "等高線", ext: ".shp, .dxf" }, { name: "AI 分類圖層", ext: "" }]
        }
      ]
    },
    roadmap: {
      title: "2026 產品藍圖",
      subtitle: "下一代 GeoKernel 系列預覽",
      items: [
        { date: "2026 年 3 月", title: "GeoKernel-Lite", desc: "基礎運算版： 支援即時 DOM, DSM, 3D Mesh 與等高線生成。", color: "blue" },
        { date: "2026 下半年 (H2)", title: "GeoKernel-LC", desc: "Geokernel Lite功能，加上土地分類版： 新增 8 類 AI 土地分類與語意分割功能。", color: "emerald" },
        { date: "依客戶需求訂製", title: "GeoKernel-ER", desc: "額外新增緊急救援版： 進階人車即時偵測，專為搜救與特種任務設計。依客戶需求訂製", color: "amber" }
      ]
    },
    partners: {
      title: "全球合作夥伴生態系",
      subtitle: "我們與產業領導者攜手，將韌性技術部署至全球每一個角落。",
      list: [
        { name: "SkyDynamic 偲愷動力", flag: "🇹🇼", role: "台灣地區技術服務夥伴", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/777e40669262c24d88bf09eb332bea68.jpg" },
        { name: "MapKing", flag: "🇭🇰", role: "香港區域經銷夥伴", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/727af050ed610a4973c958102e09479f.jpg" },
        { name: "AI Cities Malaysia", flag: "🇲🇾", role: "馬來西亞經銷夥伴", logo: "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/2350a7ca77fe4d758d6fa6f5c2b063c2.jpg" }
      ],
      recruit: {
        title: "招募全球經銷夥伴",
        desc: "GeoKernel 正在尋找具備地理空間技術與緊急應變經驗的專業夥伴。\n加入我們，共同建立全球韌性防護網。",
        email: "sales@dataxquad.com",
        button: "成為經銷夥伴"
      }
    },
    about: {
      tagline: "部署智能，構建韌性。",
      title: "關於數陣科技",
      desc: "DataXquad (數陣科技) 總部位於新加坡，研發與硬體整合中心設於台灣。我們融合新加坡的戰略遠見與台灣的精湛工程實力，致力於開發能於關鍵時刻產生實質影響的尖端數據處理技術。"
    },
    footer: {
      rights: "© 2026 DataXquad Technologies."
    }
  }
};

const LANG_EVENT = "geokernel:lang";
const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "zh";
    return localStorage.getItem("language") || "zh";
  });
  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
  };
  useEffect(() => {
    const handler = (e) => setLanguageState(e.detail);
    window.addEventListener(LANG_EVENT, handler);
    return () => window.removeEventListener(LANG_EVENT, handler);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);
  const tr = translations[language] || translations["zh"];
  const getSection = (section) => tr?.[section] || {};
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { language, setLanguage, tr, getSection }, children });
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};

const Header = () => {
  const { language, setLanguage, tr } = useLanguage();
  const [isHome] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.location.pathname === "/";
  });
  const [scrolled, setScrolled] = useState(!isHome);
  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);
  const toggleLanguage = () => setLanguage(language === "zh" ? "en" : "zh");
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/10 py-3" : "bg-transparent py-5"}`,
      children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/",
            className: "flex items-center gap-2 group",
            onClick: (e) => {
              if (isHome) {
                e.preventDefault();
                scrollToSection("hero");
              }
            },
            children: [
              /* @__PURE__ */ jsx(Hexagon, { className: "w-8 h-8 text-blue-400 fill-blue-400/10" }),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-xl tracking-tight text-white", children: "GeoKernel" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/blog",
              className: "text-white/70 hover:text-white text-sm font-medium transition-colors hidden sm:block",
              children: tr?.common?.blog || "Blog"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleLanguage,
              className: "text-white/70 hover:text-white text-sm font-medium transition-colors px-3 py-1.5 rounded-full border border-white/20 hover:border-white/40",
              children: language === "zh" ? "EN" : "中文"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => scrollToSection("partners"),
              className: `px-5 py-2.5 rounded-full font-bold transition-all duration-200 hover:scale-105 shadow-md text-sm ${scrolled ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-white text-slate-900 hover:bg-blue-50"}`,
              children: tr?.common?.contactSales || "Contact Sales"
            }
          )
        ] })
      ] })
    }
  );
};

const Footer = () => {
  const { tr } = useLanguage();
  return /* @__PURE__ */ jsx("footer", { className: "bg-slate-950 text-slate-400 py-12 border-t border-slate-800/60", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Hexagon, { className: "w-6 h-6 text-blue-500 fill-blue-500/10" }),
      /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-slate-200 tracking-tight", children: "GeoKernel" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-sm", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/blog",
          className: "text-slate-400 hover:text-slate-200 transition-colors",
          children: "Blog"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:sales@dataxquad.com",
          className: "text-slate-400 hover:text-slate-200 transition-colors",
          children: "sales@dataxquad.com"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm", children: tr?.footer?.rights || "© 2026 DataXquad Technologies." })
  ] }) }) });
};

const HeroSection = ({ t }) => {
  const stats = [
    { label: t.hero.stats.speed, icon: Zap },
    { label: t.hero.stats.offline, icon: WifiOff },
    { label: t.hero.stats.accuracy, icon: LocateFixed }
  ];
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 z-0",
            style: {
              backgroundImage: "url(https://images.unsplash.com/photo-1643330683233-ff2ac89b002c)",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/80 z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/90 z-10" }),
        /* @__PURE__ */ jsx("div", { className: "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight",
              children: [
                t.hero.titleLine1,
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-cyan-300", children: t.hero.titleLine2 }),
                /* @__PURE__ */ jsx("span", { className: "block text-2xl md:text-4xl lg:text-5xl mt-4 text-slate-200 font-medium", children: t.hero.titleLine3 })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              className: "text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto",
              children: t.hero.subtitle
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.6 },
              className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-16",
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => scrollTo("partners"),
                    className: "w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 group",
                    children: [
                      /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 group-hover:rotate-12 transition-transform" }),
                      t.hero.ctaPartner
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => scrollTo("roadmap"),
                    className: "w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 group",
                    children: [
                      t.hero.ctaRoadmap,
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.8 },
              className: "grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-12 max-w-3xl mx-auto",
              children: stats.map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center group flex items-center justify-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-blue-400 group-hover:text-blue-300 transition-colors", children: /* @__PURE__ */ jsx(stat.icon, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ jsx("div", { className: "text-lg md:text-xl font-bold text-white tracking-wide", children: stat.label })
              ] }, i))
            }
          )
        ] }) })
      ]
    }
  );
};
const AdvantagesSection = ({ t }) => {
  const icons = [Zap, WifiOff, Shield, Cpu];
  return /* @__PURE__ */ jsx("section", { id: "advantages", className: "py-20 bg-slate-50 border-y border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4", children: t.advantages.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto", children: t.advantages.subtitle })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: t.advantages.items.map((item, index) => {
      const Icon = icons[index];
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "group bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-500/20 transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-blue-600" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-sm leading-relaxed", children: item.desc })
          ]
        },
        index
      );
    }) })
  ] }) });
};
const featureImages = [
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/a72510e6791301b30a3f17572fdaf534.png",
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/67d0d963fd43c9741feb23870f2d1d31.png",
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/3edb00621410ac37ea65d38a29be9390.png",
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/502f087fdb667217224b2f957e08e78b.png",
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/872241766c43b3ae149df21a1a78d129.png",
  "https://horizons-cdn.hostinger.com/9e24851d-64f0-4188-b077-fd2fdd4a30bc/1fe33652a68205706a6ca400010fae2b.png"
];
const featureIcons = [Map, Box, Cuboid, Mountain, Layers, ScanFace];
const FeaturesSection = ({ t }) => {
  return /* @__PURE__ */ jsxs("section", { id: "features", className: "py-24 relative overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-3xl mx-auto",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block", children: t.features.sectionTitle }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4", children: t.features.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600", children: t.features.subtitle })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-24", children: t.features.items.map((feature, index) => {
        const Icon = featureIcons[index];
        const isEven = index % 2 === 0;
        const badge = index === 4 ? t.features.badgeLC : index === 5 ? t.features.badgeER : null;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-100px" },
            transition: { duration: 0.6 },
            className: `flex flex-col-reverse gap-8 md:gap-16 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm", children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-blue-600" }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h3", { className: "text-3xl font-bold text-slate-900 mb-2 inline-flex items-center gap-3 flex-wrap", children: [
                  feature.title,
                  badge && /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full shadow-sm align-middle", children: badge })
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 leading-relaxed", children: feature.desc })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative group rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-video", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" }),
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: featureImages[index],
                      alt: feature.title,
                      className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    }
                  )
                ] }),
                badge && /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-slate-400 text-center italic", children: t.features.disclaimer })
              ] })
            ]
          },
          index
        );
      }) })
    ] })
  ] });
};
const formatCategoryIcons = [Globe, Box, Layers];
const FormatsSection = ({ t }) => {
  return /* @__PURE__ */ jsx("section", { id: "formats", className: "py-20 bg-slate-50 border-y border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-6", children: t.formats.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: t.formats.subtitle })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: t.formats.categories.map((cat, index) => {
      const Icon = formatCategoryIcons[index];
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900", children: cat.title })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4 flex-1", children: cat.items.map((item, i) => /* @__PURE__ */ jsxs(
              "li",
              {
                className: "flex items-center justify-between pb-3 border-b border-slate-50 last:border-0 last:pb-0 group",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-slate-700 font-medium group-hover:text-blue-600 transition-colors", children: item.name }),
                  item.ext && /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded", children: item.ext })
                ]
              },
              i
            )) })
          ]
        },
        index
      );
    }) })
  ] }) });
};
const dotColors = {
  blue: "bg-blue-600",
  emerald: "bg-emerald-600",
  amber: "bg-amber-600"
};
const titleColors = {
  blue: "text-blue-700",
  emerald: "text-emerald-700",
  amber: "text-amber-700"
};
const RoadmapSection = ({ t }) => {
  return /* @__PURE__ */ jsx("section", { id: "roadmap", className: "py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4", children: t.roadmap.title }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600", children: t.roadmap.subtitle })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: t.roadmap.items.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.2 },
          className: `relative flex items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-50 z-10 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${dotColors[item.color]}` }) }),
            /* @__PURE__ */ jsx("div", { className: `ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-3.5 h-3.5" }),
                item.date
              ] }) }),
              /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-3 ${titleColors[item.color]}`, children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed", children: item.desc })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "hidden md:block md:w-1/2" })
          ]
        },
        index
      )) })
    ] })
  ] }) });
};
const PartnersSection = ({ t }) => {
  return /* @__PURE__ */ jsx("section", { id: "partners", className: "py-24 bg-slate-50 border-t border-slate-200", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6", children: t.partners.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto", children: t.partners.subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto", children: t.partners.list.map((partner, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 text-xl bg-slate-50 w-8 h-8 flex items-center justify-center rounded-full border border-slate-100 z-10", children: partner.flag }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-48 flex items-center justify-center mb-4 p-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: partner.logo,
              alt: partner.name,
              className: "max-w-full max-h-full object-contain"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "text-center w-full mt-auto", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 mb-2", children: partner.name }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-slate-100 pt-3 w-full", children: /* @__PURE__ */ jsx("p", { className: "text-slate-500 font-medium text-sm", children: partner.role }) })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl relative overflow-hidden max-w-5xl mx-auto",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-12 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4", children: /* @__PURE__ */ jsx(Users, { size: 300 }) }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-4xl font-bold mb-6 tracking-tight", children: t.partners.recruit.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line", children: t.partners.recruit.desc }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `mailto:${t.partners.recruit.email}`,
                  className: "w-full sm:w-auto flex items-center justify-center gap-3 text-white/90 hover:text-white bg-white/10 px-8 py-4 rounded-xl backdrop-blur-sm transition-all border border-white/20 hover:bg-white/20",
                  children: [
                    /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { children: t.partners.recruit.email })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${t.partners.recruit.email}`,
                  className: "w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25",
                  children: t.partners.recruit.button
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) });
};
const AboutSection = ({ t }) => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "about",
      className: "relative py-24 lg:py-32 flex items-center",
      style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1576768199566-8e894301ede5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-slate-900/85" }),
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              className: "inline-block text-blue-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm",
              children: t.about.title
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10",
              children: t.about.tagline
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "bg-slate-800/40 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl",
              children: /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-slate-200 leading-relaxed", children: t.about.desc })
            }
          )
        ] }) })
      ]
    }
  );
};
const HomePage = () => {
  const { tr } = useLanguage();
  if (!tr) return null;
  return /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsx(HeroSection, { t: tr }),
    /* @__PURE__ */ jsx(AdvantagesSection, { t: tr }),
    /* @__PURE__ */ jsx(FeaturesSection, { t: tr }),
    /* @__PURE__ */ jsx(FormatsSection, { t: tr }),
    /* @__PURE__ */ jsx(RoadmapSection, { t: tr }),
    /* @__PURE__ */ jsx(PartnersSection, { t: tr }),
    /* @__PURE__ */ jsx(AboutSection, { t: tr })
  ] });
};

function HomeContent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(HomePage, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function HomeApp() {
  return /* @__PURE__ */ jsx(LanguageProvider, { children: /* @__PURE__ */ jsx(HomeContent, {}) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const SITE = "https://geokernel.com";
  const title = "GeoKernel - Tactical Intelligence at the Edge";
  const description = "GeoKernel 2.0. Mission-critical intelligence, 100% offline. Instant drone imagery processing for disaster relief and real-time decision making.";
  const ogImage = `${SITE}/og-image.png`;
  return renderTemplate`<html lang="zh"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(SITE, "href")}><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(SITE, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:locale" content="zh_TW"><meta property="og:locale:alternate" content="en_US"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/favicon.png">${renderHead()}</head> <body> ${renderComponent($$result, "HomeApp", HomeApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/tmp/geokernel-website/src/views/HomeApp.jsx", "client:component-export": "default" })} </body></html>`;
}, "/tmp/geokernel-website/src/pages/index.astro", void 0);

const $$file = "/tmp/geokernel-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
