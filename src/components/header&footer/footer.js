import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
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

  // ❗在這裡設定你不想顯示 Icon 的路徑
  const hiddenPaths = ['/seo/', '/backlinks/']
  const [isMobile, setIsMobile] = useState(false)

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

        return (
          <Container as="footer" key={index}>
            <section className={styles.container}>
              <div className="grid grid-rows-2 items-center my-10 md:my-20">
                <h2 className="text-center text-2xl md:text-4xl">{title}</h2>
                <p className="text-center text-xl md:text-2xl">
                  {description.description}
                </p>
                <div className="rounded-t-lg overflow-hidden text-center p-0 md:p-4 mt-3">
                  <Whatsapp linkto="https://api.whatsapp.com/send/?phone=85264602996&text=你好，我想查詢SEO服務。">
                    {buttonName}
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
                    Copyright © 2016 - {currentYear} Native4a . All Rights
                    Reserved. Privacy-Policy｜Terms of Business
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
            <script type="text/javascript">
              {`
                (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})
                (window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
                vgo('setAccount', '69060812');
                vgo('setTrackByDefault', true);
                vgo('process');
              `}
            </script>
          </Container>
        )
      })}
    </div>
  )
}

export default Footer
