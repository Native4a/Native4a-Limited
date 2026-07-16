'use client';

import React from 'react';
import { Square } from 'lucide-react';
interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  alt: string;
}
const PARTNERS: Partner[] = [{
  id: '1',
  name: '鉑康',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/2JGJXjVu4mHwQIcbYBLvfN/a6ca2043d97d2f57202b8235cf4961b8/______LOGO.png',
  alt: '鉑康 Logo'
}, {
  id: '2',
  name: 'Esey',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/76Sy3Fga6pmZdKv0xDkgMV/bc947469b05646858a5fc28542c160ea/esey_logo.png',
  alt: 'Esey logo'
}, {
  id: '3',
  name: 'Accolade',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/7BDOyl5M3EiATZGLY99wnL/9911ee2eed4a0c9fc36753d24cd04a73/accolade_logo.png',
  alt: 'Accolade original logo'
}, {
  id: '4',
  name: 'LOST',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/lNpYeQg2TWJeBSEYvViKW/89afb1c52df65ff77f75d9d53925e2fe/LOST_LOGO-c62130b7198f8860cc6eba3699127259.png',
  alt: 'LOST logo'
}, {
  id: '5',
  name: 'JACO',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/1kGfKHTh5F4RSgYil4Bxfe/47beb9ba83761ab8cb55f73f17934244/JACO_logo.png',
  alt: 'JACO logo'
}, {
  id: '6',
  name: '雅居蚊網',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/2xnaK0ythhgp5dQWf7b3yu/c62c3b53c498749311451a1d494ad203/RefinedHouse_logo-f55e7f7a58a2f54b685a08ba6244ef40.jpg',
  alt: '雅居蚊網 Logo'
}, {
  id: '7',
  name: 'health',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/6reGiKvh1EwwXZOmjl7VfR/dfb15c08063172e2ddd14a7ed9af4a15/health_logo.png',
  alt: 'health logo'
}, {
  id: '8',
  name: '煤氣達人',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/3BNnQY1xztgxOHk1mEE8tF/7ac68a1e273fc661627cb08036aa8098/_____________logo.png',
  alt: '煤氣達人 Logo'
}, {
  id: '9',
  name: 'bay247',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/6gvmcco3ARogW5lJCHLpaR/6e22b65d06e54011a82f9a16456abe02/bay247_logo_2_.png',
  alt: 'bay247 logo'
}, {
  id: '10',
  name: 'emmas',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/7dbFjigir12VFBKZufsAmL/1754466d4ce0f6fd3762676bc7818fbd/emmas_logo.png',
  alt: 'emmas logo'
}, {
  id: '11',
  name: 'LAFAYETTE',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/01PMo9aqJaAtuhzMkUkikX/7cb5975c4f0f52f59edee67beeb55920/LAFAYETTE_logo.png',
  alt: 'LAFAYETTE logo'
}, {
  id: '12',
  name: 'NORA',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/4PcjZKtDzCSIPE3vkeNNDu/e77fd08a5428a839ce9b8753189f864d/NORA_logo.png',
  alt: 'NORA logo'
}, {
  id: '13',
  name: 'alessandro',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/6KJKa3Wi8Y9piLWBNm0YSU/0e6e31a56bc5906964c337dff8e5c6f4/alessandro_logo.png',
  alt: 'alessandro logo'
}, {
  id: '14',
  name: 'Annetso Shop',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/70WOLZM10xYmqVWXdsAKte/7d15b7336e79500125674e86edc49c21/Annetso_Shop_logo.png',
  alt: 'Annetso Shop logo'
}];
export const PartnerGrid: React.FC = () => <section className="w-full bg-white py-12 md:py-20 overflow-hidden" style={{
  display: "none"
}}>
    <div className="max-w-[1520px] mx-auto px-6 md:px-9" style={{
    display: "none"
  }}>
      <div className="hidden md:flex justify-center items-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black flex items-center underline decoration-[#e3a008] underline-offset-[21px]">
          <span className="text-[#faab00] mr-3"><Square size={32} fill="currentColor" /></span>
          <span>更多合作客戶</span>
        </h2>
      </div>
      <div className="flex md:hidden items-center mb-8 px-2">
        <h2 className="text-2xl font-black flex items-center">
          <span className="text-[#faab00] mr-3"><Square size={24} fill="currentColor" /></span>
          <span>更多合作客戶</span>
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
          {PARTNERS.map(partner => <div key={partner.id} className="w-full flex items-center justify-center p-4 md:p-8 hover:opacity-80 transition-opacity duration-300"><figure className="flex flex-col items-center justify-center w-full h-full"><img src={partner.logoUrl} alt={partner.alt} loading="lazy" decoding="async" className="max-w-full max-h-[120px] md:max-h-[160px] object-contain" /></figure></div>)}
        </div>
      </div>
    </div>
  </section>;
