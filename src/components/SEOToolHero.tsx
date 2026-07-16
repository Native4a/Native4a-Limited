'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Search, Globe } from 'lucide-react';

/**
 * SEO Tool Hero Section Component
 * A high-end, elegant landing page section for an SEO tool.
 * Features a split grid layout with smooth entrance animations and premium styling.
 */
export const SEOToolHero: React.FC = () => {
  return <section className="relative w-full flex items-center justify-center bg-white overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Illustration/Image (3/7 columns on desktop) */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-emerald-50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500 ease-in-out -z-10" />
              
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl bg-slate-50 border border-slate-100">
                <img src="https://nativeaaaa.com.hk/static/White_And_Blue_Illustration_Basic_SEO_Techniques_Instagram_Post-acd5edeb47fc558afc67534ae7b65076.webp" alt="SEO Techniques Illustration" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                
                {/* Floating Elements for "Human Touch" */}
                <motion.div animate={{
                y: [0, -10, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                  <TrendingUp className="w-6 h-6 text-emerald-500" />
                </motion.div>
                
                <motion.div animate={{
                y: [0, 10, 0]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }} className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-slate-700">Real-time Ranking</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content (4/7 columns on desktop) */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }} className="lg:col-span-4 flex flex-col items-start gap-8">
            <div className="space-y-4">
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.4
            }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Expertise summary</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                快速提升SEO排名的<br />
                <span className="text-emerald-500">全能工具</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                一套經 native4a 八年SEO、超過 400 個獨立網站優化經驗總結，
                <span className="text-slate-900 font-medium italic mx-1">能令你在 7 天內</span> 
                將關鍵字提升至搜尋結果首頁的 SEO 懶人包。
              </p>
            </div>

            {/* Feature List (Optional Add for Clarity & Value) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                <Search className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700">精準關鍵字研究</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
                <Globe className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-semibold text-slate-700">全方位網站診斷</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.a whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }} href="#" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-emerald-200">
                <span>立即下載SEO懶人包</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <div className="text-center sm:text-left">
                <p className="text-xs text-slate-400 font-medium">已有超過 1,200+ 用戶獲益</p>
                <div className="flex justify-center sm:justify-start -space-x-2 mt-1">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>)}
                </div>
              </div>
            </div>

            {/* Trusted By / Logos Section */}
            <div className="pt-8 border-t border-slate-100 w-full">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap gap-8 grayscale opacity-50 contrast-125">
                {/* Mock Logo Text for simplicity while maintaining premium feel */}
                <span className="font-serif text-xl italic text-slate-800">GrowthFlow</span>
                <span className="font-sans text-xl font-black text-slate-800">MARKET+</span>
                <span className="font-mono text-xl text-slate-800">DataHub</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>;
};
export default SEOToolHero;
