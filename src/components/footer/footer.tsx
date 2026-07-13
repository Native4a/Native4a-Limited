import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Container from '../container'
import useFooter from '../../hook/useFooter'
import Whatsapp from '../baseTools/whatsapp'
import Icon from '../baseTools/Icon'
import Whatsapp_sticky from '../baseTools/Icon/img/whatsappContact_text.svg'
import Line_icon from '../baseTools/Icon/img/line_Icon.svg'

/**
 * UnifiedFooterSection - Unified Footer and CTA component
 */
const Footer: React.FC = () => {
  const footer = useFooter()
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  const [hiddenPaths] = useState(['/seo/', '/backlinks/'])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const shouldShowIcon = !(
    isMobile && hiddenPaths.some((path) => currentPath.startsWith(path))
  )

  return (
    <div className="w-full">
      {footer.map((item, index) => {
        const {
          title,
          description,
          buttonName,
          native4aLogo,
          googlePartnerImage,
        } = item

        const currentYear = new Date().getFullYear()
        const copyrightText = t('footer.copyright', { year: currentYear })

        return (
          <React.Fragment key={index}>
            {/* PART 1 - CTA WhatsApp Section */}
            <section className="bg-white py-20 px-6 flex flex-col items-center text-center">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center gap-6"
              >
                <h2 className="text-[32px] md:text-[50px] font-semibold text-[#1d1d1d] leading-tight">
                  {t('footer.title') || 'Native 讓你站在巨人肩上。'}
                </h2>
                <p className="text-xl md:text-2xl text-[#444444]">
                  {t('footer.subtitle') || '歡迎直接Whatsapp查詢'}
                </p>
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=85264602996"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    scale: 0.95,
                    opacity: 0
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4
                  }}
                  whileHover={{
                    scale: 1.05
                  }}
                  whileTap={{
                    scale: 0.98
                  }}
                  className="flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white rounded-full px-8 py-3 md:px-10 md:py-4 transition-all duration-300 shadow-lg shadow-emerald-200 hover:shadow-emerald-300 font-medium text-lg"
                >
                  <span>{t('footer.cta') || '立即查詢'}</span>
                </motion.a>
              </motion.div>
            </section>

            {/* PART 2 - Footer Section */}
            <footer className="bg-neutral-200 px-6 py-10 md:px-11">
              <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
                {/* Left: Logo */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={native4aLogo?.url || "https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg"}
                    alt="Native4a Logo"
                    className="h-[40px] md:h-[60px] w-auto object-contain"
                  />
                </div>

                {/* Center: Copyright & Links */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-neutral-600 text-sm">
                    {copyrightText || `Copyright 2016 - ${currentYear} Native4a . All Rights Reserved.`}
                  </p>
                  <div className="flex items-center gap-3 text-neutral-600 text-sm">
                    <a href="#" className="hover:text-black transition-colors">Privacy-Policy</a>
                    <span className="w-px h-3 bg-neutral-400" aria-hidden="true" />
                    <a href="#" className="hover:text-black transition-colors">Terms of Business</a>
                  </div>
                </div>

                {/* Right: Google Partner Badge */}
                <div className="flex justify-center md:justify-end">
                  <img
                    src={googlePartnerImage?.url || "https://images.ctfassets.net/rpza41pe9ev5/2cP9PHQMjmVrxaMhyske5G/a4b60a4a811efa4d10949da11d088334/google_partner.png"}
                    alt="Google Partner"
                    className="h-[60px] md:h-[85px] w-auto object-contain"
                  />
                </div>
              </div>
            </footer>

            {/* Sticky WhatsApp & Line Icons */}
            {shouldShowIcon && (
              <section>
                <Icon
                  URL={Whatsapp_sticky}
                  linkto="https://api.whatsapp.com/send/?phone=85264602996"
                  Size="w-24 fixed bottom-0 right-0 md:translate-y-[-25%] md:translate-x-[-25%] z-50"
                  Mobile="translate-y-[-80%] translate-x-[-10%]"
                  Alt="sticky whatsapp button"
                />
                <Icon
                  URL={Line_icon}
                  linkto="https://line.me/ti/p/ZqH9CPaYkE"
                  Size="w-24 fixed bottom-0 right-0 md:translate-y-[-120%] md:translate-x-[-25%] z-50"
                  Mobile="translate-y-[-170%] translate-x-[-10%]"
                  Alt="sticky line button"
                />
              </section>
            )}

            {/* Analytics Script */}
            <script type="text/javascript">
              {`
                (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})
                (window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
                vgo('setAccount', '69060812');
                vgo('setTrackByDefault', true);
                vgo('process');
              `}
            </script>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Footer
