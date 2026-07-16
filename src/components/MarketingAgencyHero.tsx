'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface AwardItem {
  id: string;
  type: 'award' | 'media';
  title: string;
  imageUrl: string;
  alt: string;
}
const AWARDS_DATA: AwardItem[] = [{
  id: 'award-1',
  type: 'award',
  title: '年度獎項',
  imageUrl: 'https://nativeaaaa.com.hk/static/native4aAward01-56a71d1e2759314b7e1a2b97fa9e7e35.webp',
  alt: 'Native4A 獲獎證書 01'
}, {
  id: 'award-2',
  type: 'award',
  title: '年度獎項',
  imageUrl: 'https://nativeaaaa.com.hk/static/native4aAward02-029db044e0228d4c2d4393ab7b6e0cb4.webp',
  alt: 'Native4A 獲獎證書 02'
}, {
  id: 'media-1',
  type: 'media',
  title: '媒體報導',
  imageUrl: 'https://nativeaaaa.com.hk/static/native4aMedia01-0802f63cfd8456776825bba969fdb6f0.png',
  alt: 'Native4A 媒體報導 01'
}, {
  id: 'media-2',
  type: 'media',
  title: '媒體報導',
  imageUrl: 'https://nativeaaaa.com.hk/static/native4aMedia02-a81712920c34ac9bdcc256254e8599a9.png',
  alt: 'Native4A 媒體報導 02'
}];
const SocialButton = ({
  href,
  icon: Icon,
  label,
  bgColor = 'bg-white',
  textColor = 'text-black',
  iconColor
}: {
  href: string;
  icon: any;
  label?: string;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}) => <a href={href} className={cn("flex items-center gap-3 px-6 py-3 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95", bgColor, textColor, bgColor === 'bg-[#10B981]' ? 'hover:bg-[#059669]' : '')} style={{
  boxShadow: "none"
}}>
    {Icon && typeof Icon === 'string' ? <img src={Icon} alt={label} className="w-8 h-8" /> : <Icon className={cn("w-6 h-6", iconColor)} />}
    {label && <span className="font-bold text-lg">{label}</span>}
  </a>;
const TabButton = ({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => <button onClick={onClick} className={cn("px-6 py-1.5 rounded-full font-bold text-base transition-all border-2", active ? "bg-white text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" : "bg-transparent text-gray-600 border-gray-300 hover:border-black")}>
    {children}
  </button>;
export const MarketingAgencyHero = () => {
  const [activeTab, setActiveTab] = useState<'award' | 'media'>('award');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const filteredItems = AWARDS_DATA.filter(item => item.type === activeTab);
  const desktopPageCount = Math.ceil(filteredItems.length / 2);
  const mobilePageCount = filteredItems.length;
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setSlideDirection(1);
      setCurrentIndex(prev => (prev + 1) % desktopPageCount);
    }, 3000);
  };
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab, desktopPageCount]);
  const desktopSlideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };
  const mobileSlideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };
  const desktopItems = filteredItems.slice(currentIndex * 2, currentIndex * 2 + 2);
  const mobileItem = filteredItems[currentIndex % mobilePageCount] ? [filteredItems[currentIndex % mobilePageCount]] : [];
  return <section className="relative w-full overflow-hidden font-sans" style={{
    backgroundImage: 'linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 60%, #70A665 60%, #70A665 100%)'
  }}>
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{
      height: "934.938px"
    }}>
      <div className="flex flex-col gap-8 z-10">
        <header className="space-y-4">
          <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight tracking-tight">香港數碼營銷公司</motion.h1>
          <div className="relative inline-block group">
            <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="text-2xl md:text-3xl font-extrabold text-black tracking-tight">native讓你站在巨人肩上</motion.h2>
            <motion.div initial={{
              width: 0
            }} animate={{
              width: '100%'
            }} transition={{
              delay: 0.3,
              duration: 0.6
            }} className="h-1 bg-[#FBBF24] mt-2 rounded-full" />
          </div>
        </header>
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xl leading-relaxed">我們提供全面的數碼營銷解決方案，幫助你的業務在線上世界中成長和成功。</motion.p>
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="flex flex-wrap gap-4">
          <SocialButton href="#" icon="https://images.ctfassets.net/rpza41pe9ev5/1v19Z4sFUHO0Oi0j0K3MXw/97da3effb0fb90b8fa1635405219625a/instagram.svg" label="" bgColor="bg-white" />
          <SocialButton href="https://api.whatsapp.com/send/?phone=85264602996" icon="https://images.ctfassets.net/rpza41pe9ev5/6u2gdBEeR8m5SFBROWNQT0/759a810b5e03750ab19ce5fd6060a821/WhatsApp.svg" label="WhatsApp查詢" bgColor="bg-[#10B981]" textColor="text-white" />
        </motion.div>
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="mt-8 space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <div className="p-1.5 bg-[#faab00] text-white rounded-sm"><Square className="w-5 h-5 fill-[#faab00] text-[#faab00]" color="#faab00" aria-hidden="true" /></div>
            <h4 className="text-xl md:text-2xl font-bold text-black">「native4a」品牌 - 獲獎的廣告公司</h4>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-6 md:p-8 shadow-xl border border-white/50">
            <div className="flex flex-wrap gap-3 mb-8">
              <TabButton active={activeTab === 'award'} onClick={() => {
                setActiveTab('award');
                setCurrentIndex(0);
              }}>年度獎項</TabButton>
              <TabButton active={activeTab === 'media'} onClick={() => {
                setActiveTab('media');
                setCurrentIndex(0);
              }}>媒體報導</TabButton>
            </div>
            <div className="relative overflow-hidden">
              {/* Desktop: 2 items per slide */}
              <div className="hidden sm:block">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div key={`desktop-${activeTab}-${currentIndex}`} custom={slideDirection} variants={desktopSlideVariants} initial="enter" animate="center" exit="exit" transition={{
                    duration: 0.35,
                    ease: 'easeInOut'
                  }} className="grid grid-cols-2 gap-4 md:gap-6">
                    {desktopItems.map(item => <div key={item.id} className="group">
                        <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex items-center justify-center p-2 transition-transform group-hover:scale-[1.02]">
                          <img src={item.imageUrl} alt={item.alt} className="max-w-full max-h-full object-contain" />
                        </div>
                      </div>)}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Mobile: 1 item per slide */}
              <div className="block sm:hidden">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.div key={`mobile-${activeTab}-${currentIndex}`} custom={slideDirection} variants={mobileSlideVariants} initial="enter" animate="center" exit="exit" transition={{
                    duration: 0.35,
                    ease: 'easeInOut'
                  }}>
                    {mobileItem.map(item => <div key={item.id} className="group">
                        <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex items-center justify-center p-2 transition-transform group-hover:scale-[1.02]">
                          <img src={item.imageUrl} alt={item.alt} className="max-w-full max-h-full object-contain" />
                        </div>
                      </div>)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="hidden lg:flex justify-center items-center relative">
        <div className="relative w-full max-w-lg aspect-square">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
          <img src="https://nativeaaaa.com.hk/static/Award02_2-999a65693cdca077fd351dcb34d6970f.png" alt="Awards Trophy" className="relative w-full h-auto drop-shadow-2xl animate-float" />
        </div>
      </motion.div>
    </div>
    <style>{`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } } .animate-float { animation: float 6s ease-in-out infinite; }`}</style>
  </section>;
};