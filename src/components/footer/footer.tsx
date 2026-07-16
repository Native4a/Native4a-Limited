import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * UnifiedFooterSection
 * A seamless component merging the CTA WhatsApp Section and the Footer.
 */
export const UnifiedFooterSection: React.FC = () => {
  return <div className="w-full">
      {/* PART 1 - CTA WhatsApp Section */}
      <section className="bg-white py-20 px-6 flex flex-col items-center text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="flex flex-col items-center gap-6">
          <h2 className="text-[32px] md:text-[50px] font-semibold text-[#1d1d1d] leading-tight">
            Native 讓你站在巨人肩上。
          </h2>
          <p className="text-xl md:text-2xl text-[#444444]">
            歡迎直接Whatsapp查詢
          </p>
          <motion.a href="https://api.whatsapp.com/send/?phone=85264602996" target="_blank" rel="noopener noreferrer" initial={{
          scale: 0.95,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.4
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} className={cn("flex items-center gap-2 bg-[#10b981] hover:bg-[#059669]", "text-white rounded-full px-8 py-3 md:px-10 md:py-4 transition-all duration-300", "shadow-lg shadow-emerald-200 hover:shadow-emerald-300 font-medium text-lg")}>
            <span>立即查詢</span>
          </motion.a>
        </motion.div>
      </section>

      {/* PART 2 - Footer Section */}
      <footer className="bg-neutral-200 px-6 py-10 md:px-11">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg" alt="Native4a Logo" className="h-[40px] md:h-[60px] w-auto object-contain" />
          </div>

          {/* Center: Copyright & Links */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-neutral-600 text-sm">
              Copyright 2016 - 2026 Native4a . All Rights Reserved.
            </p>
            <div className="flex items-center gap-3 text-neutral-600 text-sm">
              <a href="#" className="hover:text-black transition-colors">Privacy-Policy</a>
              <span className="w-px h-3 bg-neutral-400" aria-hidden="true" />
              <a href="#" className="hover:text-black transition-colors">Terms of Business</a>
            </div>
          </div>

          {/* Right: Google Partner Badge */}
          <div className="flex justify-center md:justify-end">
            <img src="https://images.ctfassets.net/rpza41pe9ev5/2cP9PHQMjmVrxaMhyske5G/a4b60a4a811efa4d10949da11d088334/google_partner.png" alt="Google Partner" className="h-[60px] md:h-[85px] w-auto object-contain" />
          </div>
        </div>
      </footer>
    </div>;
};

export default UnifiedFooterSection;
