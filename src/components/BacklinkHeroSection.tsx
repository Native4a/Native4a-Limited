'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}
const Tab: React.FC<TabProps> = ({
  label,
  isActive,
  onClick
}) => <button onClick={onClick} className={cn("px-6 py-2 rounded-full font-bold transition-all duration-200 cursor-pointer border-2", isActive ? "bg-white text-black border-black shadow-sm" : "bg-transparent text-gray-600 border-transparent hover:border-gray-200")} role="tab" aria-selected={isActive}>
    {label}
  </button>;
const AWARD_IMAGES = [{
  id: 'award-1',
  src: "https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp",
  alt: "Award Certificate 1"
}, {
  id: 'award-2',
  src: "https://images.ctfassets.net/rpza41pe9ev5/3ft9YcqxLo39PuYuOfatDs/63a81358563fa484739ce0383fc9d821/native4aAward02.webp",
  alt: "Award Certificate 2"
}];
const MEDIA_LOGOS = [{
  id: 'media-1',
  src: 'https://images.ctfassets.net/rpza41pe9ev5/1Z9kABymRLNig6bmCDInfA/531d55423f66acf4585737dde8852224/logo_hket-0802f63cfd8456776825bba969fdb6f0.png',
  alt: 'HKET Logo',
  className: 'w-32 md:w-44 h-auto object-contain'
}, {
  id: 'media-2',
  src: 'https://images.ctfassets.net/rpza41pe9ev5/6lzmfxu8TRwbdcAIUuHDmC/7251b6e1b6c8b22aca23fdc6b8caba63/The_Standard_Logo-a81712920c34ac9bdcc256254e8599a9.png',
  alt: 'The Standard Logo',
  className: 'w-40 md:w-56 h-auto object-contain'
}];
const BackgroundDecoration: React.FC = () => <div className="absolute top-0 right-0 h-full w-full pointer-events-none z-0">
    <svg className="absolute top-0 right-0 h-full w-auto opacity-100" viewBox="0 0 278 590" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M278 -0.4H185.3C151 176.2 116.7 352.9 82.4 529.5H278V-0.4Z" fill="#70A665" />
    </svg>
  </div>;
export const BacklinkHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'awards' | 'media'>('awards');
  return <section className="relative w-full flex items-center overflow-hidden" style={{
    backgroundImage: 'linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 60%, #70A665 60%, #70A665 100%)',
    height: "934.938px"
  }}>
      <BackgroundDecoration />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column: Text Content */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="flex-1 flex flex-col space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                「什麼是Backlinks？」
              </h1>
              <h2 className="text-xl md:text-2xl font-black tracking-tight flex flex-wrap gap-2 items-center">
                <span className="bg-[#FFC107] px-2 py-0.5 inline-block">無咗佢</span>
                <span>，你可能都會有排名，但Top 10？No Way</span>
              </h2>
              <div className="h-1 w-full max-w-[480px] bg-[#FBBF24] mt-2" />
            </div>

            <div className="w-full border-b-2 border-[#70a665]" aria-hidden="true" style={{
          display: "none"
        }} />

            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium">
              中文網站 買中文反向連結，實證對改善網站權重和SEO排名有顯著正面效果。歡迎索取外部連結Backlink HK樣本和查詢
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="inline-flex items-center px-8 py-3 bg-[#70A665] text-white font-bold text-lg rounded-full shadow-md hover:bg-[#5e9254] transition-colors duration-200">
                <span>免費查詢</span>
              </a>
              <a href="#samples" className="inline-flex items-center px-8 py-3 bg-[#FBBF24] text-gray-900 font-bold text-lg rounded-full shadow-md hover:bg-[#f59e0b] transition-colors duration-200">
                <span>索取樣本</span>
              </a>
            </div>
        </motion.div>

        {/* Right Column: Awards & Media */}
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }} className="flex-1 w-full max-w-2xl">
            {/* Desktop View */}
            <div className="hidden lg:flex flex-col gap-10">
              {/* Awards Card */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 underline decoration-amber-400 decoration-4 underline-offset-8">
                  年度獎項
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {AWARD_IMAGES.map(img => <motion.div key={img.id} whileHover={{
                scale: 1.02
              }} className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                      <img src={img.src} alt={img.alt} className="w-full h-auto object-cover aspect-[4/3]" />
                    </motion.div>)}
                </div>
              </div>

              {/* Media Card */}
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 underline decoration-amber-400 decoration-4 underline-offset-8">
                  媒體報導
                </h3>
                <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                  {MEDIA_LOGOS.map(logo => <motion.div key={logo.id} whileHover={{
                scale: 1.05
              }}>
                      <img src={logo.src} alt={logo.alt} className={logo.className} />
                    </motion.div>)}
                </div>
              </div>
            </div>

            {/* Mobile View (Tabs) */}
            <div className="lg:hidden flex flex-col space-y-6 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 text-[#FAAB00]">
                <Square className="fill-current w-6 h-6" />
                <h4 className="text-lg font-bold text-black">「native4a」品牌 - 獲獎的廣告公司</h4>
              </div>

              <div className="flex flex-wrap gap-2 mb-4" role="tablist">
                <Tab label="年度獎項" isActive={activeTab === 'awards'} onClick={() => setActiveTab('awards')} />
                <Tab label="媒體報導" isActive={activeTab === 'media'} onClick={() => setActiveTab('media')} />
              </div>

              <div className="min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'awards' && <motion.div key="awards-mobile" initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} className="grid grid-cols-1 gap-4">
                      {AWARD_IMAGES.map(img => <div key={`${img.id}-mobile`} className="bg-gray-50 p-2 rounded-xl shadow-inner">
                          <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg object-contain" />
                        </div>)}
                    </motion.div>}

                  {activeTab === 'media' && <motion.div key="media-mobile" initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} className="flex flex-col items-center gap-8 py-6">
                      {MEDIA_LOGOS.map(logo => <img key={`${logo.id}-mobile`} src={logo.src} alt={logo.alt} className="h-24 w-auto object-contain" />)}
                    </motion.div>}
                </AnimatePresence>
              </div>
            </div>
        </motion.div>
      </div>
    </section>;
};
