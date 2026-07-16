'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
const FeatureItem = ({
  icon: Icon,
  title,
  description
}: {
  icon: any;
  title: string;
  description: string;
}) => <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-emerald-100/50 shadow-sm transition-all hover:shadow-md hover:bg-white">
    <div className="mt-1 p-2 rounded-lg bg-emerald-50 text-emerald-600"><Icon size={20} /></div>
    <div>
      <h3 className="font-semibold text-slate-800 text-sm md:text-base">{title}</h3>
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{description}</p>
    </div>
  </div>;
const FEATURES = [{
  icon: Globe,
  title: '高權威度',
  description: '取得優質中文網域資源，具備成營的網域權威與信任評分。'
}, {
  icon: CheckCircle2,
  title: '嚴選品質',
  description: '每一條連結皆經人工檢查內容相關性與自然流量概況。'
}, {
  icon: ExternalLink,
  title: '透明報告',
  description: '提供連結刊登位置、收錄狀態與成效指標的詳細分析。'
}];
export const BacklinkShowcase: React.FC = () => {
  return <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#F8FAF9] selection:bg-emerald-100 selection:text-emerald-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-100/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-200/20 blur-[120px]" />
      </div>
      <div className="relative z-10 w-full max-w-5xl px-6 py-20 flex flex-col items-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">高階 SEO 解決方案</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">提升您的 <span className="text-emerald-600">全球能見度</span></h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed">探索我們精選的高成效反向連結樣本，專為中文市場而設計。</p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="flex flex-col items-center justify-center w-full mb-20">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <a href="#" onClick={e => e.preventDefault()} className="relative block">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className={cn('bg-emerald-500 hover:bg-emerald-600 transition-colors duration-300', 'text-white font-medium rounded-full', 'px-8 py-4 text-2xl', 'md:px-12 md:py-5 md:text-3xl', 'xl:px-16 xl:py-7 xl:text-6xl', 'shadow-xl shadow-emerald-500/20', 'flex items-center justify-center gap-4')}>
                <span>中文反向連結樣本</span>
                <motion.span initial={{
                x: 0
              }} whileHover={{
                x: 5
              }} className="hidden md:inline-block">
                  <ArrowRight className="w-8 h-8 xl:w-16 xl:h-16" strokeWidth={2} />
                </motion.span>
              </motion.div>
            </a>
          </div>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }} className="mt-6 text-sm text-slate-400 font-medium tracking-wide uppercase">點擊探索 100+ 個已驗證樣本</motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {FEATURES.map((feature, index) => <motion.div key={feature.title} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4 + index * 0.1,
          duration: 0.5
        }}>
              <FeatureItem icon={feature.icon} title={feature.title} description={feature.description} />
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.8
      }} className="mt-24 pt-12 border-t border-emerald-100 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400" style={{
        display: 'none'
      }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium">目前服務超過 5,000 個網域</span>
          </div>
        </motion.div>
      </div>
    </section>;
};
