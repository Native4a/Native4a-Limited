import React from 'react'
//import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from '../container'
import * as styles from '../../styles/footer.module.css'
import useFooter from '../../hook/useFooter'
import Whatsapp from '../baseTools/whatsapp'
import Icon from '../baseTools/Icon'
import Whatsapp_sticky from '../baseTools/Icon/img/whatsappContact_text.svg'
import line_icon from '../baseTools/Icon/img/line_Icon.svg'

const Footer = () => {
  const footer = useFooter()
  return (
    <div>
      {footer.map((item, index) => {
        const {
          title,
          description,
          buttonName,
          native4aLogo,
          //copyRight,
          googlePartnerImage,
        } = item
        // 獲取當前年份
        const currentYear = new Date().getFullYear()
        return (
          <Container as="footer" key={index}>
            {/* Block Comments */}
            <section className={styles.container}>
              <div className="grid grid-rows-2 items-center my-10 md:my-20">
                <h2 className="text-center text-2xl md:text-4xl">{title}</h2>
                <p className="text-center text-xl md:text-2xl">
                  {description.description}
                </p>
                <div className="rounded-t-lg overflow-hidden text-center p-0 md:p-4 mt-3">
                  <Whatsapp
                    linkto="https://api.whatsapp.com/send/?phone=85267461301&text=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2%E6%95%B8%E7%A2%BC%E7%87%9F%E9%8A%B7%E6%9C%8D%E5%8B%99%E3%80%82"
                    children={buttonName}
                  ></Whatsapp>
                </div>
              </div>
            </section>
            <section className="bg-neutral-200 pt-5 md:pt-0 pb-20 md:py-0 px-5 md:px-11">
              <div className="grid grid-cols-3 gap-1 items-center">
                <div className="">
                  <img
                    className="rounded-sm w-28 md:w-48 m-0"
                    src={native4aLogo.url}
                    alt="service_Video_Production"
                  />
                </div>
                <div className="flex text-[10px] md:text-base items-center text-center">
                  <p>
                    {/* {renderRichText(copyRight)} */}
                    Copyright © 2016 - {currentYear} Native4a . All Rights
                    Reserved. Privacy-Policy｜Terms of Business
                  </p>
                </div>
                <div className="">
                  <img
                    className="rounded-sm float-right w-8/12 md:w-48"
                    src={googlePartnerImage.url}
                    alt="service_Video_Production"
                  />
                </div>
              </div>
            </section>
            <section>
              <Icon
                URL={Whatsapp_sticky}
                linkto="https://api.whatsapp.com/send/?phone=85267461301&text=你好，我想查詢數碼營銷服務。"
                Size="w-24 fixed bottom-0 right-0 md:translate-y-[-25%] md:translate-x-[-25%] z-50"
                Mobile="translate-y-[-80%] translate-x-[-10%]"
                Alt="sticky whatsapp button"
              ></Icon>
              <Icon
                URL={line_icon}
                linkto="https://line.me/ti/p/ZqH9CPaYkE"
                Size="w-24 fixed bottom-0 right-0 md:translate-y-[-120%] md:translate-x-[-25%] z-50"
                Mobile="translate-y-[-170%] translate-x-[-10%]"
                Alt="sticky whatsapp button"
              ></Icon>
            </section>
            {/* 其他组件内容 */}
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
