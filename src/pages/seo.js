//base here//
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'

//components here//
import BacklinkLayout from '../components/backlinkLayout'
import Seo from '../components/seo'
import AboutAs from '../components/aboutAs'
import ContactForm from '../components/contactAs'
import ClientLogos from '../components/clientLogos'
import SeoSlick from '../components/slickSlider/greenSlider/seoSlider'
import Awards from '../components/awards'
import Section from '../components/baseTools/Section'
import Grid from '../components/baseTools/Grid'
import Column from '../components/baseTools/Grid/Column'
import Img from '../components/baseTools/Image'
import Text from '../components/baseTools/text'
import Icon from '../components/baseTools/Icon'
import whatsApp_icon from '../components/baseTools/Icon/img/whatsapp.svg'
import line_icon from '../components/baseTools/Icon/img/line_Icon.svg'

//CSS here//
import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/seo.module.css'

//image here//

//import ArticlePreview from '../components/article-preview'

class seoIndex extends React.Component {
  render() {
    //const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [seoPage] = get(this, 'props.data.allContentfulSeoPage.nodes')

    return (
      <BacklinkLayout location={this.props.location}>
        <Seo
          title={seoPage.metaTitle}
          description={seoPage.metaDescription}
          ogUrl="https://nativeaaaa.com.hk/seo/"
        />
        <Section SectionClass="bg-[url('../img/GRectangle.svg')] bg-cover">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-32 lg:pt-22 xl:pt-22 2xl:pt-36 pb-0 lg:pb-14 xl:pb-16 2xl:pb-30">
              <div className="flex items-center">
                <div className="pt-2 md:pt-3 2xl:pt-0">
                  <Text
                    tag="h1"
                    className="tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw]"
                  >
                    {seoPage.title}
                  </Text>
                  <Text
                    tag="h2"
                    className="tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw]"
                  >
                    {seoPage.titleH2}
                  </Text>
                  <div className={styles.border}></div>
                  <div className="md:grid grid-cols-1 gap-6 py-6">
                    <div className="flex gap-6 w-3/4 md:w-1/2 items-center">
                      <Icon Alt="Instagram link" />
                      <Icon
                        Alt="whatsapp link"
                        URL={whatsApp_icon}
                        linkto="https://api.whatsapp.com/send/?phone=85264602996&text=我想查詢SEO服務。"
                      />
                      <Icon
                        Alt="Line link"
                        URL={line_icon}
                        linkto="https://line.me/ti/p/ZqH9CPaYkE"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="hidden md:flex justify-center items-center bg-white p-8 md:p-0 md:bg-inherit shadow-md rounded-3xl mt-2 pt-12">
                      <div>
                        <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                          <b>年度獎項</b>
                        </p>
                        <div className="container mx-auto pt-5">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Img
                              Desktop="rounded-sm"
                              Size=""
                              URL="https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp"
                              Alt="Award01"
                              Mobile=""
                            />
                            <Img
                              Desktop="rounded-sm"
                              Size=""
                              URL="https://images.ctfassets.net/rpza41pe9ev5/3ft9YcqxLo39PuYuOfatDs/63a81358563fa484739ce0383fc9d821/native4aAward02.webp"
                              Alt="Award02"
                              Mobile=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex justify-center items-center">
                      <div className="grid gap-6">
                        <div className="">
                          <p className="underline text-2xl decoration-yellow-400 underline-offset-4 decoration-2">
                            <b>媒體報導</b>
                          </p>
                        </div>
                        <div className="container mx-auto">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Img
                              Desktop="rounded-sm"
                              Size="w-2/4"
                              URL="https://images.ctfassets.net/rpza41pe9ev5/1Z9kABymRLNig6bmCDInfA/531d55423f66acf4585737dde8852224/logo_hket-0802f63cfd8456776825bba969fdb6f0.png"
                              Alt="HKET"
                              Mobile=""
                            />
                            <Img
                              Desktop="rounded-sm"
                              Size="w-2/3"
                              URL="https://images.ctfassets.net/rpza41pe9ev5/6lzmfxu8TRwbdcAIUuHDmC/7251b6e1b6c8b22aca23fdc6b8caba63/The_Standard_Logo-a81712920c34ac9bdcc256254e8599a9.png"
                              Alt="Standrad"
                              Mobile=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Awards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section ContainerClass="flex flex-col items-center m-auto w-[95%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[79%]">
          <Column columnClass="container mx-auto pt-20">
            <h3 className="text-4xl">{seoPage.subTitle}</h3>
            <div className={styles.border}></div>
            <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl mb-10">
              {renderRichText(seoPage.titleDescription)}
            </p>
            <Text
              tag="h2"
              className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
            >
              <span>
                <FaSquare />
              </span>
              <Text tag="p" className="pl-3">
                網站大量免費曝光機會
              </Text>
            </Text>
            <p className="text-base">
              很多人都說SEO是趨勢，到底做好SEO後是怎樣的狀態，在於客戶而言又有何直接效益？
            </p>
          </Column>
          <Grid>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/3D67OnPP8hAZzaQ7C7ceN3/37c00afea30ecadd83a843e149133ece/1.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage"
                loading="lazy"
                decoding="async"
              />
              <p className="text-base">
                以上案例只抽取其中15組關鍵字作例子。
                SEM廣告平均支出是HK$11.09*3757次點擊=節省HK$41,665/月
              </p>
            </Column>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/1BrrlX7WlndmFxenowzmgz/90ef574973787aa374ef19d1a9476b4d/2.png"
                alt="SEOimage"
                loading="lazy"
                decoding="async"
                className="m-0"
              />
              <p className="text-base">
                換句話說，當你的SEO完善時，你的網站獲客量將會達到SEM廣告去不到的境界。
              </p>
            </Column>
          </Grid>

          <Grid>
            <Column columnClass="order-last md:order-first">
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/74fmFO8GPdJCsbKVdlo4IS/da2c632617e8392b54c57c9829ba96ac/3.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
            </Column>
            <Column>
              <Text
                tag="h2"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  大量關鍵字獲得排名提升
                </Text>
              </Text>
              <p className="text-base">
                隨著SEO公司的努力，搜索引擎會更加信任你的網站，從而提高你的排名。
                由於SEO過程是整個網站優化，變相不單止是指定做上去的關鍵字，更會有很多意外驚喜的「流量密碼」。
              </p>
            </Column>
          </Grid>
          <Grid>
            <Column>
              <Text
                tag="h2"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  品牌信譽&知名度提升
                </Text>
              </Text>
              <p className="text-base">
                Think With Google
                的一項研究發現，消費者在購買產品之前平均會進行多達32次的搜索。
                消費者們一旦進入你的關鍵字領域，他們搜尋多個關鍵字都會見到你的網站，且排名足夠高，便能提升品牌形象。
              </p>
            </Column>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/NPHo6ZhhBRD71WbxC1hzG/879981a4f05623cade01a96854c37c6b/4.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
              <p className="text-base">
                （更多think with Google研究):
                https://www.thinkwithgoogle.com/intl/zh-tw/consumer-insights/consumer-trends/shopping-season-insights-tw/amp/
              </p>
              <div>
                <p>以上就是SEO的理想狀態，</p>
                <p>
                  1.節省大量SEM支出 2.高排名 3.高引流 4.高品牌價值
                  5.而且不斷擴張
                </p>
                <p>這就是一家稱職的SEO公司會為你帶來的。</p>
                <p>
                  native作為一家香港主流的SEO公司，營運經營已近7年，在SEO方面累積了大量經驗和實驗成果。
                </p>
                <p>
                  曾優化過不少難度極高的領域，包括：補習、醫療用品、搬屋公司等高競爭行業。想了解更多可以到我們的IG睇詳細案例：
                  https://www.instagram.com/native_4a/ 或聯絡我們制定適合你的SEO
                  Plan. 直接Whatsapp
                </p>
              </div>
            </Column>
          </Grid>

          <Column columnClass="container mx-auto pt-20">
            <h2 className="text-4xl">我們實際如何為客戶操作SEO呢？</h2>
          </Column>

          <Grid>
            <Column columnClass="order-last md:order-first">
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/34haav5tXB9rZcb41j2roU/671f4cadf47735c91b767cc7f634f97d/5.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
            </Column>
            <Column>
              <Text
                tag="h3"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  關鍵字研究
                </Text>
              </Text>
              <p>
                在開始SEO之前，我們會從客戶的網站、行業、對手等數據研究關鍵字。
              </p>
              <p>
                1a.尋找關鍵字數據 1b.分析你的競爭對手 1c.外連分析（分析Link
                Profile)
              </p>
            </Column>
          </Grid>

