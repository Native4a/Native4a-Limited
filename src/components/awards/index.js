import React from 'react'
import useClientLogo from '../../hook/useClientLogo'
import { FaSquare } from "@react-icons/all-files/fa/FaSquare"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import * as styles from "../../styles/tabs.module.css"


const Awards = () => {
    const clientLogo = useClientLogo();
    return (
        <div>
            {clientLogo.map((item, index) => {
                const {
                    awardImage, mediaReport } = item;
                return (
                    <div className="md:hidden shadow-md p-6 rounded-3xl bg-white mt-2" key={index}>
                        <div className="pb-8">
                            <h4 className="flex text-2xl pt-12 ml-2 font-bold">
                                <span><FaSquare /></span>
                                「Native4a」品牌<br />獲獎的廣告公司
                            </h4>
                            <Tabs>
                                <TabList className={styles.reactTabsTabList}>
                                    <Tab className={styles.reactTabsTab}>年度獎項</Tab>
                                    <Tab className={styles.reactTabsTab}>媒體報導</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                                        <div className="drop-shadow p-2">
                                            <img className='rounded-sm' src={awardImage[0].url} alt={awardImage[0].title} />
                                        </div>
                                        <div className="drop-shadow p-2">
                                            <img className='rounded-sm' src={awardImage[1].url} alt={awardImage[1].title} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="grid grid-cols-2 pt-5">
                                        <div className="drop-shadow p-2">
                                            <img src={mediaReport[0].url} alt={mediaReport[0].title} />
                                        </div>
                                        <div className="drop-shadow p-2">
                                            <img src={mediaReport[1].url} alt={mediaReport[1].title} />
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