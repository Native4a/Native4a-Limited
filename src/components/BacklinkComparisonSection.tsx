'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ShieldCheck, ShieldAlert, Globe, Link2, FileText, Users } from 'lucide-react';
interface ComparisonPoint {
  id: number;
  text: string;
}
const englishPoints: ComparisonPoint[] = [{
  id: 1,
  text: "外部連結 Spam Score 高企。DA，DR 權重低下"
}, {
  id: 2,
  text: "每條外部連結文章的內容與客戶的行業和關鍵字並不相關"
}, {
  id: 3,
  text: "每條外部連結的URL和關鍵字數量有限制"
}, {
  id: 4,
  text: "每條外部連結只有一個 Anchor Text 錨點"
}, {
  id: 5,
  text: "同一篇網站連結文章內放了大量其他客戶網站的關鍵字和連結"
}];
const chinesePoints: ComparisonPoint[] = [{
  id: 1,
  text: "外部連結 Spam FREE, DA，DR 權重分別達 50+ 或 30+"
}, {
  id: 2,
  text: "每篇反向連結文章內容都是與客戶的行業和關鍵字相關的"
}, {
  id: 3,
  text: "沒有限制每條外部連結的 URL 和關鍵字數量"
}, {
  id: 4,
  text: "每一篇文章只屬於一個客戶，內裡只有該客戶的關鍵字和連結"
}];
const ComparisonCard = ({
  title,
  points,
  colorClass,
  titleColorClass,
  icon: Icon,
  delay = 0
}: {
  title: string;
  points: ComparisonPoint[];
  colorClass: string;
  titleColorClass: string;
  icon: React.ElementType;
  delay?: number;
}) => <motion.div initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.5,
  delay
}} className="flex flex-col w-full max-w-md lg:max-w-none">
    <div className={cn("flex justify-center rounded-xl items-center text-white p-6 shadow-lg mb-6", titleColorClass)}>
      <Icon className="w-6 h-6 mr-3" />
      <h3 className="text-xl font-bold text-center"><span>{title}</span></h3>
    </div>
    <div className="space-y-4">
      {points.map((point, index) => <motion.div key={point.id} initial={{
      opacity: 0,
      x: delay === 0 ? -20 : 20
    }} whileInView={{
      opacity: 1,
      x: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.3,
      delay: delay + index * 0.1
    }} className="flex justify-center rounded-2xl p-6 items-center backdrop-blur-md bg-white/80 border border-white/50 text-center shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[100px]">
        <p className="text-slate-700 font-medium leading-relaxed"><span>{point.text}</span></p>
      </motion.div>)}
    </div>
  </motion.div>;
export const BacklinkComparisonSection: React.FC = () => {
  return <section className="relative z-0 w-full bg-slate-50 overflow-hidden py-16 lg:py-24 min-h-[800px] mt-0 pt-0">
    <div className="absolute inset-0" style={{
      backgroundImage: `url('https://nativeaaaa.com.hk/static/workingArea-e3f4231ba7445e35c2b7f439d6c47606.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      marginLeft: "0px",
      marginBottom: "0px",
      marginRight: "0px",
      marginTop: "0px",
      display: "block",
      translate: "0px -40px"
    }} />
    <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-black text-white text-center leading-tight tracking-tight">
            <span>買反向連結 backlink 前，<br />讓我們先認清楚事實 . . .</span>
          </h2>
        </motion.div>
        <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <h2 className="text-2xl lg:text-3xl font-black text-white text-center leading-tight tracking-tight italic">
            <span>&ldquo;買外部連結 - Native4a Backlink HK 提供的 中文 反向連結 就是不一樣&rdquo;</span>
          </h2>
        </motion.div>
      </div>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 xl:gap-8">
        <div className="flex-1 w-full">
          <ComparisonCard title="英文反向連結" points={englishPoints} colorClass="bg-white/80" titleColorClass="bg-[#3A7DFF]" icon={ShieldAlert} delay={0.1} />
        </div>
        <div className="flex lg:flex-col items-center justify-center self-stretch py-8 lg:py-0">
          <motion.div initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} className="bg-[#70a665] rounded-2xl px-8 py-6 lg:py-12 shadow-2xl border-4 border-white flex items-center justify-center">
            <span className="text-white text-5xl lg:text-6xl font-black tracking-widest drop-shadow-lg">VS</span>
          </motion.div>
        </div>
        <div className="flex-1 w-full">
          <ComparisonCard title="中文反向連結" points={chinesePoints} colorClass="bg-white/80" titleColorClass="bg-[#FAAB00]" icon={ShieldCheck} delay={0.2} />
        </div>
      </div>
      <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }} className="mt-20 text-center">
        <p className="text-white/60 text-sm tracking-widest uppercase font-bold">
          <span style={{
            display: "none"
          }}>Powered by Native4a Backlink HK</span>
        </p>
      </motion.div>
    </div>
  </section>;
};
