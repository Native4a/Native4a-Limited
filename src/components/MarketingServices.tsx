'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface ServiceItem {
  id: string;
  title: string;
  items: string[];
  icon: string;
}
const SERVICES_DATA: ServiceItem[] = [{
  id: 'social-media',
  title: '社交媒體廣告',
  items: ['IG&FB廣告', '小紅書廣告', 'Linkedin廣告'],
  icon: 'https://nativeaaaa.com.hk/static/IMG_0820-afd1c4dde81e5893243816a8abc26665.png'
}, {
  id: 'google-ads',
  title: 'Google廣告',
  items: ['Google關鍵字', 'Google GDN廣告', 'Google購物廣告'],
  icon: 'https://nativeaaaa.com.hk/static/IMG_0821-aacc255ad35f6b2436f467bd22ebdaa1.png'
}, {
  id: 'seo',
  title: 'SEO',
  items: ['排名提升方案', '獨家繁中Backlinks', 'SEO特效文案'],
  icon: 'seo-svg'
}, {
  id: 'web-design',
  title: '網站設計及開發',
  items: ['超強網店系統', '精美展示型網站'],
  icon: 'web-design-svg'
}, {
  id: 'whatsapp-marketing',
  title: '通訊營銷',
  items: ['WhatsApp營銷', 'Email營銷'],
  icon: 'https://images.ctfassets.net/rpza41pe9ev5/6rlGUbeEXUlQT6WvxOyoMx/e84e348b59083b3e2937a66676898277/____________.svg'
}, {
  id: 'video-production',
  title: '短片製作',
  items: ['唔使露面，唔使錄音', '製作短影片在全平台吸客', 'IG Reels，Youtube Shorts', '小紅書等多平台曝光'],
  icon: 'https://nativeaaaa.com.hk/static/IMG_0824-d55bd1c3f321afe9dff9b01370cc7201.png'
}];
const ServiceCard = ({
  service
}: {
  service: ServiceItem;
}) => {
  return <motion.div whileHover={{
    y: -5
  }} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} className="bg-white drop-shadow-lg p-10 sm:p-4 md:p-6 lg:p-10 m-2 md:m-5 xl:m-2 2xl:m-4 rounded-[24px] flex flex-col items-center text-center">
    <div className="flex justify-center mb-6">
      {service.icon === 'seo-svg' ? <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" role="img" aria-label="SEO bar chart icon">
        <text x="50" y="30" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="28" fill="#6aaa64" textAnchor="middle" letterSpacing="-1">
          <tspan>SEO</tspan>
        </text>
        <rect x="5" y="74" width="14" height="20" rx="1.5" fill="#6aaa64" />
        <rect x="24" y="58" width="14" height="36" rx="1.5" fill="#6aaa64" />
        <rect x="43" y="66" width="14" height="28" rx="1.5" fill="#6aaa64" />
        <rect x="62" y="48" width="14" height="46" rx="1.5" fill="#6aaa64" />
        <rect x="81" y="35" width="14" height="59" rx="1.5" fill="#6aaa64" />
      </svg> : service.icon === 'web-design-svg' ? <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" role="img" aria-label="Desktop tablet and mobile devices icon">
        <path fill="#FAAB00" fillRule="evenodd" clipRule="evenodd" d="M6 15h51c4.42 0 8 3.58 8 8v26c0 4.42-3.58 8-8 8H6c-2.21 0-4-1.79-4-4V19c0-2.21 1.79-4 4-4Zm5 9v24h44V24H11Z" />
        <path fill="#FAAB00" d="M29 57h15v8c0 2.76-2.24 5-5 5H22c0-2.76 2.24-5 5-5h2v-8Z" />
        <ellipse cx="37" cy="73" rx="10" ry="3" fill="#FAAB00" />
        <path fill="#FAAB00" fillRule="evenodd" clipRule="evenodd" d="M42 8h24c4.42 0 8 3.58 8 8v38c0 4.42-3.58 8-8 8H42c-4.42 0-8-3.58-8-8V16c0-4.42 3.58-8 8-8Zm4 10v34h16V18H46Z" />
        <ellipse cx="54" cy="56" rx="4" ry="2" fill="#FAAB00" />
        <path fill="#FAAB00" fillRule="evenodd" clipRule="evenodd" d="M68 22h14c4.42 0 8 3.58 8 8v32c0 4.42-3.58 8-8 8H68c-4.42 0-8-3.58-8-8V30c0-4.42 3.58-8 8-8Zm4 9v27h10V31H72Z" />
        <ellipse cx="75" cy="64" rx="3.5" ry="1.8" fill="#FAAB00" />
      </svg> : <img className="w-20 h-20 object-contain" src={service.icon} alt={service.title} loading="lazy" />}
    </div>
    <div className="w-full">
      <h3 className="text-xl font-bold mb-3 text-center text-gray-900">{service.title}</h3>
      <div className="text-left inline-block">
        <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
          {service.items.map((item, index) => <li key={`${service.id}-item-${index}`} className="text-base">
            <span>{item}</span>
          </li>)}
        </ul>
      </div>
    </div>
  </motion.div>;
};
export const MarketingServices: React.FC = () => {
  return <section className="relative w-full py-[108px] bg-[#F7F7F8] bg-cover bg-center overflow-hidden" style={{
    backgroundImage: `url('https://nativeaaaa.com.hk/static/G01-da07b2d1917fae4901c1a68c442cffff.png')`
  }}>
    <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1536px]">
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#FAAB00] text-3xl">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </span>
          <h2 className="text-2xl font-bold leading-tight">服務範圍</h2>
        </div>
        <h1 className="text-4xl md:text-[50px] font-semibold leading-tight md:leading-[56px] text-gray-900">
          數碼營銷6種熱門方法
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {SERVICES_DATA.map(service => <ServiceCard key={service.id} service={service} />)}
      </div>
    </div>
    <div className="absolute inset-0 bg-white/50 -z-10" aria-hidden="true" />
  </section>;
};