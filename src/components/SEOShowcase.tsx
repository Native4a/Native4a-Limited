'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, BarChart2, Hash, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---

interface CaseStudy {
  id: string;
  keyword: string;
  industry: string;
  volume: number;
  beforeRank: string;
  afterRank: string;
  duration: string;
  imageUrl: string;
  alt: string;
}

// --- Mock Data ---

const CASE_STUDIES: CaseStudy[] = [{
  id: '1',
  keyword: '智慧齒',
  industry: '智慧齒 (Dental)',
  volume: 40500,
  beforeRank: '#18',
  afterRank: '#7',
  duration: '10 days',
  imageUrl: 'https://nativeaaaa.com.hk/static/wisdomTooth-620504287faf4c270c7833715beda4d9.webp',
  alt: 'Wisdom Tooth SEO Ranking Data'
}, {
  id: '2',
  keyword: '內衣',
  industry: '功能內衣 (Functional Lingerie)',
  volume: 49500,
  beforeRank: '#74',
  afterRank: '#7',
  duration: '4 days',
  imageUrl: 'https://nativeaaaa.com.hk/static/underwear-05f7e996194b57cbb5a101d6bfd0656d.webp',
  alt: 'Underwear SEO Ranking Data'
}, {
  id: '3',
  keyword: '青年創業補助不用還',
  industry: '青年創業補助 (Youth Entrepreneurship)',
  volume: 4800,
  beforeRank: '#201',
  afterRank: '#7',
  duration: '2 days',
  imageUrl: 'https://nativeaaaa.com.hk/static/Youth%20Entrepreneurship-620504287faf4c270c7833715beda4d9.webp',
  alt: 'Youth Entrepreneurship SEO Ranking Data'
}];

// --- Sub-components ---

const CaseStudyRow = ({
  study,
  index
}: {
  study: CaseStudy;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-100px"
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} className="group relative grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center py-12 border-b border-gray-100 last:border-0">
      {/* Image Side (Spans 3 columns) */}
      <div className={cn("lg:col-span-3 overflow-hidden rounded-2xl shadow-xl shadow-gray-200/50 transition-transform duration-500 group-hover:scale-[1.01]", !isEven && "lg:order-last")}>
        <img src={study.imageUrl} alt={study.alt} className="w-full h-auto object-cover block" loading="lazy" />
      </div>

      {/* Content Side (Spans 2 columns) */}
      <div className={cn("lg:col-span-2 flex flex-col space-y-6 px-4 lg:px-0", !isEven && "lg:order-first")}>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold uppercase tracking-wider text-sm">
            <Hash className="w-4 h-4" />
            <span>關鍵字</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {study.keyword}
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition-colors group-hover:bg-white group-hover:border-indigo-100">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-medium">行業</p>
              <p className="text-gray-900 font-semibold">{study.industry}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition-colors group-hover:bg-white group-hover:border-indigo-100">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">月搜尋量</p>
                <p className="text-gray-900 font-semibold">{study.volume.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 transition-colors group-hover:bg-white group-hover:border-indigo-100">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-medium">優化用時</p>
                <p className="text-gray-900 font-semibold">{study.duration}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <div className="text-center flex-1 border-r border-indigo-400/30">
              <p className="text-xs text-indigo-100 uppercase font-medium mb-1">優化前排名</p>
              <p className="text-2xl font-bold">{study.beforeRank}</p>
            </div>
            <div className="px-4">
              <TrendingUp className="w-6 h-6 text-indigo-200" />
            </div>
            <div className="text-center flex-1">
              <p className="text-xs text-indigo-100 uppercase font-medium mb-1">優化後排名</p>
              <p className="text-4xl font-black">{study.afterRank}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};

// --- Main Component ---

export const SEOShowcase: React.FC = () => {
  return <section className="relative w-full bg-white overflow-hidden py-24 sm:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold tracking-wide uppercase mb-4">
            SEO 實戰案例
          </motion.div>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
            我用 <span className="text-indigo-600">SEO懶人包</span> <br className="hidden sm:block" />
            做到以下效果
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            透過精準的技術分析與內容策略，我們幫助不同行業的客戶在極短時間內奪取 Google 搜尋結果首頁。
          </motion.p>
        </div>

        <div className="space-y-16">
          {CASE_STUDIES.map((study, index) => <CaseStudyRow key={study.id} study={study} index={index} />)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mt-24 p-8 md:p-12 rounded-3xl bg-gray-900 text-center relative overflow-hidden" style={{
        display: "none"
      }}>
          {/* CTA Section */}
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              準備好提升你的網站排名了嗎？
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto">
              立即連繫我們的 SEO 專家，獲取免費的網站健檢與排名提升方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button type="button" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
                免費諮詢服務
              </button>
              <button type="button" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all">
                瞭解懶人包詳情
              </button>
            </div>
          </div>
          
          {/* Background decoration for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </motion.div>
      </div>
    </section>;
};
