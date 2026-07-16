'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- SVGs ---

const InstagramIcon = () => <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <title>Instagram Icon</title>
    <defs>
      <linearGradient id="g1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(31.296,-31.296,31.296,31.296,15.156,48.773)">
        <stop offset="0" stopColor="#fee411" />
        <stop offset=".052" stopColor="#fedb16" />
        <stop offset=".138" stopColor="#fec125" />
        <stop offset=".248" stopColor="#fe983d" />
        <stop offset=".376" stopColor="#fe5f5e" />
        <stop offset=".5" stopColor="#fe2181" />
        <stop offset="1" stopColor="#9000dc" />
      </linearGradient>
    </defs>
    <g>
      <path fillRule="evenodd" fill="url(#g1)" d="m31.9 54c-12.2 0-22-9.8-22-22 0-12.2 9.8-22 22-22 12.2 0 22 9.8 22 22 0 12.2-9.8 22-22 22z" />
      <g>
        <path fill="#ffffff" d="m36.6 19.8h-9.3c-4.2 0-7.6 3.4-7.6 7.5v9.4c0 4.1 3.4 7.5 7.6 7.5h9.3c4.2 0 7.6-3.4 7.6-7.5v-9.4c0-4.1-3.4-7.5-7.6-7.5zm4.8 16.9c0 2.6-2.1 4.8-4.8 4.8h-9.4c-2.6 0-4.8-2.1-4.8-4.8v-9.4c0-2.6 2.2-4.8 4.8-4.8h9.4c2.7 0 4.8 2.2 4.8 4.8z" />
        <path fill="#ffffff" d="m31.9 25.8c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.3 6.2 6.3 3.5 0 6.3-2.9 6.3-6.3 0-3.4-2.8-6.2-6.3-6.2zm0 10c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8z" />
        <path fillRule="evenodd" fill="#ffffff" d="m38.5 26.4c-0.6 0-1.1-0.4-1.1-1 0-0.6 0.5-1.1 1.1-1.1 0.6 0 1 0.5 1 1.1 0-0.6-0.4 1-1 1z" />
      </g>
    </g>
  </svg>;
const WhatsappIcon = () => <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <title>WhatsApp Icon</title>
    <g>
      <path fillRule="evenodd" fill="#10b981" d="m32 54.2c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z" />
      <g>
        <path fill="#ffffff" d="m41.8 22.4c-5.4-5.4-14.1-5.5-19.4-0.1-4.3 4.2-5.3 10.6-2.6 15.9l-1.5 7.1q0 0.2 0.1 0.4c0.2 0.2 0.4 0.3 0.6 0.2l6.9-1.6c6.8 3.4 15 0.6 18.4-6.2 2.6-5.2 1.6-11.6-2.5-15.7zm-2.2 17.2c-3.3 3.2-8.3 4-12.4 2l-0.9-0.5-4.3 1 0.9-4.3-0.5-0.9c-2.1-4.2-1.3-9.2 2-12.5 4.2-4.2 11-4.2 15.2 0q0 0 0 0.1c4.2 4.2 4.2 10.9 0 15.1z" />
        <path fill="#ffffff" d="m39.2 36.5c-0.5 0.8-1.3 1.8-2.4 2-1.8 0.5-4.6 0.1-8-3.2-3.1-2.8-3.9-5.2-3.7-7 0.1-1.1 1-2 1.7-2.7 0.5-0.3 1.1-0.3 1.4 0.2q0.1 0.1 0.2 0.2l1.1 2.5c0.1 0.3 0.1 0.7-0.1 1l-0.6 0.8c-0.2 0.3-0.3 0.7-0.1 1 0.3 0.6 1.1 1.4 1.9 2.2 1 0.8 2 1.6 2.7 1.9 0.3 0.1 0.8 0 1-0.3l0.7-0.6c0.2-0.3 0.6-0.4 1-0.3l2.6 0.8c0.5 0.1 0.8 0.7 0.7 1.2q0 0.2-0.1 0.3z" />
      </g>
    </g>
  </svg>;
