import React, { Component } from 'react'
import { PageProps } from 'gatsby'
import Seo from '../components/seo'
import Section from '../components/baseTools/Section'
import Layout from '../components/layout'
import { motion } from 'framer-motion'
import Text from '../components/baseTools/text'
import SlackerBag from '../img/White_And_Blue_Illustration_Basic_SEO_Techniques_Instagram_Post.webp'
import Button from '../components/baseTools/button'
import { Accordion } from 'flowbite-react'
import Popup from 'reactjs-popup'

import WisdomTooth from '../img/wisdomTooth.webp'
import Underwear from '../img/underwear.webp'
import YouthEntrepreneurship from '../img/Youth Entrepreneurship.webp'

import * as styles from '../styles/seo-smart-kit.module.css'

interface State {
  lastVolumeValue: string
  lastQuarValue: string
  lastYearValue: string
  lastCompetitionValue: string
  vqycSum: number
  volCalc: number
  quarCalc: number
  yearCalc: number
  compCalc: number
  Keyword: string
  savedVolCalc: number
  savedQuarCalc: number
  savedYearCalc: number
  savedCompCalc: number
  savedKeyword: string
  savedData: any[]
  textColor: string
}

class SEOSmartKit extends Component<PageProps, State> {
  state: State = {
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

  render() {
    return (
      <Layout location={this.props.location}>
        <Seo
          title="SEO Smart Kit"
          description="SEO Smart Kit - Analyze and calculate keyword metrics"
          ogUrl="https://nativeaaaa.com.hk/seo-smart-kit/"
        />
        <Section>
          <div className="container mx-auto">
            <Text tag="h1" className="text-4xl font-bold">
              SEO Smart Kit
            </Text>
            <p className="text-lg mt-4">
              Use our smart kit to analyze keyword metrics and improve your SEO strategy
            </p>
          </div>
        </Section>
      </Layout>
    )
  }
}

export default SEOSmartKit
