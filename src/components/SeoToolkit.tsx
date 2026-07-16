'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Download, CheckCircle2, Target, PenTool, Link2, Calculator, TrendingUp, Sparkles, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
interface AccordionItemData {
  id: string;
  question: string;
  answer: React.ReactNode;
}

// Sub-components
const SeoHero = () => {
  return <section className="relative overflow-hidden bg-gray-900 px-6 py-16 text-center text-white sm:py-24 lg:px-8 rounded-3xl mb-12">
    {/* Decorative background elements */}
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20">
      <div className="h-96 w-96 bg-emerald-500 rounded-full" />
    </div>
    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 blur-3xl opacity-20">
      <div className="h-96 w-96 bg-blue-500 rounded-full" />
    </div>

    <div className="relative mx-auto max-w-2xl">
      <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide uppercase border border-emerald-500/20 mb-6">
        8年SEO經驗結晶，7日提升關鍵字排名的方法
      </motion.span>

      <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
        SEO懶人包
      </motion.h1>

      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex justify-center">
        <a href="#" onClick={e => e.preventDefault()} className="group relative flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <Download className="h-5 w-5" />
          <span>立即下載SEO懶人包</span>
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:animate-ping pointer-events-none" />
        </a>
      </motion.div>
    </div>
  </section>;
};
const AccordionItem = ({
  item,
  isOpen,
  onClick
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return <div className="border-b border-gray-200 last:border-0">
    <button onClick={onClick} className={cn("flex w-full items-center justify-between py-6 px-4 text-left transition-colors duration-200 hover:bg-gray-50 rounded-xl", isOpen ? "bg-gray-50" : "bg-transparent")}>
      <span className={cn("text-lg font-semibold tracking-tight transition-colors duration-200", isOpen ? "text-emerald-600" : "text-gray-900")}>
        {item.question}
      </span>
      <ChevronDown className={cn("h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out", isOpen ? "rotate-180 text-emerald-600" : "rotate-0")} />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && <motion.div initial={{
        height: 0,
        opacity: 0
      }} animate={{
        height: "auto",
        opacity: 1
      }} exit={{
        height: 0,
        opacity: 0
      }} transition={{
        duration: 0.3,
        ease: "easeInOut"
      }} className="overflow-hidden">
        <div className="pb-8 px-6 text-gray-600 leading-relaxed text-base">
          {item.answer}
        </div>
      </motion.div>}
    </AnimatePresence>
  </div>;
};

// Main Component
export const SeoToolkit = () => {
  const [openId, setOpenId] = React.useState<string | null>("q1");
  const accordionData: AccordionItemData[] = [{
    id: "q1",
    question: "SEO懶人包適合新手嗎？",
    answer: <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <p>SEO懶人包是一套工具，適合任何想提升排名的人，當然包括全新手。我們將複雜的技術術語簡化為可執行的步驟。</p>
    </div>
  }, {
    id: "q2",
    question: "我具體要做什麼？",
    answer: <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-blue-100 rounded-lg text-blue-600 shrink-0">
        <Target className="h-5 w-5" />
      </div>
      <p>按照SEO懶人包步驟表，每日大約1-2小時管理你的網站，將越來越多的關鍵字做上首頁，甚至複製至多個行業。</p>
    </div>
  }, {
    id: "q3",
    question: "如何快速提升網站排名？",
    answer: <div className="space-y-6">
      <p className="font-medium text-gray-900">解決以下3個問題，排名立即原地上升：</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 p-2 bg-purple-100 rounded-lg text-purple-600 w-fit">
            <Calculator className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">關鍵字篩選</h4>
          <p className="text-sm">先用Google ads選擇大量相關關鍵字，再放入肥仔計算機篩選高回報關鍵字。</p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 p-2 bg-orange-100 rounded-lg text-orange-600 w-fit">
            <PenTool className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">內容創作</h4>
          <p className="text-sm">用病毒式標題庫搵岩用標題，再用SEO內容結構template，直接套用。</p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-3 p-2 bg-sky-100 rounded-lg text-sky-600 w-fit">
            <Link2 className="h-5 w-5" />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Backlinks</h4>
          <p className="text-sm">高質Backlinks源頭集合中有很多可靠的backlinks來源，任何行業都搵到，白帽黑帽都有。</p>
        </div>
      </div>
    </div>
  }, {
    id: "q4",
    question: "肥壯關鍵字計算器是如何工作的？",
    answer: <div className="space-y-4">
      <p>收集關鍵字的過去表現，套用公式，能幫助計算出低成本+高回報的關鍵字。</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">短尾：瑜伽墊</span>
        <span className="px-3 py-1 bg-emerald-50 rounded-full text-xs font-medium text-emerald-700">肥壯：防滑瑜伽墊</span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">長尾：初學者的加厚防滑瑜伽墊</span>
      </div>
    </div>
  }, {
    id: "q5",
    question: "我可以在短時間內看到效果嗎？",
    answer: <div className="flex gap-4 items-center">
      <div className="p-2 bg-amber-100 rounded-lg text-amber-600 shrink-0">
        <TrendingUp className="h-5 w-5" />
      </div>
      <p>當然可以，我們有許多案例顯示，按照方法操作，幾日內排名就有顯著上升並且趨於穩定。</p>
    </div>
  }, {
    id: "q6",
    question: "這個工具如何幫助我創作高質內容？",
    answer: <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-indigo-100 rounded-lg text-indigo-600 shrink-0">
        <Sparkles className="h-5 w-5" />
      </div>
      <p>SEO內容結構template是實際驗證過的內容模版，是最容易被Google收錄的結構。你只需要將你的內容套用到這些模版中即可。</p>
    </div>
  }, {
    id: "q7",
    question: "SEO懶人包包含什麼樣的反向連結資源？",
    answer: <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-rose-100 rounded-lg text-rose-600 shrink-0">
        <Link2 className="h-5 w-5" />
      </div>
      <p>我們提供多種類型的backlinks網站清單，涵蓋幾乎所有主要行業，助你快速建立權威度。</p>
    </div>
  }, {
    id: "q8",
    question: "這個工具如何持續幫助我獲得新客戶？",
    answer: <div className="flex gap-4 items-start">
      <div className="mt-1 p-2 bg-cyan-100 rounded-lg text-cyan-600 shrink-0">
        <Users className="h-5 w-5" />
      </div>
      <p>SEO是有公式的。SEO懶人包是我們過去8年經驗的精華。將其視為一套系統，你可以將其複製到多個行業，建立多個自動化的流量與收入來源。</p>
    </div>
  }];
  return <div className="bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <SeoHero />

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">常見問題解答</h2>
          <p className="mt-2 text-gray-500">了解更多關於 SEO 懶人包如何助你一臂之力</p>
        </div>

        <div className="space-y-2">
          {accordionData.map(item => <AccordionItem key={item.id} item={item} isOpen={openId === item.id} onClick={() => setOpenId(openId === item.id ? null : item.id)} />)}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400 mb-4">還有其他疑問？歡迎隨時聯繫我們的團隊</p>
          <button onClick={e => e.preventDefault()} className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
            <span>聯繫支援團隊</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>;
};
