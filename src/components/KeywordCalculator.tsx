'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Play, Save, Trash2, Info, ExternalLink, Calculator, TrendingUp, BarChart3, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
interface KeywordData {
  id: string;
  keyword: string;
  volume: number;
  threeMonthChange: number;
  yearlyChange: number;
  competitionScore: number;
  score: number;
  timestamp: number;
}
export const KeywordCalculator: React.FC = () => {
  // Input States
  const [keyword, setKeyword] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [threeMonthChange, setThreeMonthChange] = useState<string>('');
  const [yearlyChange, setYearlyChange] = useState<string>('');
  const [competitionScore, setCompetitionScore] = useState<string>('');

  // Storage State
  const [savedKeywords, setSavedKeywords] = useState<KeywordData[]>([]);

  // Calculate Fat Boy Index using discrete scoring rules
  const fatBoyIndex = useMemo(() => {
    const v = parseFloat(volume) || 0;
    const tmc = parseFloat(threeMonthChange) || 0;
    const yc = parseFloat(yearlyChange) || 0;
    const cs = parseFloat(competitionScore) || 0;
    if (!v && !tmc && !yc && !cs) return 0;

    // 1. Search Volume Score (volCalc)
    let volCalc = 0;
    if (v >= 1000) {
      volCalc = 4;
    } else if (v >= 320) {
      volCalc = 3;
    } else if (v >= 200) {
      volCalc = 2;
    } else if (v >= 100) {
      volCalc = 1;
    } else {
      volCalc = 0;
    }

    // 2. Three Months Change Score (quarCalc)
    let quarCalc = 0;
    if (tmc >= 20) {
      quarCalc = 2;
    } else if (tmc >= 0) {
      quarCalc = 1;
    } else {
      quarCalc = 0;
    }

    // 3. Yearly Change Score (yearCalc)
    let yearCalc = 0;
    if (yc >= 20) {
      yearCalc = 3;
    } else if (yc >= 1) {
      yearCalc = 1;
    } else {
      yearCalc = 0;
    }

    // 4. Competition Score (compCalc)
    let compCalc = 0;
    if (cs <= 79) {
      compCalc = 1;
    } else {
      compCalc = 0;
    }

    // Total Score
    const total = volCalc + quarCalc + yearCalc + compCalc;
    return total;
  }, [volume, threeMonthChange, yearlyChange, competitionScore]);
  const scoreColor = useMemo(() => {
    if (fatBoyIndex >= 7) return 'text-[#0ca959]';
    if (fatBoyIndex >= 5) return 'text-[#faab00]';
    return 'text-[#eb4131]';
  }, [fatBoyIndex]);
  const scoreAdvice = useMemo(() => {
    if (fatBoyIndex >= 7) return '7-10分 - 必做！';
    if (fatBoyIndex >= 5) return '5-6分 - 自己決定';
    return '0-4分 - 果斷放棄';
  }, [fatBoyIndex]);
  const handleSave = () => {
    if (!keyword) return;
    const newData: KeywordData = {
      id: crypto.randomUUID(),
      keyword,
      volume: parseFloat(volume) || 0,
      threeMonthChange: parseFloat(threeMonthChange) || 0,
      yearlyChange: parseFloat(yearlyChange) || 0,
      competitionScore: parseFloat(competitionScore) || 0,
      score: fatBoyIndex,
      timestamp: Date.now()
    };
    setSavedKeywords(prev => {
      const updated = [newData, ...prev];
      return updated.slice(0, 5); // Keep max 5 as per rules
    });

    // Reset inputs optionally or keep them? Rules say saved data goes to storage area below.
  };
  const handleClear = () => {
    setKeyword('');
    setVolume('');
    setThreeMonthChange('');
    setYearlyChange('');
    setCompetitionScore('');
  };
  return <main className="bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
    {/* Hero Section */}
    <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-16 lg:pt-36 flex flex-col items-center text-center">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span>肥仔關鍵字計算機</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg md:text-xl">
            <span>(Beta)</span>
          </p>
        </div>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 max-w-2xl mx-auto px-4">
          <span>SEO & SEM 適用，幫你搵出超潛力黃金關鍵字的工具</span>
        </h2>

        <div className="pt-8" style={{
          paddingTop: "32px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-200 active:scale-95" aria-label="View Tutorial Video">
            <Play className="w-5 h-5 fill-current" />
            <span className="font-semibold text-lg">查看計算機教學影片</span>
          </button>
        </div>
      </motion.div>
    </section>

    {/* Calculator Section */}
    <section className="container mx-auto px-4 pb-12 lg:pb-24 max-w-7xl">
      <motion.div initial={{
        opacity: 0,
        scale: 0.98
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.2,
        duration: 0.5
      }} className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200 overflow-hidden border border-gray-100">
        {/* Inputs Column */}
        <div className="lg:col-span-4 p-8 md:p-12 lg:p-14 bg-gray-50/50">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="keyword" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Keyword：
                </label>
                <input id="keyword" type="text" value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="請輸入你要查詢的Keyword" className="w-full bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all placeholder:text-gray-400" />
              </div>

              <div className="space-y-2">
                <label htmlFor="volume" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  搜索量 (Volume)：
                </label>
                <input id="volume" type="number" value={volume} onChange={e => setVolume(e.target.value)} placeholder="0" className="w-full bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="threeMonthChange" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  三個月變化 (%)：
                </label>
                <input id="threeMonthChange" type="number" value={threeMonthChange} onChange={e => setThreeMonthChange(e.target.value)} placeholder="0" className="w-full bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="yearlyChange" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  年度變化 (%)：
                </label>
                <input id="yearlyChange" type="number" value={yearlyChange} onChange={e => setYearlyChange(e.target.value)} placeholder="0" className="w-full bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="competition" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  競爭分數 (Competition)：
                </label>
                <input id="competition" type="number" min="0" max="100" value={competitionScore} onChange={e => setCompetitionScore(e.target.value)} placeholder="0" className="w-full bg-white border-2 border-gray-200 focus:border-blue-500 rounded-xl px-4 py-3 text-gray-800 outline-none transition-all" />
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleClear} className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold hover:bg-gray-100 transition-colors">
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-14 bg-white flex flex-col">
          <div className="flex-1 flex flex-col justify-between space-y-12">

            {/* Index Score Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-l-4 border-gray-100 pl-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">肥仔指數</h3>
                <div className="space-y-1 font-semibold text-base">
                  <p className="text-[#0ca959]">7-10分 - 必做！</p>
                  <p className="text-[#faab00]">5-6分 - 自己決定</p>
                  <p className="text-[#eb4131]">0-4分 - 果斷放棄</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="relative w-full md:w-80 h-40 bg-[#f8f9fa] border-2 border-gray-100 rounded-[2rem] flex items-center justify-end px-10 overflow-hidden" style={{
                  backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}>
                  <div className="absolute top-4 left-6">
                    <Calculator className="w-8 h-8 text-gray-300" />
                  </div>
                  <motion.div key={fatBoyIndex} initial={{
                    scale: 0.8,
                    opacity: 0
                  }} animate={{
                    scale: 1,
                    opacity: 1
                  }} className={cn("text-8xl font-black tracking-tighter", scoreColor)}>
                    {fatBoyIndex}
                  </motion.div>
                  <span className={cn("text-3xl font-bold ml-2 mt-auto pb-4", scoreColor)}>分</span>
                </div>
                <motion.p key={scoreAdvice} initial={{
                  opacity: 0,
                  x: 10
                }} animate={{
                  opacity: 1,
                  x: 0
                }} className={cn("font-bold text-lg", scoreColor)}>
                  {scoreAdvice}
                </motion.p>
              </div>
            </div>

            {/* Individual Metrics Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[140px] transition-all hover:bg-gray-100/80">
                <div className="flex flex-col gap-1">
                  <BarChart3 className="w-5 h-5 text-gray-400 mb-1" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Search<br />Volume</span>
                </div>
                <span className="text-3xl font-black text-gray-900 truncate">{volume || 0}</span>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[140px] transition-all hover:bg-gray-100/80">
                <div className="flex flex-col gap-1">
                  <TrendingUp className="w-5 h-5 text-gray-400 mb-1" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">3 Months<br />Change</span>
                </div>
                <span className={cn("text-3xl font-black truncate", (parseFloat(threeMonthChange) || 0) > 0 ? "text-green-600" : (parseFloat(threeMonthChange) || 0) < 0 ? "text-red-600" : "text-gray-900")}>
                  {threeMonthChange || 0}%
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[140px] transition-all hover:bg-gray-100/80">
                <div className="flex flex-col gap-1">
                  <TrendingUp className="w-5 h-5 text-gray-400 mb-1" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Yearly<br />Changes</span>
                </div>
                <span className={cn("text-3xl font-black truncate", (parseFloat(yearlyChange) || 0) > 0 ? "text-green-600" : (parseFloat(yearlyChange) || 0) < 0 ? "text-red-600" : "text-gray-900")}>
                  {yearlyChange || 0}%
                </span>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-5 flex flex-col justify-between min-h-[140px] transition-all hover:bg-gray-100/80">
                <div className="flex flex-col gap-1">
                  <Users className="w-5 h-5 text-gray-400 mb-1" />
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Competition<br />Score</span>
                </div>
                <span className="text-3xl font-black text-gray-900 truncate">{competitionScore || 0}</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <button onClick={handleSave} disabled={!keyword} className="w-full bg-[#3f83f8] hover:bg-[#3371db] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-lg font-bold tracking-[0.1em] py-6 rounded-[1.5rem] transition-all duration-300 shadow-xl shadow-blue-200 hover:shadow-blue-300 flex items-center justify-center gap-3 active:scale-[0.98]">
                <Save className="w-6 h-6" />
                SAVE KEYWORD
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Saved Area Section */}
      {savedKeywords.length > 0 && <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mt-12 space-y-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Save className="w-6 h-6 text-blue-500" />
            Keyword 儲存區
          </h3>
          <button onClick={() => setSavedKeywords([])} className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm font-bold transition-colors">
            <Trash2 className="w-4 h-4" />
            CLEAR ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {savedKeywords.map(item => <motion.div key={item.id} layout initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.9
            }} className="bg-white border border-gray-100 rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow relative group">
              <div className="absolute top-4 right-4 bg-gray-50 p-2 rounded-xl group-hover:bg-red-50 transition-colors">
                <button onClick={() => setSavedKeywords(prev => prev.filter(k => k.id !== item.id))} className="text-gray-400 hover:text-red-500">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Target Keyword</span>
                  <h4 className="text-xl font-bold text-gray-900 break-all">{item.keyword}</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Score</p>
                    <p className={cn("text-2xl font-black", item.score >= 7 ? "text-green-600" : item.score >= 5 ? "text-yellow-600" : "text-red-600")}>{item.score}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Volume</p>
                    <p className="text-xl font-bold text-gray-900">{item.volume}</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 font-medium">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                  <div className="flex gap-2">
                    <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold", item.threeMonthChange >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
                      3M: {item.threeMonthChange}%
                    </span>
                    <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold", item.yearlyChange >= 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700")}>
                      1Y: {item.yearlyChange}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>)}
          </AnimatePresence>
        </div>
      </motion.div>}

      {/* Info & Footer Area */}
      <div className="mt-16 pt-12 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between gap-12">
        <div className="md:max-w-2xl">
          <div className="flex items-center gap-2 mb-4 text-gray-900">
            <Info className="w-5 h-5" />
            <h4 className="text-lg font-bold">使用規則與說明：</h4>
          </div>
          <ol className="list-decimal list-inside text-gray-500 text-sm space-y-3 leading-relaxed font-medium">
            <li>
              已儲存的資料會暫存到計算機下方的 <span className="text-blue-600 font-bold">Keyword儲存區</span>。
            </li>
            <li>
              目前只提供 <span className="text-gray-900 font-bold">電腦版</span> 優化，<span className="text-gray-900 font-bold">平板</span> 和 <span className="text-gray-900 font-bold">手機版</span> 仍處於測試階段。
            </li>
            <li>
              儲存區最多可以儲存 <span className="text-gray-900 font-bold">5 筆資料</span>。若超過限制，新資料將 <span className="text-red-500 font-bold">自動覆蓋</span> 最舊的記錄。
            </li>
            <li>
              儲存的資料僅供單次瀏覽暫存，重新整理網頁後資料將 <span className="text-gray-900 font-bold">被重置</span>。
            </li>
            <li>
              若需長期保存研究數據，請務必自行 <span className="text-gray-900 font-bold">截圖或記錄</span>。
            </li>
          </ol>
          <div className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            BuildVersion: v4.1.260716-1503 by MagicPath-Engine
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end justify-start gap-6">
          <a href="#" onClick={e => e.preventDefault()} className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-emerald-500 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-xl shadow-emerald-100 hover:shadow-emerald-200 hover:-translate-y-1 active:translate-y-0" role="button">
            <span className="flex items-center gap-2 text-xl">
              下載永久使用版
              <ExternalLink className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  </main>;
};
