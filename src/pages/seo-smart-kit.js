import React, { Component } from 'react'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Layout from '../components/layout'

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

  updateSum = () => {
    const { volCalc, quarCalc, yearCalc, compCalc } = this.state
    const sum = volCalc + quarCalc + yearCalc + compCalc
    this.setState({ vqycSum: sum })
  }

  render() {
    return (
      <Layout>
        <Seo title="" description="" ogUrl="" />
        <Section SectionClass="flex justify-evenly" ContainerClass="grid gap-6">
          <div className="grid gap-4 justify-evenly pt-32 lg:pt-22 xl:pt-22 2xl:pt-36">
            <span>
              <h1 className="text-5xl text-center">SEO Calculator</h1>
              <p className="text-center">(測試版)</p>
            </span>
          </div>
          <div className="grid grid-cols-3 shadow-xl rounded-3xl bg-white p-6 mb-20 bg-white-500/[.06]">
            <div className="grid gap-4 xl:py-14 xl:pl-16">
              <div className="flex flex-col gap-2">
                <h3>搜索量：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.VolumeCalc}
                  value={this.state.lastVolumeValue}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>三個月變化(%)：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.QuarterCalc}
                  value={this.state.lastQuarValue}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>年度變化(%)：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.YearCalc}
                  value={this.state.lastYearValue}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3>競爭分數：</h3>
                <input
                  className="border-2 rounded-lg px-3 pt-2 pb-1"
                  type="number"
                  onChange={this.CompetitionCalc}
                  value={this.state.lastCompetitionValue}
                />
              </div>
            </div>
            <div className="grid xl:px-16 xl:py-16 col-span-2">
              <div className="flex flex-col gap-4 justify-between border-l-2 pl-10">
                <h4 className="text-xl pl-3">肥仔指數</h4>
                <div
                  className="flex justify-end border-2 rounded-3xl p-10"
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
                      Three
                      <br />
                      Months
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
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default SEOsmartKit
