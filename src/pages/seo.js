import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { withTranslation } from 'react-i18next'

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

import 'reactjs-popup/dist/index.css'
import * as styles from '../styles/seo.module.css'

class seoIndex extends React.Component {
  render() {
    const [seoPage] = get(this, 'props.data.allContentfulSeoPage.nodes')
    const { t } = this.props

    return (
      <BacklinkLayout location={this.props.location}>
        <Seo
          title={t('seo.metaTitle')}
          description={t('seo.metaDescription')}
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
                    {t('seo.title')}
                  </Text>
                  <Text
                    tag="h2"
                    className="tracking-tight font-black text-3xl md:leading-snug md:text-[2.8vw]"
                  >
                    {t('seo.subtitle')}
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
                          <b>{t('seo.annualAwards')}</b>
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
                            <b>{t('seo.mediaFeatures')}</b>
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
            <h3 className="text-4xl">{t('seo.whatCanBuy')}</h3>
            <div className={styles.border}></div>
            <p className="py-5 md:py-3 text-lg md:text-lg 2xl:text-2xl mb-10">
              {t('seo.whatCanBuyDesc')}
            </p>
            <Text
              tag="h2"
              className="flex text-2xl md:text-3xl pt-12 pb-5 ml-2 font-bold items-center"
            >
              <span>
                <FaSquare />
              </span>
              <Text tag="p" className="pl-3">
                {t('seo.freeExposure')}
              </Text>
            </Text>
            <p className="text-base">
              {t('seo.freeExposureDesc')}
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
                {t('seo.freeExposureNote')}
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
                {t('seo.freeExposureNote2')}
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
                  {t('seo.keywordRanking')}
                </Text>
              </Text>
              <p className="text-base">
                {t('seo.keywordRankingDesc')}
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
                  {t('seo.brandReputation')}
                </Text>
              </Text>
              <p className="text-base">
                {t('seo.brandReputationDesc')}
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
                {'('}{'https://www.thinkwithgoogle.com/intl/zh-tw/consumer-insights/consumer-trends/shopping-season-insights-tw/amp/'}
              </p>
              <div>
                <p>{t('seo.idealState')}</p>
                <p>{t('seo.idealStateList')}</p>
                <p>{t('seo.idealStateConclusion')}</p>
                <p>{t('seo.nativeIntro')}</p>
                <p>{t('seo.nativeExperience')}</p>
              </div>
            </Column>
          </Grid>

          <Column columnClass="container mx-auto pt-20">
            <h2 className="text-4xl">{t('seo.howWeDoSeo')}</h2>
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
                  {t('seo.keywordResearch')}
                </Text>
              </Text>
              <p>
                {t('seo.keywordResearchDesc')}
              </p>
              <p>
                {t('seo.keywordResearchSteps')}
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
                  {t('seo.onPageOptimization')}
                </Text>
              </Text>
              <p>
                {t('seo.onPageDesc')}
              </p>
              <p>{t('seo.onPageSteps')}</p>
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
                  {t('seo.contentOptimization')}
                </Text>
              </Text>
              <p>
                {t('seo.contentOptimizationDesc')}
              </p>
              <p>
                {t('seo.contentOptimizationSteps')}
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
                  {t('seo.backlinkBuilding')}
                </Text>
              </Text>
              <p>
                {t('seo.backlinkBuildingDesc')}
              </p>
            </Column>
            <Column>
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/4SL1JVHvvOKSNvawuIrQ5U/9f5e78421ed786bdb9d56d2d36798402/8.png?w=1924&h=1069&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://images.ctfassets.net/rpza41pe9ev5/4OrNLcudhXkthxkyI4CzsM/46e2970665bf12dd3610d8c64a02a0ca/8.png?w=1640&h=924&q=50&fm=webp"
                alt="SEOimage2"
                loading="lazy"
                decoding="async"
              />
              <p>{t('seo.nativeIntro')}</p>
              <p>{t('seo.nativeExperience')}</p>
              <p>{t('seo.disclaimer')}</p>
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

export default withTranslation()(seoIndex)

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
