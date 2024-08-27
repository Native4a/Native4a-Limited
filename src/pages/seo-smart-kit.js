import React, { Component } from 'react'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Layout from '../components/layout'
import { motion } from 'framer-motion'

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
    const volume = parseInt(event.target.value)
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
    const quarter = parseInt(event.target.value)
    let quarCalc = 0
    if (quarter >= 20) {
      quarCalc = 2
    } else if (quarter <= 19) {
      quarCalc = 1
    } else {
      quarCalc = 0
    }
    this.setState(
      { lastQuarValue: quarter, quarCalc: quarCalc },
      this.updateSum
    )
  }

  YearCalc = (event) => {
    const year = parseInt(event.target.value)
    let yearCalc = 0
    if (year >= 20) {
      yearCalc = 3
    } else if (year <= 19) {
      yearCalc = 1
    } else {
      yearCalc = 0
    }
    this.setState({ lastYearValue: year, yearCalc: yearCalc }, this.updateSum)
  }

  CompetitionCalc = (event) => {
    const comp = parseInt(event.target.value)
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
              <h1 className="text-5xl text-center">SEO Calculator</h1>
              <p className="text-center">(Web測試版)</p>
            </span>
          </div>
          <div className="grid grid-cols-3 shadow-xl rounded-3xl bg-white p-6 mb-8 bg-white-500/[.06]">
            <div className="grid gap-4 xl:py-14 xl:pl-16">
              <div className="flex flex-col gap-2">
                <h3>Keyword：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="text"
                  id="textDataInput"
                  placeholder="請輸你要查詢的Keyword"
                  onChange={this.Keyword}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>搜索量：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.VolumeCalc}
                  value={this.state.lastVolumeValue}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>三個月變化(%)：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.QuarterCalc}
                  value={this.state.lastQuarValue}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>年度變化(%)：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.YearCalc}
                  value={this.state.lastYearValue}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>競爭分數：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.CompetitionCalc}
                  value={this.state.lastCompetitionValue}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
            </div>
            <div className="grid xl:px-16 xl:py-16 col-span-2">
              <div className="flex flex-col gap-4 justify-between border-l-2 pl-10">
                <h4 className="text-xl pl-3">肥仔指數</h4>
                <div
                  className="flex justify-end border-2 rounded-3xl px-10 pt-10 pb-3"
                  id={styles.CalcScreen}
                >
                  <span className="text-8xl">{this.state.vqycSum}</span>分
                </div>
                <div className="grid gap-2 grid-cols-4">
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
                <li>目前只提供電腦版，平板 和 手機版待開發中。</li>
                <li>
                  儲存區最多可以儲存5筆資料。若再儲存超過5筆資料的話，新的一筆資料將會自動覆蓋最舊的資料。
                </li>
                <li>
                  儲存的資料只是暫存，如果網站被更新，儲存的資料將被重置。
                </li>
                <li>若想自行保存資料，可以自行截圖保存下來。</li>
              </ol>
              <span>BuildVersion: v3.1.240827-1635 by Native4A</span>
            </div>
          </div>
        </Section>
        <Section ContainerClass="grid gap-6 justify-around mb-10">
          <div Class="container mx-auto mt-5">
            <div Class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div Class="flex col-span-2 text-xl">
                <h3>Keyword儲存區</h3>
              </div>
              <div Class="flex col-span-2 justify-end text-md">
                <button
                  onClick={this.resetSavedData}
                  className="rounded-3xl px-10 text-white bg-red-600"
                >
                  ⟲ Reset
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-6 p-6">
            <div className="text-lg font-bold">
              Keyword: <span></span>
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
              <div className="flex text-md font-semibold justify-end">
                <span>{data.vqycSum}</span>分
              </div>
            </motion.div>
          ))}
        </Section>
      </Layout>
    )
  }
}

export default SEOsmartKit
