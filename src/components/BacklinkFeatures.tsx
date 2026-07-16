'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
}
const features: FeatureItem[] = [{
  id: '1',
  number: '01',
  title: '100個頂層反向連結至您的網站',
  description: '頂層 (即第一層)反向連結是直接建立到您網站的 Backlink。Tier 1 Backlink 一級反向鏈接被認為是您網站最權威的站外連結，因為它們為 SEO 傳遞了最高權重的外部連結。'
}, {
  id: '2',
  number: '02',
  title: '繁中PBN/高流量Guest Post',
  description: '以PBN/ 高流量Guest Post，因應網站排名階段製作不同類型Backlinks，協助排名提升。'
}, {
  id: '3',
  number: '03',
  title: '全繁體中文 WordPress博客文章',
  description: '所有 反向連結 皆來自以公認為 SEO Friendly 的 WordPress 編寫的繁體中文博客文章。'
}, {
  id: '4',
  number: '04',
  title: '客戶行業相關內容文章',
  description: '所有 反向連結 的文章內容都是為不同客戶而度身訂做。 確保每篇文章內容都是與客戶的行業和關鍵字相關的 (Niche Relevant or contextual backlinks)。'
}, {
  id: '5',
  number: '05',
  title: '可做多個關鍵字和 反向連結',
  description: '每篇 反向連結 的繁體中文博客文章都是為不同客戶度身訂做。可按不同客戶的需求而建立多個不同的關鍵字和 外部連結。'
}, {
  id: '6',
  number: '06',
  title: '每篇文章及連結只屬於一個客戶（獨家專屬）',
  description: '為確保每篇中文博客文章內的外部連結的權威性，我們每篇文章內的所有 Backlinks 只專屬一個客戶，不會出現一篇文章放了大量其他客戶連結的情況。'
}, {
  id: '7',
  number: '07',
  title: '自家網站，不會消失，長期有效',
  description: '在淡寶， Fiverr 或其他地方買的廩價 backlinks，可以在一夜間消失。我們的 反向連結 網站全是獨立經營，百份百自主，不會消失，長期有效。'
}, {
  id: '8',
  number: '08',
  title: '金字塔式 反向連結 結構',
  description: '我們的 反向連結 是金字塔式的鏈接結構，有多層與其相關聯的多個層級 Backlinks，以形成金字塔，也稱為 Link Juice。'
}, {
  id: '9',
  number: '09',
  title: '反向連結權重達 DA50+ 或 DR 30+',
  description: 'DA 和 DR 分別是 MOZ 和 Ahrefs 自行創建的網站權重指標。 雖則這等指標並不是 Google排名的準則，但也代表了網站的權重。我們的 反向連結 都在DA 50+ 或 DR 30＋ 的權重。'
}, {
  id: '10',
  number: '10',
  title: '自選 反向連結 目標頁面',
  description: '因為我們的 反向連結 網站全是獨立經營，百份百自主，所以可以因應客戶需求而建立客戶所要求的多個目標頁面。沒有掣肘，全客制化。'
}, {
  id: '11',
  number: '11',
  title: '90% DoFollow, 10% NoFollow',
  description: '我們知道 nofollow 反向連結 是沒有 SEO 價值的。但若所有 Backlinks 都是 Dofollow，在Google 眼中會覚得有做馬之嫌。所以我們的 反向連結 結構是 90% DoFollow, 10% NoFollow。'
}, {
  id: '12',
  number: '12',
  title: '每篇文章及 反向連結 的完整報告',
  description: '每篇文章及 反向連結 的完整報告 所有 反向連結 項目完成後，我們會提供詳盡的完整報告。詳列每條 反向連結 的網址。整個 backlink Profile 百份百透明，杜絕偷工減料。'
}];
const FeatureCard = ({
  feature,
  index
}: {
  feature: FeatureItem;
  index: number;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className={cn('flex flex-col md:flex-row items-start md:items-center', 'rounded-2xl p-6 md:p-8', 'bg-white/70 backdrop-blur-3xl', 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]', 'border border-white/40 transition-all duration-300', 'min-h-[180px] lg:min-h-[220px]')}>
    <div className="text-5xl lg:text-6xl text-[#608A51] font-bold mb-4 md:mb-0 md:pr-6 shrink-0 tabular-nums">{feature.number}</div>
    <div className="flex-1 space-y-3">
      <h3 className="text-lg lg:text-xl xl:text-2xl font-bold leading-tight text-gray-900 tracking-tight">{feature.title}</h3>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-medium">{feature.description}</p>
    </div>
  </motion.div>;
};
export const BacklinkFeatures: React.FC = () => {
  return <section className="relative overflow-hidden bg-slate-50/50 py-24 px-6 md:px-12 lg:px-24">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#70a566] rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-blue-200 rounded-full blur-[100px]" />
    </div>
    <div className="container mx-auto max-w-7xl relative z-10">
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">Native4a 提供的 香港 中文 反向連結 有12個不一樣</motion.h2>
        <motion.div initial={{
          scaleX: 0
        }} whileInView={{
          scaleX: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          ease: 'circOut'
        }} className="border-b-4 border-[#70a566] w-24 md:w-32 mx-auto mb-8" />
        <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }} className="text-lg md:text-2xl font-light text-gray-500 tracking-wide">並非所有反向連結都是生而平等的</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">{features.map((feature, index) => <FeatureCard key={feature.id} feature={feature} index={index} />)}</div>
    </div>
  </section>;
};
