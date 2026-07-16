'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare, Link2, Search, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
interface CTAButtonProps {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
}
const BUTTONS: CTAButtonProps[] = [{
  href: '#',
  label: '中文Backlinks收費參考',
  variant: 'primary',
  icon: <MessageSquare className="w-5 h-5" />
}, {
  href: '#',
  label: '中文Backlinks案例參考',
  variant: 'secondary',
  icon: <ExternalLink className="w-5 h-5" />
}];
const CTAButton = ({
  href,
  label,
  variant,
  icon
}: CTAButtonProps) => {
  const baseClasses = "flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg w-full md:w-auto";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-amber-500 hover:bg-amber-600 text-white"
  };
  return <motion.a href={href} className={cn(baseClasses, variants[variant])} whileHover={{
    y: -2
  }} whileTap={{
    scale: 0.98
  }}>
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </motion.a>;
};
export const SeoBacklinksHero: React.FC = () => {
  return <div className="relative w-full">
    <svg width="0" height="0" style={{
      position: 'absolute'
    }} aria-hidden="true">
      <defs>
        <clipPath id="seo-hero-wave-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 L1,0 L1,0.88 C0.75,1.04 0.25,0.72 0,0.88 Z" />
        </clipPath>
      </defs>
    </svg>
    <section className="relative z-10 mb-[-80px] w-full bg-[#608A51] flex flex-col items-center justify-center selection:bg-white/30" style={{
      clipPath: 'url(#seo-hero-wave-clip)'
    }}>
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="absolute top-10 left-10 transform -rotate-12">
        <Search size={120} className="text-white" />
      </div>
      <div className="absolute bottom-10 right-10 transform rotate-12">
        <TrendingUp size={160} className="text-white" />
      </div>
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20">
        <Link2 size={80} className="text-white" />
      </div>
    </div>
    <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-32 pb-32 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left text-white">
        <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tight">
            「SEO+Backlinks懶人包」
            <br />
            <span className="block mt-2">整合方案</span>
          </h1>
        </motion.div>
        <motion.p className="text-lg md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12 text-white/90" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}>
          在香港做SEO，繁中backlinks少不了。我們研發了中文backlinks系統，歡迎客戶或同行購買。
        </motion.p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-auto" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut"
          }}>
          {BUTTONS.map(button => <CTAButton key={button.label} href={button.href} label={button.label} variant={button.variant} icon={button.icon} />)}
        </motion.div>
      </div>
    </div>
  </section>
  </div>;
};
