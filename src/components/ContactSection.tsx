'use client';

import * as React from 'react';
import { Mail, Phone, MapPin, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
interface ContactItem {
  id: string;
  icon: React.ElementType;
  text: string;
  title: string;
}
const CONTACT_DETAILS: ContactItem[] = [{
  id: 'email',
  icon: Mail,
  text: 'native4a.inquiry@gmail.com',
  title: 'email'
}, {
  id: 'phone',
  icon: Phone,
  text: '+852 6746 1301',
  title: 'phone'
}, {
  id: 'address-hk',
  icon: MapPin,
  text: '新界葵涌葵昌路26-38號 豪華工業大廈6樓',
  title: '香港地址'
}, {
  id: 'address-sz',
  icon: MapPin,
  text: '深圳市福田區泰然七路蒼松大廈19樓',
  title: '深圳地址'
}];
interface QuickLink {
  id: string;
  label: string;
  href: string;
}
const QUICK_LINKS: QuickLink[] = [{
  id: 'about',
  label: '關於NATIVE4A',
  href: '#'
}, {
  id: 'backlink',
  label: '獨家繁中BACKLINK',
  href: '#'
}, {
  id: 'web-design',
  label: '網站設計及開發',
  href: '#'
}, {
  id: 'seo',
  label: 'SEO',
  href: '#'
}, {
  id: 'smm',
  label: '社交媒體廣告',
  href: '#'
}];
export const ContactSection: React.FC = () => <section className="w-full bg-[#F7F7F8] py-16 md:py-24 px-4 sm:px-6 lg:px-12" style={{
  display: "none"
}}>
    <div className="max-w-[1520px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8">
          <div className="flex items-center space-x-3 text-[#1F2937]">
            <span className="text-3xl"><Square className="w-8 h-8 fill-current" /></span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight"><span>聯絡我們</span></h2>
          </div>
          <div className="pl-0 md:pl-11">
            <ul className="space-y-6">{CONTACT_DETAILS.map(item => <li key={item.id} className="flex items-start group"><div className="mt-1 mr-4 flex-shrink-0"><item.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" /></div><div><p className="text-lg md:text-xl font-medium text-slate-800 leading-snug" title={item.title}><span>{item.text}</span></p></div></li>)}</ul>
          </div>
        </div>
        <div className="lg:pt-12">
          <ul className="space-y-4 list-disc pl-6 md:pl-12 text-[#334155]">
            {QUICK_LINKS.map(link => <li key={link.id} className="text-lg leading-loose underline underline-offset-8 decoration-1 decoration-slate-300 hover:decoration-blue-600"><a href={link.href} onClick={e => e.preventDefault()} className="transition-colors duration-300 hover:text-blue-600 block"><span>{link.label}</span></a></li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>;
