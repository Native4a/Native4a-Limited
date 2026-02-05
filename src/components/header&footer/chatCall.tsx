import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const ChatCall: React.FC = () => {
  const [BottomNav, setBottomNav] = useState('0')

  const listenScrollEvent = () => {
    const isScrolled = window.scrollY > 10
    setBottomNav(isScrolled ? '-99px' : '0')
    const scrollDirection = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < prevScrollY) {
        setBottomNav(isScrolled ? '0' : '-99px')
      }
      prevScrollY = currentScrollY
    }

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
