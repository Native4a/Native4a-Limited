import React from 'react'
import useAwards from '../../hook/useAwards'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import * as tabstyles from "../../styles/tabs.module.css"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from './style.module.css'

const Awards = () => {
    const awards = useAwards();
    return (
        <div>
            {awards.map((item, index) => {
                const {
                    title_field, subTitle_field01, subTitle_field02, awardImage_field01, awardImage_field02 } = item;
                return (
                    <div className="md:hidden shadow-md p-6 rounded-3xl bg-white mt-2" key={index}>
                        <div className="pb-8">
                            <h4 className={`${styles.highlight} flex text-[1.3rem] pt-12 pb-5 ml-2 font-bold items-center`}>
                                <span><FaSquare /></span>{renderRichText(title_field)}
                            </h4>
                            <Tabs>
                                <TabList className={tabstyles.reactTabsTabList}>
                                    <Tab className={tabstyles.reactTabsTab}>{subTitle_field01}</Tab>
                                    <Tab className={tabstyles.reactTabsTab}>{subTitle_field02}</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                                        <div className="drop-shadow p-2">
                                            <img className='rounded-sm' src={awardImage_field01[0].url} alt={awardImage_field01[0].title} />
                                        </div>
                                        <div className="drop-shadow p-2">
                                            <img className='rounded-sm' src={awardImage_field01[1].url} alt={awardImage_field01[1].title} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="grid grid-cols-2 pt-5">
                                        <div className="drop-shadow p-2">
                                            <img src={awardImage_field02[0].url} alt={awardImage_field02[0].title} />
                                        </div>
                                        <div className="drop-shadow p-2">
                                            <img src={awardImage_field02[1].url} alt={awardImage_field02[1].title} />
                                        </div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Awards;