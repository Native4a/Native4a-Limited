import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Text from '../components/baseTools/text'
import SlackerBag from '../img/White_And_Blue_Illustration_Basic_SEO_Techniques_Instagram_Post.webp'
import Button from '../components/baseTools/button'
import { Accordion } from 'flowbite-react'
import Popup from 'reactjs-popup'

//Image Here//
import WisdomTooth from '../img/wisdomTooth.webp'
import Underwear from '../img/underwear.webp'
import YouthEntrepreneurship from '../img/Youth Entrepreneurship.webp'

//CSS here//
import * as styles from '../styles/seo-smart-kit.module.css'

class SEOsmartKit extends Component {
  state = {
    lastVolumeValue: '',
    lastQuarValue: '',
    lastYearValue: '',
    lastCompetitionValue: '',
    vqycSum: 0,
    volCalc: 0,
    quarCalc: 0,
    yearCalc: 0,
    compCalc: 0,
    Keyword: '',
    savedVolCalc: 0,
    savedQuarCalc: 0,
    savedYearCalc: 0,
    savedCompCalc: 0,
    savedKeyword: '',
    savedData: [],
    textColor: 'black',
  }

  VolumeCalc = (event) => {
    const volume = event.target.value.trim()
    let volCalc = 0
    if (volume >= 1000) {
      volCalc = 4
    } else if (volume >= 320) {
      volCalc = 3
    } else if (volume >= 200) {
      volCalc = 2
    } else if (volume >= 100) {
      volCalc = 1
    } else {
      volCalc = 0
    }
    this.setState({ lastVolumeValue: volume, volCalc: volCalc }, this.updateSum)
  }

  QuarterCalc = (event) => {
    let quarter = event.target.value.trim()
    let quarCalc = 0
    if (quarter === '' || isNaN(quarter)) {
      quarter = ''
    } else {
      quarter = Number(quarter)
      if (quarter >= 20) {
        quarCalc = 2
      } else if (quarter >= 0) {
        quarCalc = 1
      } else {
        quarCalc = 0
      }
    }
    this.setState(
      { lastQuarValue: quarter, quarCalc: quarCalc },
      this.updateSum
    )
  }

  YearCalc = (event) => {
    let year = event.target.value.trim()
    let yearCalc = 0
    if (year === '' || isNaN(year)) {
      year = ''
    } else {
      year = Number(year)
      if (year >= 20) {
        yearCalc = 3
      } else if (year >= 1) {
        yearCalc = 1
      } else {
        yearCalc = 0
      }
    }
    this.setState({ lastYearValue: year, yearCalc: yearCalc }, this.updateSum)
  }

