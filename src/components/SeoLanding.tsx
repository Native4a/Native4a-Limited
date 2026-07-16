'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { Square } from "lucide-react";
import { cn } from "@/lib/utils";
interface SectionItem {
  id: string;
  type: "content-block" | "grid-images" | "title-only";
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  images?: Array<{
    src: string;
    caption?: string;
  }>;
  reverse?: boolean;
  bulletPoints?: string[];
  extraContent?: React.ReactNode;
}
const SEO_SECTIONS: SectionItem[] = [{
  id: "exposure",
  type: "grid-images",
  title: "網站大量免費曝光機會",
  description: "很多人都說SEO是趨勢，到底做好SEO後是怎樣的狀態，在於客戶而言又有何直接效益？",
  images: [{
    src: "https://images.ctfassets.net/rpza41pe9ev5/3D67OnPP8hAZzaQ7C7ceN3/37c00afea30ecadd83a843e149133ece/1.png?w=1924&h=1069&q=50&fm=webp",
    caption: "以上案例只抽取其中15組關鍵字作例子。SEM廣告平均支出是HK$11.09*3757次點擊=節省HK$41,665/月"
  }, {
    src: "https://images.ctfassets.net/rpza41pe9ev5/1BrrlX7WlndmFxenowzmgz/90ef574973787aa374ef19d1a9476b4d/2.png",
    caption: "換句話說，當你的SEO完善時，你的網站獲客量將會達到SEM廣告去不到的境界。"
  }]
}, {
  id: "rankings",
  type: "content-block",
  title: "大量關鍵字獲得排名提升",
  description: "隨著SEO公司的努力，搜索引擎會更加信任你的網站，從而提高你的排名。由於SEO過程是整個網站優化，變相不單止是指定做上去的關鍵字，更會有很多意外驚喜的「流量密碼」。",
  image: "https://images.ctfassets.net/rpza41pe9ev5/74fmFO8GPdJCsbKVdlo4IS/da2c632617e8392b54c57c9829ba96ac/3.png?w=1924&h=1069&q=50&fm=webp",
  reverse: true
}, {
  id: "reputation",
  type: "content-block",
  title: "品牌信譽&知名度提升",
  description: "Think With Google 的一項研究發現，消費者在購買產品之前平均會進行多達32次的搜索。消費者們一旦進入你的關鍵字領域，他們搜尋多個關鍵字都會見到你的網站，且排名足夠高，便能提升品牌形象。",
  image: "https://images.ctfassets.net/rpza41pe9ev5/NPHo6ZhhBRD71WbxC1hzG/879981a4f05623cade01a96854c37c6b/4.png?w=1924&h=1069&q=50&fm=webp",
  extraContent: <div className="mt-4 text-sm text-gray-500 space-y-2">
    <p><span>(https://www.thinkwithgoogle.com/intl/zh-tw/consumer-insights/consumer-trends/shopping-season-insights-tw/amp/)</span></p>
    <p><span>以上就是SEO的理想狀態，</span></p>
    <p><span className="font-semibold text-gray-800">1.節省大量SEM支出 2.高排名 3.高引流 4.高品牌價值 5.而且不斷擴張</span></p>
    <p><span>這就是一家稱職的SEO公司會為你帶來的。</span></p>
    <p><span>native作為一家香港主流的SEO公司，營運經營已近7年，在SEO方面累積了大量經驗和實驗成果。</span></p>
    <p><span>曾優化過不少難度極高的領域，包括：補習、醫療用品、搬屋公司等高競爭行業。想了解更多可以到我們的IG睇詳細案例</span></p>
  </div>
}, {
  id: "operation-title",
  type: "title-only",
  title: "我們實際如何為客戶操作SEO呢？"
}, {
  id: "research",
  type: "content-block",
  title: "關鍵字研究",
  description: "在開始SEO之前，我們會從客戶的網站、行業、對手等數據研究關鍵字。",
  bulletPoints: ["1a.尋找關鍵字數據", "1b.分析你的競爭對手", "1c.外連分析（分析Link Profile)"],
  image: "https://images.ctfassets.net/rpza41pe9ev5/34haav5tXB9rZcb41j2roU/671f4cadf47735c91b767cc7f634f97d/5.png?w=1924&h=1069&q=50&fm=webp",
  reverse: true
}, {
  id: "on-page",
  type: "content-block",
  title: "網站On-page優化",
  description: "我們會先在技術層面優化你的網站，以提高其在搜索結果中的排名。這可能包括改進你的網站速度，使其對手機Friendly，並優化你的內容以包含關鍵字。",
  bulletPoints: ["2a.網站速度提升", "2b.手機版面兼容", "2c.關鍵字密度檢查"],
  image: "https://images.ctfassets.net/rpza41pe9ev5/7E06y6exVgoM7iUVBpOzgr/68ea1f134e09d7047acb9fe1ca66287d/6.png?w=1924&h=1069&q=50&fm=webp"
}, {
  id: "content-opt",
  type: "content-block",
  title: "內容優化",
  description: "我們會提供合適的SEO內容創作指南，配合關鍵字方向而優化內容。這些內容是放在你網站的，所以SEO公司與你在這個環節都要參與其中，進行磋商。",
  bulletPoints: ["3a.SEO內容指引，甚至創作基本草稿", "3b.SEO文章結構指引", "3c.h1-h6標題設計"],
  image: "https://images.ctfassets.net/rpza41pe9ev5/34haav5tXB9rZcb41j2roU/671f4cadf47735c91b767cc7f634f97d/5.png?w=1924&h=1069&q=50&fm=webp",
  reverse: true
}, {
  id: "backlinks",
  type: "content-block",
  title: "連結建立Backlinks Building",
  description: "Backlinks是SEO過程中重要的一環，即使你的內容完美無瑕，缺少Backlinks的支援，是不會在熱門關鍵字獲得好排名的。",
  image: "https://images.ctfassets.net/rpza41pe9ev5/4SL1JVHvvOKSNvawuIrQ5U/9f5e78421ed786bdb9d56d2d36798402/8.png?w=1924&h=1069&q=50&fm=webp",
  extraContent: <div className="mt-8 space-y-4">
    <img src="https://images.ctfassets.net/rpza41pe9ev5/4OrNLcudhXkthxkyI4CzsM/46e2970665bf12dd3610d8c64a02a0ca/8.png?w=1640&h=924&q=50&fm=webp" alt="SEO Performance" className="w-full h-auto rounded-lg shadow-sm" />
    <div className="text-sm text-gray-600 space-y-1">
      <p><span>native作為一家香港主流的SEO公司，營運經營已近7年，在SEO方面累積了大量經驗和實驗成果。</span></p>
      <p><span>曾優化過不少難度極高的領域，包括：補習、醫療用品、搬屋公司等高競爭行業。想了解更多可以到我們的IG睇詳細案例</span></p>
      <p className="text-xs text-gray-400 mt-2 italic"><span>（案例各有不同，上文數據只供參考，並非保證。）</span></p>
    </div>
  </div>
}];
export const SeoLanding: React.FC = () => {
  return <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
    <header className="pt-20 pb-10 border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span>委托SEO公司到底能買到什麼？</span>
          </h1>
          <div className="w-full h-1 bg-amber-400 mb-8" />
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl leading-relaxed">
            <span>香港主流SEO公司，獨家研發繁中外連系統，有效幫助中文網站提升排名</span>
          </p>
        </motion.div>
      </div>
    </header>
    <main className="container mx-auto px-6 max-w-6xl pb-24">
      {SEO_SECTIONS.map(section => {
        if (section.type === "title-only") {
          return <motion.section key={section.id} initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="pt-24 pb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold"><span>{section.title}</span></h2>
          </motion.section>;
        }
        if (section.type === "grid-images") {
          return <section key={section.id} className="pt-20">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber-500"><Square fill="currentColor" size={24} /></span>
                <h2 className="text-2xl md:text-3xl font-bold"><span>{section.title}</span></h2>
              </div>
              <p className="text-lg text-gray-600 max-w-4xl"><span>{section.description}</span></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.images?.map((img, idx) => <motion.div key={`${section.id}-img-${idx}`} initial={{
                opacity: 0,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: idx * 0.1
              }} className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                  <img src={img.src} alt={section.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                {img.caption && <p className="text-sm text-gray-500 leading-relaxed px-2"><span>{img.caption}</span></p>}
              </motion.div>)}
            </div>
          </section>;
        }
        return <section key={section.id} className="pt-24">
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-start", section.reverse && "md:flex-row-reverse")}>
            <div className={cn("space-y-6", section.reverse ? "md:order-last" : "md:order-first")}>
              <div className="flex items-center gap-3">
                <span className="text-amber-500"><Square fill="currentColor" size={24} /></span>
                <h2 className="text-2xl md:text-3xl font-bold"><span>{section.title}</span></h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed"><span>{section.description}</span></p>
              {section.bulletPoints && <ul className="space-y-2 mt-4">
                {section.bulletPoints.map((point, pIdx) => <li key={pIdx} className="flex items-start gap-2 text-gray-700 font-medium">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>{point}</span>
                </li>)}
              </ul>}
              {section.extraContent}
            </div>
            <motion.div initial={{
              opacity: 0,
              x: section.reverse ? -30 : 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8
            }} className={cn("w-full", section.reverse ? "md:order-first" : "md:order-last")}>
              <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
                <img src={section.image} alt={section.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </section>;
      })}
    </main>
  </div>;
};