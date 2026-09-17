'use client';

import * as React from 'react';
import { Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface SectionData {
  title: string;
  subtitle: string;
  description: string;
  logoUrl: string;
}
const SECTION_DATA: SectionData = {
  title: '關於NATIVE4A',
  subtitle: 'Hello，我們是香港一家主流數碼營銷公司。',
  description: 'native 在香港業務發展迅速，與客戶共同成長，業務包括SEO搜尋引擎優化、SMM社交媒體行銷、EDM電子郵件營銷、SEM關鍵字廣告、影片廣告等，能夠幫助企業實現線上曝光、提高訪問量、轉換率、銷售額等目標，強項在於制定全方位的數碼營銷策略，並進行實時監測和調整。',
  logoUrl: 'https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg'
};
export const AboutUsSection: React.FC = () => <section id="aboutAs" className="w-full bg-[#F7F7F8] py-16 md:py-24 lg:py-32 overflow-hidden" aria-labelledby="about-title" style={{
  display: "none"
}}>
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col space-y-6 md:space-y-8 order-2 lg:order-1">
          <div className="flex items-center gap-3 group">
            <span className="text-[#FAAB00] transition-transform duration-300 group-hover:scale-110"><Square className="w-8 h-8 fill-current" aria-hidden="true" /></span>
            <h2 id="about-title" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] tracking-tight leading-tight"><span>{SECTION_DATA.title}</span></h2>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1A1A1A] leading-snug"><span>{SECTION_DATA.subtitle}</span></h3>
            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed font-normal"><span>{SECTION_DATA.description}</span></p>
          </div>
          <div className="w-12 h-1 bg-[#FAAB00]/30 rounded-full" />
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 p-8 lg:p-12">
          <figure className="relative w-full max-w-[400px] lg:max-w-none flex justify-center">
            <img src={SECTION_DATA.logoUrl} alt="NATIVE4A Digital Marketing Agency Logo" className="w-full h-auto max-h-[120px] md:max-h-[160px] object-contain transition-all duration-700 hover:scale-105" loading="lazy" />
            <div className="absolute -inset-4 bg-[#FAAB00]/5 blur-3xl rounded-full -z-10" />
          </figure>
        </div>
      </div>
    </div>
  </section>;
