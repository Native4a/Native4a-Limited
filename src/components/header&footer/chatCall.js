import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const ChatCall = () => {
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
          <nav className="flex gap-2 justify-around bg-[#1d1d1d]/90 rounded-full p-2 content-center justify-items-center backdrop-blur-[10px]">
            <Link
              to="https://api.whatsapp.com/send/?phone=85267461301&text=你好，我想查詢SEO服務。"
              className="p-1 w-full flex gap-2 bg-[#25D366] px-5 py-2 rounded-full items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                fill-rule="evenodd"
                className=""
              >
                <g>
                  <path
                    d="M317.12 285.93c-9.69 3.96-15.88 19.13-22.16 26.88-3.22 3.97-7.06 4.59-12.01 2.6-36.37-14.49-64.25-38.76-84.32-72.23-3.4-5.19-2.79-9.29 1.31-14.11 6.06-7.14 13.68-15.25 15.32-24.87 3.64-21.28-24.18-87.29-60.92-57.38C48.62 232.97 330.7 461.46 381.61 337.88c14.4-35.03-48.43-58.53-64.49-51.95zM256 467.28c-37.39 0-74.18-9.94-106.39-28.76-5.17-3.03-11.42-3.83-17.2-2.26l-69.99 19.21 24.38-53.71a22.34 22.34 0 0 0-2.22-22.32C58.5 343.29 44.71 300.61 44.71 256c0-116.51 94.78-211.29 211.29-211.29S467.28 139.49 467.28 256c0 116.5-94.78 211.28-211.28 211.28zM256 0C114.84 0 0 114.84 0 256c0 49.66 14.1 97.35 40.89 138.74L2 480.39a22.37 22.37 0 0 0 3.34 23.76A22.403 22.403 0 0 0 22.36 512c14.42 0 93.05-24.71 113.06-30.2C172.41 501.59 213.9 512 256 512c141.15 0 256-114.85 256-256C512 114.84 397.15 0 256 0z"
                    fill="#ffffff"
                    opacity="1"
                    data-original="#000000"
                    className=""
                  ></path>
                </g>
              </svg>
              <span className="text-[#ffffff] text-sm">Whatsapp</span>
            </Link>
            <Link
              to="https://line.me/ti/p/ZqH9CPaYkE"
              className="p-1 w-full flex gap-2 bg-[#FFFFFF] px-5 py-2 rounded-full items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                className=""
              >
                <g>
                  <path
                    fill="#4caf50"
                    d="M12 .5C5.385.5 0 4.898 0 10.303c0 4.841 4.27 8.897 10.035 9.668.391.083.923.26 1.058.594.12.303.079.771.038 1.087l-.164 1.026c-.045.303-.24 1.193 1.049.649 1.291-.542 6.916-4.104 9.436-7.019 1.724-1.9 2.548-3.847 2.548-6.005C24 4.898 18.615.5 12 .5zM7.303 13.517H4.917a.636.636 0 0 1-.63-.633V8.083c0-.347.285-.634.63-.634.348 0 .63.287.63.634v4.167h1.756a.634.634 0 0 1 0 1.267zm2.466-.633a.634.634 0 0 1-.631.633.633.633 0 0 1-.627-.633V8.083c0-.347.282-.634.63-.634.346 0 .628.287.628.634zm5.741 0a.633.633 0 0 1-1.141.379l-2.443-3.338v2.958a.632.632 0 0 1-.631.633.632.632 0 0 1-.626-.633v-4.8a.63.63 0 0 1 .624-.632c.195 0 .375.105.495.256l2.462 3.351V8.083c0-.347.282-.634.63-.634.345 0 .63.287.63.634zm3.855-3.035a.634.634 0 0 1 0 1.269H17.61v1.132h1.755a.633.633 0 0 1 0 1.267h-2.386a.633.633 0 0 1-.627-.633V8.083c0-.347.282-.634.63-.634h2.386c.346 0 .627.287.627.634a.63.63 0 0 1-.63.634H17.61v1.132z"
                    opacity="1"
                    data-original="#4caf50"
                    className=""
                  ></path>
                </g>
              </svg>
              <span className="text-[#06C755] text-sm">Line</span>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default ChatCall
