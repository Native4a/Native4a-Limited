'use client'
import * as React from 'react';
import { Square, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface Testimonial {
  id: string;
  thumbnail: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorLogo: string;
  rating: number;
}
const TESTIMONIALS: Testimonial[] = [{
  id: '1',
  thumbnail: 'https://nativeaaaa.com.hk/static/Client-s02-6454cd0a0637078ff31fa602545c15e8.png',
  quote: '"NATIVE4A協助我們用了低成本，達成高回報。"',
  authorName: '兆哥',
  authorTitle: '搬屋易 Founder',
  authorLogo: 'https://nativeaaaa.com.hk/static/easy_transportation_logo-78656ba542196688609909f057b467be.jpg',
  rating: 5
}, {
  id: '2',
  thumbnail: 'https://nativeaaaa.com.hk/static/CENTURY21-2ff8b8bb52d811a4db7abe6f4f5c9d5f.png',
  quote: '"NATIVE4A積極協助我們達成每月銷售目標。"',
  authorName: 'Max Hung',
  authorTitle: '世紀21 業務經理',
  authorLogo: 'https://nativeaaaa.com.hk/static/easy_transportation_logo-78656ba542196688609909f057b467be.jpg',
  rating: 5
}, {
  id: '3',
  thumbnail: 'https://nativeaaaa.com.hk/static/RHCurtain-200db49c3c6925c15e38aa554449e9f0.png',
  quote: '"NATIVE4A協助我們將業務拓展至全港。"',
  authorName: 'Tony',
  authorTitle: 'RH Curtain CEO',
  authorLogo: 'https://nativeaaaa.com.hk/static/RHCurtainLogo-f55e7f7a58a2f54b685a08ba6244ef40.jpg',
  rating: 5
}, {
  id: '4',
  thumbnail: 'https://nativeaaaa.com.hk/static/AccoladeImg-30ef49e202456ce47ae8423d1ef66b56.png',
  quote: '"native協助我們Google廣告多年。"',
  authorName: 'Paul Lu',
  authorTitle: 'Accolade COO',
  authorLogo: 'https://nativeaaaa.com.hk/static/accoladeLogo-a6905a9cef7e3307336e9110b9809b25.png',
  rating: 5
}, {
  id: '5',
  thumbnail: 'https://nativeaaaa.com.hk/static/LostHKImg-90eb4f80f7300f5ed0e3ed681da69502.png',
  quote: '"native的SEO技術領先。"',
  authorName: 'Rick Woo',
  authorTitle: 'Lost CEO',
  authorLogo: 'https://nativeaaaa.com.hk/static/LostHKLogo-c62130b7198f8860cc6eba3699127259.png',
  rating: 5
}];
const StarRating = ({
  rating
}: {
  rating: number;
}) => <div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => <Star key={`star-${i}`} size={16} className={cn('fill-current', i < rating ? 'text-amber-500' : 'text-gray-300')} />)}</div>;
const TestimonialCard = ({
  testimonial
}: {
  testimonial: Testimonial;
}) => <div className="flex flex-col items-center">
    <motion.div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-sm border border-gray-100 cursor-pointer group" whileHover={{
    scale: 1.05
  }} transition={{
    duration: 0.3,
    ease: 'easeOut'
  }}>
      <img src={testimonial.thumbnail} alt={`Testimonial video by ${testimonial.authorName}`} className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg" whileHover={{
        scale: 1.1
      }}>
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-amber-500 border-b-[8px] border-b-transparent ml-1" />
        </motion.div>
      </div>
    </motion.div>
    <div className="mt-4 w-full bg-amber-500 rounded-full px-4 py-2 flex items-center justify-center shadow-sm"><span className="text-sm md:text-base font-bold text-black text-center truncate px-2">{testimonial.quote}</span></div>
    <div className="mt-6 w-full px-2">
      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-50 overflow-hidden shadow-inner bg-white shrink-0"><img src={testimonial.authorLogo} alt={testimonial.authorName} className="w-full h-full object-contain p-2" /></div>
        <div className="flex flex-col justify-center min-w-0">
          <h3 className="font-bold text-gray-900 leading-tight truncate">{testimonial.authorName}</h3>
          <p className="text-xs text-gray-500 mb-1 truncate">{testimonial.authorTitle}</p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
    </div>
  </div>;
export const CombinedCustomerSuccess: React.FC = () => <section className="w-full bg-white font-sans">
    <div className="w-full pt-[120px] pb-8 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="block md:hidden w-full max-w-4xl">
          <h2 className="flex items-center text-[24px] font-semibold text-gray-900">
            <span className="text-[#FAAB00] mr-3 flex items-center shrink-0"><Square className="w-8 h-8 fill-current" aria-hidden="true" /></span>
            <span>客戶見證我們成長</span>
          </h2>
        </div>
        <div className="hidden md:block text-center">
          <h2 className="text-[50px] font-semibold leading-tight text-gray-900 underline decoration-[#E3A008] decoration-4 underline-offset-[21px]"><span>客戶見證我們成長</span></h2>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl pb-20 mt-12 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">{TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial} />)}</div>
    </div>
  </section>;