import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import * as styles from '../../styles/navigation.module.css'

const MobileNavigation = () => {
  const [BottomNav, setBottomNav] = useState('0')

  //監聽網站滾動事件
  //當網站向下滾動距離大於 10 時，觸發條件，並更新函數狀態值
  const listenScrollEvent = () => {
    const isScrolled = window.scrollY > 10
    setBottomNav(isScrolled ? '-99px' : '0')
    // 檢查滾動方向並觸發相應的函數
    const scrollDirection = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < prevScrollY) {
        setBottomNav(isScrolled ? '0' : '-99px')
      }
      prevScrollY = currentScrollY
    }

    // 監聽滾動事件
    let prevScrollY = 0
    window.addEventListener('scroll', scrollDirection)
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <nav className="flex justify-center m-auto">
      <div className="relative inline md:hidden">
        <div
          className="fixed bottom-0 left-0 right-0 z-50 w-full px-[1rem] mb-2"
          style={{ bottom: BottomNav, transition: 'all 0.3s' }}
        >
          <nav className="flex justify-around bg-[#1d1d1d]/90 rounded-full p-2 content-center justify-items-center backdrop-blur-[10px] gap-3">
            <Link
              to="/smm-ads/"
              className="p-1 w-1/5 flex flex-col items-center justify-center hover:bg-amber-400 hover:rounded-full hover:transition hover:duration-700 hover:ease-in-out focus:bg-amber-400 focus:rounded-full"
            >
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 344.68 363"
                className={styles.materialIcons}
              >
                <path
                  className={styles.cls2}
                  d="M67.72,268.79c-2.84,1.91-7.94,4.81-14.92,6.06-4.04,.73-12,1.5-20.81-1.93-13.7-5.33-19.64-17-21.16-20.11-1.46-2.99-5.8-12.18-3.84-23.93,1.24-7.41,4.47-12.85,6.59-15.82,3.34-4.69,7.07-7.7,9.61-9.44,11.27-7.7,22.53-15.38,33.81-23.08,14.87,21.71,29.72,43.4,44.59,65.11-11.29,7.71-22.57,15.43-33.86,23.14h-.01Z"
                />
                <path
                  className={styles.cls2}
                  d="M113.18,66.73c-18.73,37.94-37.45,75.89-56.18,113.82,14.92,21.73,29.83,43.45,44.75,65.18,41.28-3.2,82.57-6.41,123.85-9.6"
                />
                <ellipse
                  className={styles.cls1}
                  cx="179.5"
                  cy="145.07"
                  rx="46.68"
                  ry="105.13"
                  transform="translate(-50.4 124.85) rotate(-33.92)"
                />
                <path
                  className={styles.cls2}
                  d="M149.66,127.63c14.38-9.04,33.44-5.11,42.9,8.5,9.78,14.07,6.26,34.05-8.17,44.07"
                />
                <line
                  className={styles.cls2}
                  x1="238.82"
                  y1="6.5"
                  x2="233.95"
                  y2="59.43"
                />
                <line
                  className={styles.cls2}
                  x1="269.45"
                  y1="91.01"
                  x2="317.87"
                  y2="58.73"
                />
                <line
                  className={styles.cls2}
                  x1="278.37"
                  y1="137.77"
                  x2="338.18"
                  y2="148.61"
                />
                <path
                  className={styles.cls2}
                  d="M130.37,348.75c1.52,1.68,6.07,6.23,13.4,7.46,1.29,.21,11.62,1.78,19.06-5.59,4.93-4.88,5.76-10.85,6-12.82,.88-7.09-1.83-12.47-2.86-14.28"
                />
                <path
                  className={styles.cls2}
                  d="M115.75,249.9c16.75,24.53,33.49,49.08,50.24,73.61"
                />
                <path
                  className={styles.cls2}
                  d="M77.8,271.58c17.52,25.73,35.05,51.45,52.57,77.18"
                />
              </svg>
              <span className={styles.menuItemLabel}>廣告服務</span>
            </Link>
            <Link
              to="/seo"
              className="p-1 w-1/5 flex flex-col items-center justify-center hover:bg-amber-400 hover:rounded-full hover:transition hover:duration-700 hover:ease-in-out focus:bg-amber-400 focus:rounded-full"
            >
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 368 368.02"
                className={styles.materialIcons}
              >
                <circle
                  className={styles.cls4}
                  cx="153.61"
                  cy="153.61"
                  r="147.61"
                />
                <circle
                  className={styles.cls4}
                  cx="153.61"
                  cy="153.61"
                  r="122.45"
                />
                <circle
                  className={styles.cls4}
                  cx="86.28"
                  cy="135.72"
                  r="18.01"
                />
                <circle
                  className={styles.cls4}
                  cx="147.39"
                  cy="197.28"
                  r="18.01"
                />
                <circle
                  className={styles.cls4}
                  cx="221.07"
                  cy="123.01"
                  r="18.01"
                />
                <circle
                  className={styles.cls4}
                  cx="307.17"
                  cy="37.86"
                  r="18.01"
                />
                <line
                  className={styles.cls4}
                  x1="34.42"
                  y1="135.72"
                  x2="68.26"
                  y2="135.72"
                />
                <line
                  className={styles.cls4}
                  x1="104.29"
                  y1="153.81"
                  x2="134.44"
                  y2="183.94"
                />
                <line
                  className={styles.cls4}
                  x1="205.82"
                  y1="138.85"
                  x2="161.77"
                  y2="182.9"
                />
                <line
                  className={styles.cls4}
                  x1="239.08"
                  y1="105.05"
                  x2="255.35"
                  y2="88.8"
                />
                <line
                  className={styles.cls4}
                  x1="277.66"
                  y1="67.02"
                  x2="294.26"
                  y2="50.41"
                />
                <line
                  className={styles.cls3}
                  x1="328.51"
                  y1="37.86"
                  x2="368"
                  y2="37.86"
                />
                <line
                  className={styles.cls4}
                  x1="263.7"
                  y1="301.22"
                  x2="300.52"
                  y2="264.4"
                />
                <path
                  className={styles.cls4}
                  d="M239.88,277.27l74.8,74.8c11.49,13.25,31.41,12.73,41.03,1.65,8.57-9.86,7.92-26.88-3.38-37.43l-74.2-74.34,74.2,74.34"
                />
              </svg>
              <span className={styles.menuItemLabel}>SEO</span>
            </Link>
            <Link
              to="/backlinks"
              className="p-1 w-1/5 flex flex-col items-center justify-center hover:bg-amber-400 hover:rounded-full hover:transition hover:duration-700 hover:ease-in-out focus:bg-amber-400 focus:rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                viewBox="0 0 100 100"
                style={{ enableBackground: 'new 0 0 512 512' }}
                className={styles.materialIcons}
              >
                <g>
                  <path
                    d="M45.298 61.86c-5.766 0-11.533-2.193-15.925-6.58-8.776-8.788-8.776-23.073-.001-31.847L43.723 9.082C52.497.307 66.783.306 75.568 9.08c4.252 4.252 6.593 9.907 6.593 15.927a22.434 22.434 0 0 1-5.766 15.05 2.97 2.97 0 0 1-4.411-3.976 16.5 16.5 0 0 0 4.238-11.074c0-4.433-1.723-8.598-4.852-11.727-6.469-6.461-16.987-6.461-23.448 0L33.571 27.63c-6.46 6.462-6.46 16.98.002 23.45 6.465 6.458 16.984 6.459 23.446-.001l.43-.43a2.968 2.968 0 1 1 4.199 4.198l-.43.43c-4.388 4.388-10.154 6.581-15.92 6.581z"
                    fill="#ffffff"
                    opacity="1"
                    dataOriginal="#000000"
                    className=""
                  ></path>
                  <path
                    d="M40.361 97.5c-5.766 0-11.532-2.193-15.925-6.58-8.466-8.477-8.829-22.078-.828-30.967a2.969 2.969 0 1 1 4.414 3.973c-5.888 6.542-5.618 16.555.614 22.794 6.466 6.461 16.984 6.458 23.446 0l14.342-14.342a16.454 16.454 0 0 0 4.86-11.729c0-4.43-1.725-8.591-4.857-11.716a16.459 16.459 0 0 0-11.723-4.862 16.48 16.48 0 0 0-11.727 4.859l-.424.423a2.97 2.97 0 0 1-4.195-4.205l.422-.42c4.253-4.252 9.908-6.596 15.924-6.596s11.67 2.344 15.92 6.6c4.255 4.243 6.6 9.898 6.6 15.917 0 6.025-2.345 11.683-6.603 15.93L56.28 90.92c-4.387 4.387-10.153 6.581-15.92 6.581z"
                    fill="#ffffff"
                    opacity="1"
                    dataOriginal="#000000"
                    className=""
                  ></path>
                  <path
                    d="M68.527 77.443a2.968 2.968 0 0 1-2.1-5.069c6.465-6.465 6.465-16.983 0-23.448-6.466-6.464-16.984-6.464-23.448 0a2.968 2.968 0 1 1-4.2-4.199c8.781-8.782 23.067-8.78 31.848 0 8.78 8.78 8.78 23.066 0 31.846-.58.58-1.34.87-2.1.87z"
                    fill="#ffffff"
                    opacity="1"
                    dataOriginal="#000000"
                    className=""
                  ></path>
                </g>
              </svg>
              <span className={styles.menuItemLabel}>Backlinks</span>
            </Link>
            <Link
              to="/web-design"
              className="p-1 w-1/5 flex flex-col items-center justify-center hover:bg-amber-400 hover:rounded-full hover:transition hover:duration-700 hover:ease-in-out focus:bg-amber-400 focus:rounded-full"
            >
              <svg
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 335.31 371.09"
                className={styles.materialIcons}
              >
                <g id="Layer_2-2">
                  <path
                    className={styles.cls7}
                    d="M289.45,54.9h16.69c12.25,0,22.18,9.93,22.18,22.18v187.46c0,12.25-9.93,22.18-22.18,22.18H29.18c-12.25,0-22.18-9.93-22.18-22.18V77.08c0-12.25,9.93-22.18,22.18-22.18H226.87"
                  />
                  <path
                    className={styles.cls7}
                    d="M255.17,17.71c1.41-1.97,5.55-7.22,12.99-9.58,1.31-.41,12.29-3.7,21.71,3.25,6.57,4.83,8.4,11.7,8.89,13.68,2.58,10.32-2.36,18.62-3.36,20.23-26.58,32.29-53.15,64.59-79.72,96.89-9.55-7.46-19.09-14.93-28.64-22.39,22.72-34.02,45.42-68.04,68.13-102.07h-.01Z"
                  />
                  <line
                    className={styles.cls7}
                    x1="208.44"
                    y1="87.7"
                    x2="240.67"
                    y2="111.79"
                  />
                  <path
                    className={styles.cls7}
                    d="M187.03,119.78c-3.46-.39-18.08-1.65-30.77,8.29-9.2,7.21-12.53,16.48-13.43,19.09-3,8.72-2.38,16.75-1.81,24.07,.49,6.29,1.25,6.27,1.9,14.7,.53,6.91,.3,10.65,1.88,11.17,1.93,.62,3.44-4.53,9.66-8,3.36-1.87,6.35-2.29,10.86-2.91,3.89-.54,5.41-.32,14.71-.22,8.46,.09,12.76,.13,15.73-.38,4.46-.78,8.67-1.5,12.73-4.36,9.21-6.48,10.2-18.63,10.43-21.45,.62-7.67-1.53-13.9-3.25-17.61"
                  />
                  <line
                    className={styles.cls7}
                    x1="13.39"
                    y1="223.79"
                    x2="35.73"
                    y2="223.79"
                  />
                  <circle
                    className={styles.cls6}
                    cx="64.47"
                    cy="223.65"
                    r="3.51"
                  />
                  <line
                    className={styles.cls7}
                    x1="93.28"
                    y1="223.65"
                    x2="328.31"
                    y2="223.65"
                  />
                  <line
                    className={styles.cls7}
                    x1="152.2"
                    y1="286.71"
                    x2="141.51"
                    y2="334.32"
                  />
                  <line
                    className={styles.cls7}
                    x1="184.13"
                    y1="286.71"
                    x2="195.4"
                    y2="334.01"
                  />
                  <line
                    className={styles.cls7}
                    x1="264.72"
                    y1="363.6"
                    x2="71.08"
                    y2="364.09"
                  />
                  <path
                    className={styles.cls7}
                    d="M101.49,363.85v-11.19c0-8.37,6.78-15.15,15.15-15.15h102.62c8.37,0,15.15,6.78,15.15,15.15v7.68"
                  />
                </g>
              </svg>
              <span className={styles.menuItemLabel}>網站設計</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavigation
