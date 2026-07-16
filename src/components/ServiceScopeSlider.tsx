'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface ServiceStep {
  id: number;
  title: string;
  description: string;
  image: string;
}
const SERVICE_STEPS: ServiceStep[] = [{
  id: 1,
  title: '準備目標Keywords',
  description: '給我們你想做的目標關鍵字，我們為你分析潛力。',
  image: 'https://nativeaaaa.com.hk/static/Backlink_01-a67e5feb2bc85f22e2e0a29160d2b989.svg'
}, {
  id: 2,
  title: '分配需要頁面',
  description: '一個網站並非每頁都要做backlinks，你必需分配好需要做的目標頁面。或讓我們幫幫您。',
  image: 'https://nativeaaaa.com.hk/static/Backlink_02-5a578719367cb755fc7fe0d3a7db2106.svg'
}, {
  id: 3,
  title: '建立Backlinks',
  description: '我們會在7-28天內完成連結工作。',
  image: 'https://nativeaaaa.com.hk/static/Backlink_03-4cb1eef6351e4b5a5c5a89a1b0260ce8.svg'
}, {
  id: 4,
  title: '詳細的完成報告',
  description: '每一條外鏈您都會看到它的出處，目的地，DA & PA。',
  image: 'https://nativeaaaa.com.hk/static/Backlink_04-b09a606142a230b3b9ec205d76bc9050.svg'
}];
export const ServiceScopeSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = SERVICE_STEPS[activeIndex];
  return <section className="relative w-full bg-white py-16 md:py-28 overflow-hidden font-sans">
    <div className="max-w-[1520px] mx-auto px-6 md:px-9">
      <div className="mb-8 md:mb-16 flex items-center gap-6 ml-2">
        <h2 className="flex items-center text-3xl font-bold text-gray-900 gap-3">
          <span className="text-[#70A665]"><Square className="fill-current" size={32} aria-hidden="true" /></span>
          <span className="font-black">服務範圍</span>
        </h2>
        <div className="flex items-center">
          <ul className="flex items-center gap-4 list-none" style={{
            fontWeight: '400',
            fontStyle: 'normal'
          }}>
            {SERVICE_STEPS.map((item, index) => <li key={item.id} className="relative list-none">
              <button type="button" onClick={() => setActiveIndex(index)} className={cn('relative flex items-center justify-center transition-all duration-300 font-black text-4xl focus:outline-none no-underline [text-decoration:none]', activeIndex === index ? 'text-[#70A665] w-12' : 'text-gray-300 w-8')} style={{
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
          <motion.div key={activeStep.id} initial={{
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
            ease: 'easeInOut'
          }} className="w-full">
            <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center', activeIndex % 2 !== 0 ? 'md:flex-row-reverse' : '')}>
              <div className={cn('relative order-2 md:order-1', activeIndex % 2 !== 0 ? 'md:order-2' : 'md:order-1')}>
                <div className={cn('flex flex-col gap-0 pt-2', activeIndex === 0 || activeIndex === 2 ? 'ml-auto items-end text-right' : '')}>
                  <div className="flex items-end gap-0 leading-none select-none pointer-events-none mb-2">
                    <span className="text-[#70a665] text-[120px] md:text-[180px] font-black leading-none opacity-100 tracking-tighter">{activeStep.id}</span>
                  </div>
                  <div className="relative -mt-8 md:-mt-12">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="block w-8 h-[3px] bg-[#FAAB00] rounded-full"></span>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FAAB00]">Step {activeStep.id}</span>
                    </div>
                    <h4 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 tracking-tight leading-[1.1]">{activeStep.title}</h4>
                    <div className="w-12 h-[2px] bg-gray-200 mb-5 rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-md font-normal">{activeStep.description}</p>
                  </div>
                </div>
              </div>
              <div className={cn('order-1 md:order-2 flex justify-center', activeIndex % 2 !== 0 ? 'md:order-1' : 'md:order-2')}>
                <motion.img src={activeStep.image} alt={activeStep.title} className="w-4/5 md:w-full max-w-[600px] h-auto object-contain" initial={{
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
