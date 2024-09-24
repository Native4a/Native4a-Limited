import React, { Component } from 'react'
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
    // Save區域的所有狀態值
    savedVolCalc: 0,
    savedQuarCalc: 0,
    savedYearCalc: 0,
    savedCompCalc: 0,
    // 新增一個狀態來保存輸入的關鍵字
    savedKeyword: '',
    savedData: [], // 用來儲存所有資料的陣列
    textColor: 'black',
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
    return (
      <Layout>
        <Seo
          title="肥仔關鍵字計算機"
          description="肥仔關鍵字計算機是一款強大的SEO工具，幫助您輕鬆計算和分析關鍵字的效果，提升網站的搜索引擎排名。立即使用，讓您的網站脫穎而出！"
          ogUrl="seo-smart-kit"
        />
        <Section SectionClass="flex justify-evenly" ContainerClass="grid">
          <div className="grid gap-4 justify-evenly pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <span className="mb-5">
              <h1 className="text-3xl md:text-5xl text-center">
                肥仔關鍵字計算機
              </h1>
              <p className="text-center">(Beta)</p>
              <h3 className="text-center text-2xl">
                SEO & SEM 適用，幫你搵出超潛力黃金關鍵字的工具
              </h3>
            </span>
          </div>
          <div className="container mx-auto">
            <div className="grid justify-center">
              <div className="flex text-white px-8 py-1 rounded-xl bg-red-600">
                <Popup
                  trigger={
                    <p className="cursor-pointer">▶ 查看計算機教學影片</p>
                  }
                  modal
                  contentStyle=""
                >
                  {(close) => (
                    <div className={styles.modal}>
                      <button className={styles.close} onClick={close}>
                        X
                      </button>
                      {/**Put your youtube link here*/}
                      <div className={styles.videoContainer}>
                        <iframe
                          width="100%"
                          height="400"
                          src="https://www.youtube.com/embed/9hDiSH3NSGQ"
                          title="肥仔計算機教學片"
                          frameborder="0"
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
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
                <h3>Keyword：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1 w-full"
                  type="text"
                  id="textDataInput"
                  placeholder="請輸入你要查詢的Keyword"
                  onChange={this.Keyword}
                  onKeyDown={this.handleKeyDown}
                  min="-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>搜索量：</h3>
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
                <h3>三個月變化(%)：</h3>
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
                <h3>年度變化(%)：</h3>
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
                <h3>競爭分數：</h3>
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
                  <h4 className="text-xl pl-3">肥仔指數</h4>
                  <div>
                    <Text className="text-[#0ca959]">7-10分 - 必做！</Text>
                    <Text className="text-[#faab00]">5-6分 - 自己決定</Text>
                    <Text className="text-[#eb4131]">0-5分 - 果斷放棄</Text>
                  </div>
                </div>
                <div
                  className="flex justify-end border-2 rounded-3xl px-10 pt-10 pb-3"
                  id={styles.CalcScreen}
                >
                  <span style={{ color: textColor }} className="text-8xl">
                    {this.state.vqycSum}
                  </span>
                  分
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
              <p>規則：</p>
              <ol>
                <li>
                  已儲存的資料會暫存到計算機下方的 <b>Keyword儲存區</b>
                </li>
                <li>
                  目前只提供<b>電腦版</b>，<b>平板</b> 和 <b>手機版</b>
                  還在測試階段。
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
              <span>BuildVersion: v3.1.240911-1824 by Native4A</span>
            </div>
            <div className="grid col-span-1 items-center text-xs pt-2">
              <Button linkto="https://shop.nativeaaaa.com.hk/">
                下載永久使用版
              </Button>
            </div>
          </div>
        </Section>
        <Section ContainerClass="hidden xl:grid gap-6 justify-around mb-32 mx-10">
          <div className="container mx-auto mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex col-span-1 lg:col-span-2 text-xl">
                <h3>Keyword儲存區</h3>
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
          <div className="grid container mx-auto mt-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex col-span-1 items-center lg:col-span-2 text-md">
                <h3>Keyword儲存區</h3>
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
            <div>
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
                  快速提升SEO排名的全能工具
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
                    <Accordion.Title>SEO懶人包適合新手嗎？</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        SEO懶人包是一套工具，適合任何想提升排名的人，當然包括全新手。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>我具體要做什麼？</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        按照SEO懶人包步驟表，每日大約1-2小時管理你的網站，將越來越多的關鍵字做上首頁，甚至複製至多個行業。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>如何快速提升網站排名？</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        解決以下3個問題，排名立即原地上升：
                      </p>
                      <ul className="list-disc pl-10 py-10">
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            關鍵字篩選
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            先用Google
                            ads選擇大量相關關鍵字，再放入肥仔計算機篩選高回報關鍵字。
                          </p>
                        </li>
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            內客創作
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            用病毒式標題庫搵岩用標題，再用SEO內容結構template，直接套用
                          </p>
                        </li>
                        <li>
                          <h5 className="mb-2 text-gray-500 dark:text-gray-400">
                            backlinks
                          </h5>
                          <p className="mb-2 text-gray-500 dark:text-gray-400">
                            高質Backlinks源頭集合中有很多可靠的backlinks來源，任何行業都搵到，白帽黑帽都有。
                          </p>
                        </li>
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      肥壯關鍵字計算器是如何工作的？
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        收集關鍵字的過去表現，套用公式，能幫助計算出低成本+高回報的關鍵字。短尾關鍵字：「瑜伽墊」🔥肥壯關鍵字：「防滑瑜伽墊」長尾關鍵字：「初學者用的加厚防滑瑜伽墊」
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      我可以在短時間內看到效果嗎？
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        當然可以，以下幾個例子都是幾日內上升，並且穩定。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      這個工具如何幫助我創作高質內容？
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        SEO內容結構template
                        是實際驗證過嘅內容模版，最容易被Google
                        收錄的內容結構，你只需要套用到你的內容。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      SEO懶人包包含什麼樣的反向連結資源？
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        多種類型backlinks網站，無論任何行業。
                      </p>
                    </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                    <Accordion.Title>
                      這個工具如何持續幫助我獲得新客戶？
                    </Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        SEO都係有公式嘅，否則SEO公司就handle
                        唔到咁多客戶，所以，SEO懶人包是將我們過去8年經驗成功的排名方法。你可以理解為一套SEO系統，請你必須要利用這套系統複製至多個行業，令你有更多自動收入來源。
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