const LineIcon = () => <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
    <title>Line Icon</title>
    <g>
      <path fill="#39cd00" fillRule="evenodd" d="m32 54c-12.2 0-22-9.8-22-22 0-12.2 9.8-22 22-22 12.2 0 22 9.8 22 22 0 12.2-9.8 22-22 22z" />
      <g>
        <path fill="#ffffff" d="m45.8 31.5q0 0.1 0 0.2-0.1 0.1-0.1 0.2 0 0.1 0 0.2 0 0.1 0 0.2-0.1 0.4-0.2 0.8-0.1 0.4-0.2 0.8-0.2 0.4-0.3 0.7-0.2 0.4-0.4 0.7c-0.2 0.5-1.4 2.2-1.8 2.6-2 2.5-5.5 5.3-11.1 8.1q-0.2 0-0.4 0-0.2 0-0.4-0.1-0.2-0.1-0.3-0.3 0-0.2 0-0.4l0.3-2.6q0-0.1-0.1-0.3 0-0.1-0.1-0.2-0.1-0.1-0.2-0.2-0.1-0.1-0.3-0.1-0.7-0.1-1.4-0.2-0.7-0.1-1.4-0.3-0.7-0.2-1.3-0.5-0.7-0.2-1.3-0.6c-3.9-1.9-6.5-5.3-6.5-9.3 0-6 6.1-10.9 13.7-10.9 3.8 0 7.3 1.3 9.8 3.2 2.3 1.9 3.8 4.4 3.9 7.2q0.1 0.2 0.1 0.3 0 0.1 0 0.3 0 0.1 0 0.2 0 0.2 0 0.3z" />
        <g>
          <path fill="#00c200" d="m28.2 33.4q0.1 0 0.1 0.1 0 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0 0.2-0.1 0.2-0.2 0.3-0.1 0.1-0.2 0.1-0.1 0.1-0.3 0.1h-2.8q-0.1 0-0.3-0.1-0.1 0-0.2-0.1-0.1-0.1-0.1-0.3-0.1-0.1-0.1-0.2v-5.4q0 0 0-0.1 0-0.1 0.1-0.1 0-0.1 0-0.1 0.1-0.1 0.1-0.2 0.2-0.1 0.4-0.1 0.2-0.1 0.4 0 0.2 0.1 0.3 0.3 0.1 0.1 0.1 0.3v4.7h2.1q0.1 0 0.2 0 0 0 0.1 0 0.1 0 0.1 0.1 0.1 0 0.1 0.1z" />
          <path fill="#00c200" d="m30.5 28.4v5.6q0 0.1 0 0.2-0.1 0.1-0.1 0.2-0.1 0.1-0.2 0.1-0.1 0.1-0.2 0.1h-0.4q-0.1 0-0.2-0.1-0.1 0-0.1-0.1-0.1-0.1-0.2-0.2 0-0.1 0-0.2v-5.6q0-0.1 0-0.2 0.1-0.1 0.2-0.2 0-0.1 0.1-0.1 0.1-0.1 0.2-0.1h0.4q0.1 0 0.2 0.1 0.1 0 0.1 0.1 0.1 0.1 0.2 0.2 0-0.1 0 0.2z" />
          <path fill="#00c200" d="m37 28.5v5.3q0 0.2 0 0.3-0.1 0.1-0.2 0.2-0.1 0.1-0.2 0.2-0.1 0.1-0.3 0.1 0 0-0.1 0-0.1-0.1-0.1-0.1-0.1 0-0.1 0-0.1-0.1-0.1-0.1-0.1-0.1c-0.1-0.1-1-1.3-1.8-2.3-0.6-0.8-1.1-1.5-1.1-1.5v3.3q0 0.2-0.1 0.3-0.2 0.2-0.4 0.3-0.1 0.1-0.4 0.1-0.2-0.1-0.3-0.2-0.1-0.1-0.1-0.1-0.1-0.1-0.1-0.2 0 0 0-0.1 0-0.1 0-0.1v-5.3q0-0.2 0-0.3 0.1-0.1 0.2-0.2 0-0.1 0.2-0.2 0.1 0 0.2-0.1 0.1 0 0.2 0.1 0.1 0 0.1 0 0.1 0 0.2 0.1 0 0 0.1 0.1c0 0 1.5 1.9 2.3 3 0.3 0.4 0.5 0.7 0.5 0.7v-3.2q0-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.1 0.3-0.2 0.1 0 0.2 0 0.2 0 0.3 0 0.1 0.1 0.2 0.2 0.1 0.1 0.2 0.2 0 0.1 0 0.2z" />
          <path fill="#00c200" d="m39.5 31.9v1.3h2.1q0.3-0.1 0.6 0.1 0.2 0.3 0.2 0.6 0 0.3-0.2 0.5-0.3 0.2-0.6 0.2h-2.8q-0.1 0-0.3-0.1-0.1 0-0.2-0.1-0.1-0.1-0.1-0.3-0.1-0.1-0.1-0.2v-5.4q0-0.1 0.1-0.2 0-0.2 0.1-0.3 0.1 0 0.2-0.1 0.2-0.1 0.3-0.1h2.8q0.3 0 0.5 0.2 0.3 0.2 0.3 0.5 0 0.3-0.3 0.6-0.2 0.2-0.5 0.2h-2.1v1.2h2.1q0.3 0 0.5 0.2 0.2 0.2 0.2 0.5 0 0.3-0.2 0.5-0.2 0.2-0.5 0.2z" />
        </g>
      </g>
    </g>
  </svg>;
const SquareIcon = ({
  className
}: {
  className?: string;
}) => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z" />
  </svg>;
const BackgroundGraphic = () => <div className="absolute right-0 top-0 bottom-0 w-1/4 h-full pointer-events-none z-0 overflow-hidden">
    <svg className="h-full w-auto absolute right-0 top-0" viewBox="0 0 278 590" preserveAspectRatio="none" style={{
    minWidth: '300px'
  }}>
      <path d="M278-.4h-92.7C151 176.2 116.7 352.9 82.4 529.5H278" fill="#70a665" />
    </svg>
  </div>;

