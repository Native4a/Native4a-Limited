import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { useTranslation } from 'react-i18next'
import Container from '../container'
import * as styles from '../../styles/footer.module.css'
import useFooter from '../../hook/useFooter'
import Whatsapp from '../baseTools/whatsapp'
import Icon from '../baseTools/Icon'
import Whatsapp_sticky from '../baseTools/Icon/img/whatsappContact_text.svg'
import line_icon from '../baseTools/Icon/img/line_Icon.svg'

const Footer = () => {
  const footer = useFooter()
  const location = useLocation()
  const pathname = location.pathname
  const { t } = useTranslation()

  // ❗在這裡設定你不想顯示 Icon 的路徑
  const hiddenPaths = ['/seo/', '/backlinks/']
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const visitorWindow = window
    visitorWindow.visitorGlobalObjectAlias = 'vgo'
    visitorWindow.vgo = visitorWindow.vgo || function (...args) {
      visitorWindow.vgo.q = visitorWindow.vgo.q || []
      visitorWindow.vgo.q.push(args)
    }

    if (!visitorWindow.vgo.l) {
      visitorWindow.vgo.l = Date.now()
      const script = document.createElement('script')
      script.src = 'https://diffuser-cdn.app-us1.com/diffuser/diffuser.js'
      script.async = true
      const firstScript = document.getElementsByTagName('script')[0]
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      } else {
        document.head.appendChild(script)
      }
    }

    visitorWindow.vgo('setAccount', '69060812')
    visitorWindow.vgo('setTrackByDefault', true)
    visitorWindow.vgo('process')
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const shouldShowIcon = !(
    isMobile && hiddenPaths.some((path) => pathname.startsWith(path))
  )
  return (
    <div>
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
          <Container as="footer" key={index}>
            <section className={styles.container}>
              <div className="grid grid-rows-2 items-center my-10 md:my-20">
                <h2 className="text-center text-2xl md:text-4xl">{t('footer.title')}</h2>
                <p className="text-center text-xl md:text-2xl">
                  {t('footer.subtitle')}
                </p>
                <div className="rounded-t-lg overflow-hidden text-center p-0 md:p-4 mt-3">
                  <Whatsapp linkto="https://api.whatsapp.com/send/?phone=85264602996">
                    {t('footer.cta')}
                  </Whatsapp>
                </div>
              </div>
            </section>
            <section className="bg-neutral-200 pt-5 md:pt-0 pb-20 md:py-0 px-5 md:px-11">
              <div className="grid grid-cols-3 gap-1 items-center">
                <div>
                  <img
                    className="rounded-sm w-28 md:w-48 m-0"
                    src={native4aLogo.url}
                    alt="service_Video_Production"
                  />
                </div>
                <div className="flex text-[10px] md:text-base items-center text-center">
                  <p>
                    {copyrightText} Privacy-Policy｜Terms of Business
                  </p>
                </div>
                <div>
                  <img
                    className="rounded-sm float-right w-8/12 md:w-48"
                    src={googlePartnerImage.url}
                    alt="service_Video_Production"
                  />
                </div>
              </div>
              <div className="mx-auto mt-6 grid max-w-4xl gap-2 border-t border-neutral-300 pt-4 text-center text-xs leading-relaxed text-neutral-700 sm:grid-cols-2 md:text-sm">
                <address className="not-italic">
                  <span className="font-semibold">{t('iconList.hongKongAddress')}：</span>
                  {t('iconList.hongKongAddressValue')}
                </address>
                <address className="not-italic">
                  <span className="font-semibold">{t('iconList.shenzhenAddress')}：</span>
                  {t('iconList.shenzhenAddressValue')}
                </address>
              </div>
            </section>
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
                  URL={line_icon}
                  linkto="https://line.me/ti/p/ZqH9CPaYkE"
                  Size="w-24 fixed bottom-0 right-0 md:translate-y-[-120%] md:translate-x-[-25%] z-50"
                  Mobile="translate-y-[-170%] translate-x-[-10%]"
                  Alt="sticky line button"
                />
              </section>
            )}
          </Container>
        )
      })}
    </div>
  )
}

export default Footer
