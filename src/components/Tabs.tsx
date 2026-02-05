import React from "react"
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import * as styles from "../styles/tabs.module.css"

interface TabData {
  heading: string
  body: React.ReactNode
}

interface TabsProps {
  data: TabData[]
}

const Tabs: React.FC<TabsProps> = ({ data }) => (
  <TabsComponent>
    <TabList className={styles.reactTabsTabList}>
      {data.map(({ heading }, i) => (
        <Tab className={styles.reactTabsTab} key={i}>{heading}</Tab>
      ))}
    </TabList>
    {data.map(({ body }, i) => (
      <TabPanel key={i}>{body}</TabPanel>
    ))}
  </TabsComponent>
)

export default Tabs