          <Grid>
            <Column>
              <Text
                tag="h3"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  網站On-page優化
                </Text>
              </Text>
              <p>
                我們會先在技術層面優化你的網站，以提高其在搜索結果中的排名。這可能包括改進你的網站速度，使其對手機Friendly，並優化你的內容以包含關鍵字。
              </p>
              <p>2a.網站速度提升 2b.手機版面兼容 2c.關鍵字密度檢查</p>
            </Column>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/7E06y6exVgoM7iUVBpOzgr/68ea1f134e09d7047acb9fe1ca66287d/6.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
            </Column>
          </Grid>

          <Grid>
            <Column columnClass="order-last md:order-first">
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/34haav5tXB9rZcb41j2roU/671f4cadf47735c91b767cc7f634f97d/5.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
            </Column>
            <Column>
              <Text
                tag="h3"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  內容優化
                </Text>
              </Text>
              <p>
                我們會提供合適的SEO內容創作指南，配合關鍵字方向而優化內容。這些內容是放在你網站的，所以SEO公司與你在這個環節都要參與其中，進行磋商。
              </p>
              <p>
                3a.SEO內容指引，甚至創作基本草稿 3b.SEO文章結構指引
                3c.h1-h6標題設計
              </p>
            </Column>
          </Grid>

          <Grid>
            <Column>
              <Text
                tag="h3"
                className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
              >
                <span>
                  <FaSquare />
                </span>
                <Text tag="p" className="pl-3">
                  連結建立Backlinks Building
                </Text>
              </Text>
              <p>
                Backlinks是SEO過程中重要的一環，即使你的內容完美無瑕，缺少Backlinks的支援，是不會在熱門關鍵字獲得好排名的。而Backlinks種類有很多，質素亦參次不齊。（如何選擇優質Backlinks：https://nativeaaaa.com.hk/blog/quality-backlinks/）
              </p>
              <p>
                而繁體中文在SEO世界而言尋小眾市場，所以專為中文網站而設計的Backlinks非常少，或是台灣公司為主。我們經過很多實驗證明，Backlinks內容的語言相符的連結威力更大，所以研發了「繁中外連系統」專為針對香港網站提供繁中backlinks，有效排名更快、更穩固。
              </p>
            </Column>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/4SL1JVHvvOKSNvawuIrQ5U/9f5e78421ed786bdb9d56d2d36798402/8.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
              <p>
                我在網上發現了一些不是native出品的中文Backlinks，剛好可以用來作反面教材：
              </p>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/4OrNLcudhXkthxkyI4CzsM/46e2970665bf12dd3610d8c64a02a0ca/8.png?w=1640&h=924&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
              <p>
                native作為一家香港主流的SEO公司，營運經營已近7年，在SEO方面累積了大量經驗和實驗成果。
              </p>
              <p>
                曾優化過不少難度極高的領域，包括：補習、醫療用品、搬屋公司等高競爭行業。想了解更多可以到我們的IG睇詳細案例：
                https://www.instagram.com/native_4a/ 或聯絡我們制定適合你的SEO
                Plan. 直接Whatsapp
              </p>
              <p>（案例各有不同，上文數據只供參考，並非保證。）</p>
            </Column>
          </Grid>
        </Section>
        <section className={styles.seoSpanSquare}>
          <SeoSlick />
        </section>
        <section className={styles.seoSpanSquare}>
          <AboutAs />
        </section>
        <section className={styles.seoSpanSquare}>
          <ClientLogos />
        </section>
        <section className={styles.seoSpanSquare}>
          <ContactForm />
        </section>
      </BacklinkLayout>
    )
  }
}
/*
  ===========blog post============
  <ArticlePreview posts={posts} />

  ===========multi className============
  <div className={`${styles.container} ${styles.bg_write}`}>
*/
export default seoIndex

export const webDesignQuery = graphql`
  query seoQuery {
    allContentfulSeoPage {
      nodes {
        metaTitle
        metaDescription
        title
        titleH2
        subTitle
        titleDescription {
          raw
        }
        nativeBanner {
          url
        }
      }
    }
  }
`
