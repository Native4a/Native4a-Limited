'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Square } from 'lucide-react';

/**
 * AboutUsSection - A premium "About Us" section for NATIVE4A digital marketing agency.
 * Recreated from the provided HTML capture with a focus on editorial typography and clean layout.
 */
export const AboutUsSection: React.FC = () => {
  return <section id="aboutAs" className="w-full bg-[#F7F7F8] py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center overflow-hidden">
      <div className="container max-w-7xl px-6 md:px-12 lg:px-20 mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <header className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-[#70A665]">
                  <Square size={32} fill="currentColor" />
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
                  關於NATIVE4A
                </h2>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-gray-800 pt-2">
                Hello，我們是香港一家主流數碼營銷公司。
              </h3>
            </header>

            <article className="prose prose-lg lg:prose-xl text-gray-600 max-w-2xl">
              <p className="leading-relaxed text-lg md:text-xl font-normal">
                native 在香港業務發展迅速，與客戶共同成長，業務包括SEO搜尋引擎優化、SMM社交媒體行銷、EDM電子郵件營銷、SEM關鍵字廣告、影片廣告等，能夠幫助企業實現線上曝光、提高訪問量、轉換率、銷售額等目標，強項在於制定全方位的數碼營銷策略，並進行實時監測和調整。
              </p>
            </article>
          </div>

          {/* Right Column: Logo/Visual Asset */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.2
        }} viewport={{
          once: true
        }} className="flex justify-center lg:justify-end items-center">
            <figure className="relative w-full max-w-md lg:max-w-lg">
              <img className="w-full h-auto drop-shadow-sm transition-transform duration-500 hover:scale-105" src="https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg" alt="native4a Logo" loading="lazy" />
              <figcaption className="sr-only">NATIVE4A Digital Marketing Agency Logo</figcaption>
            </figure>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default AboutUsSection;