// --- Content Data ---

const AWARDS = [{
  id: 1,
  src: "https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp",
  alt: "Award 01"
}, {
  id: 2,
  src: "https://images.ctfassets.net/rpza41pe9ev5/3ft9YcqxLo39PuYuOfatDs/63a81358563fa484739ce0383fc9d821/native4aAward02.webp",
  alt: "Award 02"
}];
const MEDIA = [{
  id: 1,
  src: "https://images.ctfassets.net/rpza41pe9ev5/1Z9kABymRLNig6bmCDInfA/531d55423f66acf4585737dde8852224/logo_hket-0802f63cfd8456776825bba969fdb6f0.png",
  alt: "HKET",
  className: "w-32 md:w-44 h-auto object-contain"
}, {
  id: 2,
  src: "https://images.ctfassets.net/rpza41pe9ev5/6lzmfxu8TRwbdcAIUuHDmC/7251b6e1b6c8b22aca23fdc6b8caba63/The_Standard_Logo-a81712920c34ac9bdcc256254e8599a9.png",
  alt: "Standard",
  className: "w-40 md:w-56 h-auto object-contain"
}];
const SOCIAL_LINKS = [{
  id: 'ig',
  icon: <InstagramIcon />,
  href: "#"
}, {
  id: 'wa',
  icon: <WhatsappIcon />,
  href: "#"
}, {
  id: 'line',
  icon: <LineIcon />,
  href: "#"
}];

// --- Main Component ---

export const Native4aHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'awards' | 'media'>('awards');
  return <section className="relative w-full flex items-center overflow-hidden" style={{
    backgroundImage: 'linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 60%, #70A665 60%, #70A665 100%)',
    height: "934.938px"
  }}>
      {/* Background Shape */}
      <BackgroundGraphic />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Brand & Hero Text */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              native4a-香港SEO公司
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              讓你站在巨人肩上
            </h2>
            <div className="h-1.5 w-full max-w-[480px] bg-amber-400 mt-6 rounded-full" />
          </div>

          <div className="flex flex-wrap items-center gap-6 py-6">
            {SOCIAL_LINKS.map(social => <motion.a key={social.id} href={social.href} whileHover={{
            scale: 1.1,
            rotate: 5
          }} whileTap={{
            scale: 0.95
          }} className="w-16 h-16 md:w-20 md:h-20 transition-transform">
                {social.icon}
              </motion.a>)}
          </div>
        </motion.div>

        {/* Right Column: Cards & Tabs */}
        <motion.div initial={{
        opacity: 0,
        x: 30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }} className="flex-1 w-full max-w-2xl">
          {/* Desktop Layout: Stacked Cards */}
          <div className="hidden lg:flex flex-col gap-10">
            {/* Awards Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 underline decoration-amber-400 decoration-4 underline-offset-8">
                年度獎項
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {AWARDS.map(award => <motion.div key={award.id} whileHover={{
                scale: 1.02
              }} className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                    <img src={award.src} alt={award.alt} className="w-full h-auto object-cover aspect-[4/3]" />
                  </motion.div>)}
              </div>
            </div>

            {/* Media Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 underline decoration-amber-400 decoration-4 underline-offset-8">
                媒體報導
              </h3>
              <div className="flex flex-wrap items-center justify-start gap-12">
                {MEDIA.map(logo => <motion.img key={logo.id} src={logo.src} alt={logo.alt} whileHover={{
                scale: 1.05
              }} className={logo.className} />)}
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Layout: Tabs */}
          <div className="lg:hidden bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-50">
            <div className="flex items-center gap-4 mb-8">
              <SquareIcon className="text-amber-400 w-10 h-10 flex-shrink-0" />
              <p className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                「native4a」品牌 - 獲獎的廣告公司
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
              {(['awards', 'media'] as const).map(tab => <button key={tab} onClick={() => setActiveTab(tab)} className={cn("px-8 py-3 rounded-full font-bold text-base transition-all border-2 flex-shrink-0", activeTab === tab ? "bg-black text-white border-black" : "bg-white text-gray-900 border-gray-200 hover:border-gray-400")}>
                  {tab === 'awards' ? '年度獎項' : '媒體報導'}
                </button>)}
            </div>

            {/* Tab Panels */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {activeTab === 'awards' ? <motion.div key="awards" initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 1.05
              }} transition={{
                duration: 0.3
              }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {AWARDS.map(award => <div key={award.id} className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <img src={award.src} alt={award.alt} className="w-full h-auto object-cover" />
                      </div>)}
                  </motion.div> : <motion.div key="media" initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} exit={{
                opacity: 0,
                scale: 1.05
              }} transition={{
                duration: 0.3
              }} className="flex flex-col md:flex-row items-center justify-center gap-12 py-10">
                    {MEDIA.map(logo => <img key={logo.id} src={logo.src} alt={logo.alt} className={logo.className} />)}
                  </motion.div>}
              </AnimatePresence>
            </div>
          </div>

        </motion.div>
      </div>
    </section>;
};