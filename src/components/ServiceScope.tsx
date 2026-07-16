'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface ServiceItem {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}
const SERVICE_DATA: ServiceItem[] = [{
  id: 0,
  number: "1",
  title: "關鍵字選取",
  description: "SEO工程最重要的一步是關鍵字選擇，我們會協助您選取最合適關鍵字。",
  image: "https://nativeaaaa.com.hk/static/SEO_01-1c94fc1a25671a8c49b29f59c83f5e63.svg"
}, {
  id: 1,
  number: "2",
  title: "On-Page SEO",
  description: "On-Page SEO包括內文撰寫，修正編碼錯誤，Google數據調整等工序。",
  image: "https://nativeaaaa.com.hk/static/SEO_02-ecc28e0f4d5f9c3761172e29458a9981.svg"
}, {
  id: 2,
  number: "3",
  title: "Off-Page SEO",
  description: "我們除了為您建立高質而穩定的外部連結外，還為您分析對手的外部連結種類，數/質量等。",
  image: "https://nativeaaaa.com.hk/static/SEO_03-a61a144902d9d1f407e2c9519949e6bb.svg"
}, {
  id: 3,
  number: "4",
  title: "穩定排名",
  description: "SEO是一個長遠而極具效益的武器，我們為您長遠穩定最佳的排名位置。",
  image: "https://nativeaaaa.com.hk/static/SEO_04-b78804fb4b5ff0a59dc78dac32821844.svg"
}];
export const ServiceScope: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % SERVICE_DATA.length);
  };
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + SERVICE_DATA.length) % SERVICE_DATA.length);
  };
  return <section className="relative w-full bg-white py-16 md:py-28 overflow-hidden font-sans">
    <div className="max-w-[1520px] mx-auto px-6 md:px-9">
      <div className="mb-8 md:mb-16 flex items-center gap-6 ml-2">
        <h2 className="flex items-center text-3xl font-bold text-gray-900 gap-3">
          <span className="text-[#70A665]"><Square className="fill-current" size={32} /></span>
          <span className="font-black">服務範圍</span>
        </h2>
        <div className="flex items-center">
          <ul className="flex items-center gap-4 list-none" style={{
            fontWeight: "400",
            fontStyle: "normal"
          }}>
            {SERVICE_DATA.map((item, index) => <li key={item.id} className="relative list-none">
              <button onClick={() => setActiveIndex(index)} className={cn("relative flex items-center justify-center transition-all duration-300 font-black text-4xl focus:outline-none no-underline [text-decoration:none]", activeIndex === index ? "text-[#70A665] w-12" : "text-gray-300 w-8")} style={{
                textDecoration: 'none'
              }}>
                <span className="relative z-10">{index + 1}</span>
                {activeIndex === index && <motion.div layoutId="active-dot-bg" className="absolute bottom-0 left-0 w-full h-1 bg-[#70A665] rounded-full mt-2" />}
              </button>
            </li>)}
          </ul>
        </div>
      </div>
      <div className="relative h-auto md:h-[600px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.5,
            ease: "easeInOut"
          }} className="w-full">
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center", activeIndex % 2 !== 0 ? "md:flex-row-reverse" : "")}>
              <div className={cn("relative order-2 md:order-1", activeIndex % 2 !== 0 ? "md:order-2" : "md:order-1")}>
                <div className={cn("flex flex-col gap-0 pt-2", activeIndex === 0 || activeIndex === 2 ? "ml-auto items-end text-right" : "")}>
                  <div className="flex items-end gap-0 leading-none select-none pointer-events-none mb-2">
                    <span className="text-[#70a665] text-[120px] md:text-[180px] font-black leading-none opacity-100 tracking-tighter">{SERVICE_DATA[activeIndex].number}</span>
                  </div>
                  <div className="relative -mt-8 md:-mt-12">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="block w-8 h-[3px] bg-[#FAAB00] rounded-full"></span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FAAB00]">Step {SERVICE_DATA[activeIndex].number}</span>
                    </div>
                    <h4 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight leading-[1.1]">{SERVICE_DATA[activeIndex].title}</h4>
                    <div className="w-12 h-[2px] bg-gray-200 mb-5 rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-md font-normal">{SERVICE_DATA[activeIndex].description}</p>
                  </div>
                </div>
              </div>
              <div className={cn("order-1 md:order-2 flex justify-center", activeIndex % 2 !== 0 ? "md:order-1" : "md:order-2")}>
                <motion.img src={SERVICE_DATA[activeIndex].image} alt={SERVICE_DATA[activeIndex].title} className="w-4/5 md:w-full max-w-[600px] h-auto object-contain" initial={{
                  scale: 0.9,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.2,
                  duration: 0.5
                }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </section>;
};