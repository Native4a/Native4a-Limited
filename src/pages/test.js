import React, { useState } from 'react'
import Layout from '../components/layout'
import { Button, Drawer, Sidebar, TextInput } from 'flowbite-react'
import {
  HiChartPie,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from 'react-icons/hi'

const Test = (props) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => setIsOpen(false)

  return (
    <Layout location={props.location}>
      <>
        <div className="flex min-h-[50vh] items-center justify-center">
          <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
        </div>
        <Drawer backdrop={false} open={isOpen} onClose={handleClose}>
          <Drawer.Header title="MENU" titleIcon={() => <></>} />
          <Drawer.Items>
            <Sidebar
              aria-label="Sidebar with multi-level dropdown example"
              className="[&>div]:bg-transparent [&>div]:p-0"
            >
              <div className="flex h-full flex-col justify-between py-2">
                <div>
                  <form className="pb-3 md:hidden">
                    <TextInput
                      icon={HiSearch}
                      type="search"
                      placeholder="Search"
                      required
                      size={32}
                    />
                  </form>
                  <Sidebar.Items>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item href="/" icon={HiChartPie}>
                        社交媒體廣告
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/e-commerce/products"
                        icon={HiShoppingBag}
                      >
                        網站設計
                      </Sidebar.Item>
                      <Sidebar.Item href="/users/list" icon={HiUsers}>
                        SEO
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-in"
                        icon={HiLogin}
                      >
                        Backlink
                      </Sidebar.Item>
                      <Sidebar.Item
                        href="/authentication/sign-up"
                        icon={HiPencil}
                      >
                        小紅書
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </Sidebar.Items>
                </div>
              </div>
            </Sidebar>
          </Drawer.Items>
        </Drawer>
      </>
    </Layout>
  )
}

export default Test