  CompetitionCalc = (event) => {
    const comp = Number(event.target.value)
    let compCalc = 0
    if (comp >= 80) {
      compCalc = 0
    } else if (comp <= 79) {
      compCalc = 1
    } else {
      compCalc = 0
    }
    this.setState(
      { lastCompetitionValue: comp, compCalc: compCalc },
      this.updateSum
    )
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.saveAllCalc()
    }
  }

  Keyword = (event) => {
    this.setState({ Keyword: event.target.value })
  }

  saveAllCalc = () => {
    const newData = {
      Keyword: this.state.Keyword,
      volCalc: this.state.volCalc,
      quarCalc: this.state.quarCalc,
      yearCalc: this.state.yearCalc,
      compCalc: this.state.compCalc,
      vqycSum: this.state.vqycSum,
    }
    this.setState((prevState) => ({
      savedData: [newData, ...prevState.savedData.slice(0, 4)],
    }))
  }

  updateSum = () => {
    const { volCalc, quarCalc, yearCalc, compCalc } = this.state
    const sum = volCalc + quarCalc + yearCalc + compCalc
    this.setState({ vqycSum: sum }, () => {
      if (this.state.vqycSum >= 7) {
        this.setState({ textColor: '#0ca959' })
      } else if (this.state.vqycSum >= 5 && this.state.vqycSum <= 6) {
        this.setState({ textColor: '#faab00' })
      } else if (this.state.vqycSum >= 0 && this.state.vqycSum <= 4) {
        this.setState({ textColor: '#eb4131' })
      } else {
        this.setState({ textColor: 'black' })
      }
    })
  }

  resetSavedData = () => {
    this.setState({ savedData: [] })
  }

  render() {
    const { textColor } = this.state
    const { t } = this.props
    return (
      <Layout>
        <Seo
          title={t('seoSmartKit.metaTitle')}
          description={t('seoSmartKit.metaDescription')}
          ogUrl="seo-smart-kit"
        />
        <Section SectionClass="flex justify-evenly" ContainerClass="grid">
          <div className="grid gap-4 justify-evenly pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <span className="mb-5">
              <h1 className="text-3xl md:text-5xl text-center">
                {t('seoSmartKit.title')}
              </h1>
              <p className="text-center">(Beta)</p>
              <h3 className="text-center text-2xl">
                {t('seoSmartKit.subtitle')}
              </h3>
            </span>
          </div>
          <div className="container mx-auto">
            <div className="grid justify-center">
              <div className="flex text-white px-8 py-1 rounded-xl bg-red-600">
                <Popup
                  trigger={
                    <p className="cursor-pointer">{'▶ '}{t('seoSmartKit.watchVideo')}</p>
                  }
                  modal
                  contentStyle=""
                >
                  {(close) => (
                    <div className={styles.modal}>
                      <button className={styles.close} onClick={close}>
                        X
                      </button>
                      <div className={styles.videoContainer}>
                        <iframe
                          width="100%"
                          height="400"
                          src="https://www.youtube.com/embed/9hDiSH3NSGQ"
                          title={t('seoSmartKit.metaTitle')}
                          frameBorder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 shadow-xl rounded-3xl bg-white p-6 m-8 bg-white-500/[.06] md:p-7">
            <div className="grid gap-4 md:col-span-1 md:pr-7 xl:py-14 xl:pl-16 col-span-3">
              <div className="flex flex-col gap-2">
                <h3>{t('seoSmartKit.keywordLabel')}</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="text"
                  id="textDataInput"
                  placeholder={t('seoSmartKit.keywordPlaceholder')}
                  onChange={this.Keyword}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>{t('seoSmartKit.searchVolume')}</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.VolumeCalc}
                  value={this.state.lastVolumeValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>{t('seoSmartKit.threeMonthChange')}</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.QuarterCalc}
                  value={this.state.lastQuarValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>{t('seoSmartKit.yearlyChange')}</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.YearCalc}
                  value={this.state.lastYearValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>{t('seoSmartKit.competitionScore')}</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.CompetitionCalc}
                  value={this.state.lastCompetitionValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
            </div>
            <div className="grid xl:px-16 xl:py-16 col-span-3 md:col-span-2">
              <div className="flex flex-col gap-4 justify-between border-l-2 p-5 my-10">
                <div className="flex justify-between">
                  <h4 className="text-xl pl-3">{t('seoSmartKit.fatIndex')}</h4>
                  <div>
                    <Text className="text-[#0ca959]">{t('seoSmartKit.mustDo')}</Text>
                    <Text className="text-[#faab00]">{t('seoSmartKit.selfDecide')}</Text>
                    <Text className="text-[#eb4131]">{t('seoSmartKit.giveUp')}</Text>
                  </div>
                </div>
                <div
                  className="flex justify-end border-2 rounded-3xl px-10 pt-10 pb-3"
                  id={styles.CalcScreen}
                >
                  <span style={{ color: textColor }} className="text-8xl">
                    {this.state.vqycSum}
                  </span>
                  {t('seoSmartKit.point')}
                </div>
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                  <div className="flex flex-col justify-between border-2 rounded-3xl p-5">
                    <h4>
                      search
                      <br />
                      volume
                    </h4>
                    <span className="text-3xl">{this.state.volCalc}</span>
                  </div>
                  <div className="flex flex-col justify-between border-2 rounded-3xl p-5">
                    <h4>
                      3 Months
                      <br />
                      Change
                    </h4>
                    <span className="text-3xl">{this.state.quarCalc}</span>
                  </div>
                  <div className="flex flex-col justify-between border-2 rounded-3xl p-5">
                    <h4>
                      Yearly
                      <br />
                      changes
                    </h4>
                    <span className="text-3xl">{this.state.yearCalc}</span>
                  </div>
                  <div className="flex flex-col justify-between border-2 rounded-3xl p-5">
                    <h4>
                      Competition
                      <br />
                      Score
                    </h4>
                    <span className="text-3xl">{this.state.compCalc}</span>
                  </div>
                </div>
                <div>
                  <button
                    className="download-button transform active:scale-95 bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-3xl font-bold tracking-widest w-full"
                    onClick={this.saveAllCalc}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            <div className="grid col-span-2 justify-start text-xs pt-2">
              <p>{t('seoSmartKit.rules')}</p>
              <ol>
                <li>
                  {t('seoSmartKit.rule1')} <b>{t('seoSmartKit.rule1Bold')}</b>
                </li>
                <li>
                  {t('seoSmartKit.rule2Desktop')}<b>{t('seoSmartKit.rule2DesktopBold')}</b>{'，'}<b>{t('seoSmartKit.rule2Tablet')}</b> {'和'} <b>{t('seoSmartKit.rule2Mobile')}</b>
                  {t('seoSmartKit.rule2End')}
                </li>
                <li>
                  {t('seoSmartKit.rule3')}<b>{t('seoSmartKit.rule3Bold')}</b>
                  {t('seoSmartKit.rule3End')}<b>{t('seoSmartKit.rule3EndBold')}</b>
                  {t('seoSmartKit.rule3EndFinal')}
                </li>
                <li>
                  {t('seoSmartKit.rule4')}<b>{t('seoSmartKit.rule4Bold')}</b>{'。'}
                </li>
                <li>
                  {t('seoSmartKit.rule5')}<b>{t('seoSmartKit.rule5Bold')}</b>{t('seoSmartKit.rule5End')}
                </li>
              </ol>
              <span>BuildVersion: v3.1.240911-1824 by Native4A</span>
            </div>
            <div className="grid col-span-1 items-center text-xs pt-2">
              <Button linkto="https://shop.nativeaaaa.com.hk/product/seo%e6%87%b6%e4%ba%ba%e5%8c%85_7%e5%a4%a9%e4%b8%8a%e9%a6%96%e9%a0%81%e5%85%b6%e5%af%a6%e5%94%94%e9%9b%a3/">
                {t('seoSmartKit.downloadPermanent')}
              </Button>
            </div>
          </div>
        </Section>
        <Section ContainerClass="hidden xl:grid gap-6 justify-around mb-32 mx-10">
          <div className="container mx-auto mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex col-span-1 lg:col-span-2 text-xl">
                <h3>{t('seoSmartKit.keywordStorage')}</h3>
              </div>
              <div className="flex col-span-1 lg:col-span-2 justify-end text-md">
                <button
                  onClick={this.resetSavedData}
                  className="rounded-3xl px-10 text-white bg-red-600"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 p-6">
            <div className="text-lg font-bold">
              <span>Keyword: </span>
            </div>
            <div className="flex text-lg font-bold justify-center border-r-2 px-3">
              <span>search volume</span>
            </div>
            <div className="flex text-lg font-bold justify-center border-r-2 px-3">
              <span>3 Months Change</span>
            </div>
            <div className="flex text-lg font-bold justify-center border-r-2 px-3">
              <span>Yearly changes</span>
            </div>
            <div className="flex text-lg font-bold justify-center px-3">
              <span>Competition Score</span>
            </div>
            <div className="flex text-lg font-bold justify-end px-3">
              <span>Total Score</span>
            </div>
          </div>
          {this.state.savedData.map((data, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-6 gap-6 shadow-xl rounded-3xl bg-white p-6 bg-white-500/[.06]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-md font-semibold">
                <span>{data.Keyword}</span>
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.volCalc}</span>{t('seoSmartKit.point')}
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.quarCalc}</span>{t('seoSmartKit.point')}
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.yearCalc}</span>{t('seoSmartKit.point')}
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.compCalc}</span>{t('seoSmartKit.point')}
              </div>
              <div className="flex text-xl font-bold justify-end">
                <span>{data.vqycSum}</span>{t('seoSmartKit.point')}
              </div>
            </motion.div>
          ))}
        </Section>
        <Section ContainerClass="md:grid xl:hidden gap-6 justify-around mb-32 mx-10">
          <div className="grid container mx-auto mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex col-span-1 items-center lg:col-span-2 text-md">
                <h3>{t('seoSmartKit.keywordStorage')}</h3>
              </div>
              <div className="flex col-span-1 lg:col-span-2 justify-end text-md">
                <button
                  onClick={this.resetSavedData}
                  className="rounded-3xl px-10 text-white bg-red-600"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Section
          SectionClass="md:flex md:justify-evenly"
          ContainerClass="md:grid md:grid-cols-2 lg:grid-cols-3 xl:hidden gap-6 justify-around mb-32 mx-10 md:w-10/12"
        >
          {this.state.savedData.map((data, index) => (
            <div key={index}>
              <motion.div
                className="grid gap-6 shadow-xl rounded-3xl bg-white p-6 bg-white-500/[.06] mt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between font-semibold border-b-2 pb-5">
                  <div className="flex justify-start items-center text-md">
                    <span>Keyword:</span>
                  </div>
                  <span className="flex justify-end text-xl font-bold">
                    {data.Keyword}
                  </span>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start items-center">
                    <span>search volume:</span>
                  </div>
                  <span className="flex justify-end">{data.volCalc}{t('seoSmartKit.point')}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start items-center">
                    <span>3 Months Change:</span>
                  </div>
                  <span className="flex justify-end">{data.quarCalc}{t('seoSmartKit.point')}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start items-center">
                    <span>Yearly changes:</span>
                  </div>
                  <span className="flex justify-end">{data.yearCalc}{t('seoSmartKit.point')}</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start items-center">
                    <span>Competition Score:</span>
                  </div>
                  <span className="flex justify-end">{data.compCalc}{t('seoSmartKit.point')}</span>
                </div>
                <div className="flex justify-between border-t-2 pt-5">
                  <div className="flex justify-start items-center">
                    <span>Total Score:</span>
                  </div>
                  <span className="flex justify-end text-4xl font-bold">
                    {data.vqycSum}{t('seoSmartKit.point')}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </Section>
        <Section SectionClass="bg-white p-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6 py-10">
              <div className="flex col-span-3 justify-center text-6xl">
                <img
                  src={SlackerBag}
                  alt="Slacker Bag"
                  width="500"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col col-span-4 gap-6 justify-center text-6xl">
                <h1 className="text-3xl md:text-4xl">
                  {t('seoSmartKit.seoToolTitle')}
                </h1>
                <Text className="text-lg">
                  {t('seoSmartKit.seoToolDesc')}
                </Text>
                <Button linkto="https://shop.nativeaaaa.com.hk/product/seo%e6%87%b6%e4%ba%ba%e5%8c%85_7%e5%a4%a9%e4%b8%8a%e9%a6%96%e9%a0%81%e5%85%b6%e5%af%a6%e5%94%94%e9%9b%a3/">
                  {t('seoSmartKit.downloadSmartKit')}
                </Button>
              </div>
            </div>
          </div>
        </Section>
        <Section ContainerClass="flex justify-center m-auto w-[95%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[79%] p-5">
          <div className="grid ">
            <Text className="text-4xl text-center font-extrabold">
              {t('seoSmartKit.resultsTitle')}
            </Text>
            <div className="container mx-auto mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="col-span-3">
                  <img
                    src={WisdomTooth}
                    alt="WisdomTooth Data"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex col-span-2 items-center p-10">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p>{t('seoSmartKit.keywordLabel2')}</p>
                      <h4 className="text-3xl">{t('seoSmartKit.case1Keyword')}</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>{t('seoSmartKit.case1Industry')}</li>
                        <li>Volume: 40500</li>
                        <li>{'Before：#18'}</li>
                        <li>{'After：#7'}</li>
                        <li>{t('seoSmartKit.case1Time')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="col-span-3">
                  <img
                    src={Underwear}
                    alt="Underwear Data"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex col-span-2 items-center p-10">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p>{t('seoSmartKit.keywordLabel2')}</p>
                      <h4 className="text-3xl">{t('seoSmartKit.case2Keyword')}</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>{t('seoSmartKit.case2Industry')}</li>
                        <li>Volume: 49500</li>
                        <li>{'Before：#74'}</li>
                        <li>{'After：#7'}</li>
                        <li>{t('seoSmartKit.case2Time')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="col-span-3">
                  <img
                    src={YouthEntrepreneurship}
                    alt="Youth Entrepreneurship Data"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex col-span-2 items-center p-10">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p>{t('seoSmartKit.keywordLabel2')}</p>
                      <h4 className="text-3xl">{t('seoSmartKit.case3Keyword')}</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>{t('seoSmartKit.case3Industry')}</li>
                        <li>Volume: 4800</li>
                        <li>{'Before：#201'}</li>
                        <li>{'After：#7'}</li>
                        <li>{t('seoSmartKit.case3Time')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container mx-auto mb-10 p-3">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col items-center text-white p-10 border-2 border-gray-300 rounded-xl bg-gray-800">
                <span>{t('seoSmartKit.ctaExperience')}</span>
                <h3 className="text-3xl m-3">{t('seoSmartKit.ctaTitle')}</h3>
                <Button linkto="https://shop.nativeaaaa.com.hk/product/seo%e6%87%b6%e4%ba%ba%e5%8c%85_7%e5%a4%a9%e4%b8%8a%e9%a6%96%e9%a0%81%e5%85%b6%e5%af%a6%e5%94%94%e9%9b%a3/">
                  {t('seoSmartKit.downloadSmartKit')}
                </Button>
              </div>
              <div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>{t('seoSmartKit.faq1Q')}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq1A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>{t('seoSmartKit.faq2Q')}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq2A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>{t('seoSmartKit.faq3Q')}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq3A')}
                      </p>
                      <ul className="list-disc pl-10 py-10">
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item1Title')}
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item1Desc')}
                          </p>
                        </li>
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item2Title')}
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item2Desc')}
                          </p>
                        </li>
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item3Title')}
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            {t('seoSmartKit.faq3Item3Desc')}
                          </p>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      {t('seoSmartKit.faq4Q')}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq4A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      {t('seoSmartKit.faq5Q')}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq5A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      {t('seoSmartKit.faq6Q')}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq6A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      {t('seoSmartKit.faq7Q')}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq7A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      {t('seoSmartKit.faq8Q')}
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {t('seoSmartKit.faq8A')}
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default withTranslation()(SEOsmartKit)
