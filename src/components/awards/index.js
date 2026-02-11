import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaSquare } from '@react-icons/all-files/fa/FaSquare'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import * as tabstyles from '../../styles/tabs.module.css'
import * as styles from './style.module.css'

import Award01 from '../../img/native4aAward01.webp'
import Award02 from '../../img/native4aAward02.webp'
import Medaia01 from '../../img/native4aMedia01.png'
import Medaia02 from '../../img/native4aMedia02.png'

import Text from '../baseTools/text'

const Awards = () => {
  const { t } = useTranslation()

  return (
    <div className="md:hidden shadow-md p-3 rounded-3xl bg-white mt-2">
      <div className="pb-8">
        <Text
          tag="h4"
          className={`${styles.highlight} flex text-[1.3rem] pt-12 pb-5 ml-2 font-bold items-center indent-[-1rem]`}
        >
          <span className="mr-2">
            <FaSquare />
          </span>
          <Text tag="p" className="pl-3">
            {t('awards.title')}
          </Text>
        </Text>

        <Tabs>
          <TabList className={tabstyles.reactTabsTabList}>
            <Tab className={tabstyles.reactTabsTab}>{t('awards.annualAwards')}</Tab>
            <Tab className={tabstyles.reactTabsTab}>{t('awards.mediaFeatures')}</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 pt-5 gap-4">
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Award01}
                  alt={t('awards.award01Alt')}
                />
              </div>
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Award02}
                  alt={t('awards.award02Alt')}
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 pt-5 gap-4">
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Medaia01}
                  alt={t('awards.media01Alt')}
                />
              </div>
              <div className="drop-shadow p-2">
                <img
                  className="rounded-sm w-full h-auto object-contain"
                  src={Medaia02}
                  alt={t('awards.media02Alt')}
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Awards
