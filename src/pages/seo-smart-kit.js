import React, { Component } from 'react'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Text from '../components/baseTools/text'
import SlackerBag from '../img/White_And_Blue_Illustration_Basic_SEO_Techniques_Instagram_Post.webp'
import Button from '../components/baseTools/button'
import { Accordion } from 'flowbite-react'

//Image Here//
import SEO from '../img/SEO.webp'
import Fat from '../img/fat.avif'
import Viral from '../img/viral-marketing.avif'
import Google from '../img/google.avif'
import Duplicate from '../img/duplicate.avif'
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
    // Save區域的所有狀態值
    savedVolCalc: 0,
    savedQuarCalc: 0,
    savedYearCalc: 0,
    savedCompCalc: 0,
    // 新增一個狀態來保存輸入的關鍵字
    savedKeyword: '',
    savedData: [], // 用來儲存所有資料的陣列
  }

  VolumeCalc = (event) => {
    const volume = event.target.value.trim() // 使用 Number 來處理輸入
    let volCalc = 0

    // 調整條件以允許負數
    if (volume >= 1000) {
      volCalc = 4
    } else if (volume >= 320) {
      volCalc = 3
    } else if (volume >= 200) {
      volCalc = 2
    } else if (volume >= 100) {
      volCalc = 1
    } else {
      volCalc = 0 // 這裡可以處理負數情況
    }

    this.setState({ lastVolumeValue: volume, volCalc: volCalc }, this.updateSum)
  }

  QuarterCalc = (event) => {
    let quarter = event.target.value.trim() // 去除首尾空格
    let quarCalc = 0

    // 檢查輸入是否為空或非數字
    if (quarter === '' || isNaN(quarter)) {
      quarter = '' // 將空值設為一個空字串
    } else {
      quarter = Number(quarter) // 將輸入值轉換為數字

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
    let year = event.target.value.trim() // 去除首尾空格
    let yearCalc = 0

    // 檢查輸入是否為空或非數字
    if (year === '' || isNaN(year)) {
      year = '' // 將空值設為一個空字串
    } else {
      year = Number(year) // 將輸入值轉換為數字

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
      vqycSum: this.state.vqycSum, // 將 vqycSum 添加到 newData 對象中
    }

    // 只保留最新的5筆資料
    this.setState((prevState) => ({
      savedData: [newData, ...prevState.savedData.slice(0, 4)],
    }))
  }

  updateSum = () => {
    const { volCalc, quarCalc, yearCalc, compCalc } = this.state
    const sum = volCalc + quarCalc + yearCalc + compCalc
    this.setState({ vqycSum: sum })
  }

  resetSavedData = () => {
    this.setState({ savedData: [] })
  }

  render() {
    return (
      <Layout>
        <Seo title="" description="" ogUrl="" />
        <Section SectionClass="flex justify-evenly" ContainerClass="grid">
          <div className="grid gap-4 justify-evenly pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <span className="mb-5">
              <h1 className="text-3xl md:text-5xl text-center">
                肥仔關鍵字計算機
              </h1>
              <p className="text-center">(Web測試版)</p>
            </span>
          </div>
          <div className="grid grid-cols-3 shadow-xl rounded-3xl bg-white p-6 m-8 bg-white-500/[.06] md:p-14">
            <div class="grid gap-4 xl:py-14 xl:pl-16 col-span-3 md:col-span-1">
              <div class="flex flex-col gap-2">
                <h3>Keyword：</h3>
                <input
                  class="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="text"
                  id="textDataInput"
                  placeholder="請輸入你要查詢的Keyword"
                  onChange={this.Keyword}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h3>搜索量：</h3>
                <input
                  class="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.VolumeCalc}
                  value={this.state.lastVolumeValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h3>三個月變化(%)：</h3>
                <input
                  class="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.QuarterCalc}
                  value={this.state.lastQuarValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h3>年度變化(%)：</h3>
                <input
                  class="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="number"
                  onChange={this.YearCalc}
                  value={this.state.lastYearValue}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div class="flex flex-col gap-2">
                <h3>競爭分數：</h3>
                <input
                  class="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
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
                <h4 className="text-xl pl-3">肥仔指數</h4>
                <div
                  className="flex justify-end border-2 rounded-3xl px-10 pt-10 pb-3"
                  id={styles.CalcScreen}
                >
                  <span className="text-8xl">{this.state.vqycSum}</span>分
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
            <div className="grid col-span-3 justify-start text-xs pt-2">
              <p>規則：</p>
              <ol>
                <li>
                  已儲存的資料會暫存到計算機下方的 <b>Keyword儲存區</b>
                </li>
                <li>
                  目前只提供<b>電腦版</b>，<b>平板</b> 和 <b>手機版</b>
                  待開發中。
                </li>
                <li>
                  儲存區最多可以儲存 <b>5筆 資料</b>
                  。若再儲存超過5筆資料的話，新的一筆資料將會<b>自動覆蓋</b>
                  最舊的資料。
                </li>
                <li>
                  儲存的資料只是暫存，如果網站被更新，儲存的資料將<b>被重置</b>
                  。
                </li>
                <li>
                  若想自行保存資料，請自行<b>截圖保存</b>下來。
                </li>
              </ol>
              <span>BuildVersion: v3.1.240903-1610 by Native4A</span>
            </div>
          </div>
        </Section>
        <Section ContainerClass="hidden xl:grid gap-6 justify-around mb-32 mx-10">
          <div Class="container mx-auto mt-5">
            <div Class="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div Class="flex col-span-1 lg:col-span-2 text-xl">
                <h3>Keyword儲存區</h3>
              </div>
              <div Class="flex col-span-1 lg:col-span-2 justify-end text-md">
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
              initial={{ opacity: 0, y: -20 }} // 初始狀態：透明且向上偏移
              animate={{ opacity: 1, y: 0 }} // 動畫狀態：完全可見且回到原位
              exit={{ opacity: 0, y: -20 }} // 離開狀態：透明且向上偏移
              transition={{ duration: 0.5 }} // 動畫持續時間
            >
              <div className="text-md font-semibold">
                <span>{data.Keyword}</span>
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.volCalc}</span>分
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.quarCalc}</span>分
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.yearCalc}</span>分
              </div>
              <div className="flex text-md font-semibold justify-center">
                <span>{data.compCalc}</span>分
              </div>
              <div className="flex text-xl font-bold justify-end">
                <span>{data.vqycSum}</span>分
              </div>
            </motion.div>
          ))}
        </Section>
        <Section ContainerClass="md:grid xl:hidden gap-6 justify-around mb-32 mx-10">
          <div Class="container mx-auto mt-5">
            <div Class="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div Class="flex col-span-1 items-center lg:col-span-2 text-md">
                <h3>Keyword儲存區</h3>
              </div>
              <div Class="flex col-span-1 lg:col-span-2 justify-end text-md">
                <button
                  onClick={this.resetSavedData}
                  className="rounded-3xl px-10 text-white bg-red-600"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          {this.state.savedData.map((data, index) => (
            <motion.div
              key={index}
              className="grid gap-6 shadow-xl rounded-3xl bg-white p-6 bg-white-500/[.06] mt-10"
              initial={{ opacity: 0, y: -20 }} // 初始狀態：透明且向上偏移
              animate={{ opacity: 1, y: 0 }} // 動畫狀態：完全可見且回到原位
              exit={{ opacity: 0, y: -20 }} // 離開狀態：透明且向上偏移
              transition={{ duration: 0.5 }} // 動畫持續時間
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
                <span className="flex justify-end">{data.volCalc}分</span>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center">
                  <span>3 Months Change:</span>
                </div>
                <span className="flex justify-end">{data.quarCalc}分</span>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center">
                  <span>Yearly changes:</span>
                </div>
                <span className="flex justify-end">{data.yearCalc}分</span>
              </div>
              <div className="flex justify-between">
                <div className="flex justify-start items-center">
                  <span>Competition Score:</span>
                </div>
                <span className="flex justify-end">{data.compCalc}分</span>
              </div>
              <div className="flex justify-between border-t-2 pt-5">
                <div className="flex justify-start items-center">
                  <span>Total Score:</span>
                </div>
                <span className="flex justify-end text-4xl font-bold">
                  {data.vqycSum}分
                </span>
              </div>
            </motion.div>
          ))}
        </Section>
        <Section SectionClass="bg-white p-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6 py-10">
              <div className="flex col-span-3 justify-center text-6xl">
                <img
                  src={SlackerBag}
                  alt="Girl in a jacket"
                  width="500"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col col-span-4 gap-6 justify-center text-6xl">
                <h1 className="text-3xl md:text-4xl">
                  你的關鍵字可能7天就能到頂 - SEO懶人包。
                </h1>
                <Text className="text-lg">
                  一套經native4a
                  八年SEO、超過400個獨立網站優化經驗總結，能令你在7天內排名關鍵字首頁的SEO懶人包。
                </Text>
                <Button linkto="https://shop.nativeaaaa.com.hk/">
                  立即下載SEO懶人包
                </Button>
              </div>
            </div>
            <div className="grid justify-center">
              <Text className="text-3xl md:text-4xl font-extrabold">
                Hi, 歡迎嚟到SEO懶人包簡介
              </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-6 py-24">
              <div className="flex col-span-7 md:col-span-2 justify-center text-6xl">
                <img
                  src={SEO}
                  alt="Marcus is signing"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col col-span-7 md:col-span-5 gap-6 justify-center text-6xl">
                <Text className="text-lg">
                  我曾經優化超過400網站、最快兩天內攻破超短尾關鍵字Top
                  10，8年SEO工作累積左唔少實用方法、排名捷徑、尋找出色的「肥壯關鍵字」等價值連城的SEO技巧，我總結左呢啲經驗同方法放入呢套「SEO懶人包」，入面有詳細逐步教學，可以幫你喺幾日之內排升排名到首頁，並且持續穩定。
                </Text>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div class="grid container mx-auto gap-10 p-10">
            <div class="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="flex flex-col gap-2 justify-center p-14">
                <img
                  src={Fat}
                  alt="Girl in a jacket"
                  className="w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl text-center">搵出「肥壯關鍵字」</h3>
                <Text>
                  搵出你行業中嘅潛力關鍵字，無論競爭程度，你都可以搵出超肥仔黃金關鍵字。
                </Text>
              </div>
              <div class="flex flex-col gap-2 justify-center p-14">
                <img
                  src={Viral}
                  alt="Girl in a jacket"
                  className="w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl text-center">「病毒式SEO文章」</h3>
                <Text>設計傳播力超強SEO內容、Google歡迎嘅爆數內容結構。</Text>
              </div>
              <div class="flex flex-col gap-2 justify-center p-14">
                <img
                  src={Google}
                  alt="Girl in a jacket"
                  className="w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl text-center">最快7天</h3>
                <Text>最快7天內排名首頁的方法。（2024年）</Text>
              </div>
              <div class="flex flex-col gap-2 justify-center p-14">
                <img
                  src={Duplicate}
                  alt="Girl in a jacket"
                  className="w-1/2"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl text-center">持續複製</h3>
                <Text>源源不斷從Google搵新客。</Text>
              </div>
            </div>
            <Button linkto="https://shop.nativeaaaa.com.hk/">
              立即下載SEO懶人包
            </Button>
          </div>
        </Section>
        <Section ContainerClass="flex justify-center m-auto w-[95%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[79%] p-5">
          <div className="grid ">
            <Text className="text-4xl text-center font-extrabold">
              我用SEO懶人包做到以下效果
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
                      <p>關鍵字</p>
                      <h4 className="text-3xl">智慧齒</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>行業：智慧齒</li>
                        <li>Volume: 40500</li>
                        <li>Before：#18</li>
                        <li>After：#7</li>
                        <li>用時：10days</li>
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
                      <p>關鍵字</p>
                      <h4 className="text-3xl">內衣</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>行業：功能內衣</li>
                        <li>Volume: 49500</li>
                        <li>Before：#74</li>
                        <li>After：#7</li>
                        <li>用時：4 days</li>
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
                      <p>關鍵字</p>
                      <h4 className="text-3xl">青年創業補助不用還</h4>
                    </div>
                    <div>
                      <ul className="text-gray-500 leading-loose tracking-wide">
                        <li>行業：青年創業補助</li>
                        <li>Volume: 4800</li>
                        <li>Before：#201</li>
                        <li>After：：#7</li>
                        <li>用時：2 days</li>
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
                <span>8年SEO經驗結晶，7日提升關鍵字排名的方法</span>
                <h3 className="text-3xl m-3">SEO懶人包</h3>
                <Button linkto="https://shop.nativeaaaa.com.hk/">
                  立即下載SEO懶人包
                </Button>
              </div>
              <div>
                <Accordion>
                  <Accordion.Panel>
                    <Accordion.Title>「潛力關鍵字計算機」</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        短尾轉化率低，長尾無人搜索。
                        所以要搵到黃金肥仔「肥壯關鍵字」
                      </p>
                      <p className="mb-2 text-gray-500 font-extrabold dark:text-gray-400">
                        ．找出黃金「肥壯關鍵字」
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        可以幫你計算出該Keywords的抵做指數（1～10✨）
                        並非搵最熱門，而係搵「最抵做」 幫你準確投資爆數keywords
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>「病毒式內容創作包」</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        點解有啲內容吸引人閱讀，有啲卻跳出率勁高。係因為你嘅內容並非由讀者嘅口味。
                      </p>
                      <p className="mb-2 text-gray-500 font-extrabold dark:text-gray-400">
                        ．創作病毒式內容
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        可以幫你創作出容易爆share、爆升排名的內容，好似病毒一樣喺客戶群中傳播。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>「SEO內容模板」</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        SEO內容有某些規律可以跟從，特別容易提升排名嘅內容有樣睇。
                      </p>
                      <p className="mb-2 text-gray-500 font-extrabold dark:text-gray-400">
                        ．SEO結構Template
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        超快排名，穩定不跌的SEO內容Template。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>「超勁Backlinks懶人包」</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        7天排名計劃的重中之重 Backlinks能短時間內帶你排名飛天。
                        同時都要小心選擇
                      </p>
                      <p className="mb-2 text-gray-500 font-extrabold dark:text-gray-400">
                        ．Backlinks懶人包
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        可以幫你獲得大量呢種超強排名武器。（部分涉及黑帽方法，需謹慎使用）
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>「Black-Hat技巧包」</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Black-Hat
                        SEO技巧，就好似粗口咁，唔一定要講，但最好要識。
                      </p>
                      <p className="mb-2 text-gray-500 font-extrabold dark:text-gray-400">
                        ．Black-Hat技巧包
                      </p>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Black-hat
                        SEO並非想像中咁罪惡，如果用得小心，可能會幫你網站收獲意想唔到效果。
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

export default SEOsmartKit
