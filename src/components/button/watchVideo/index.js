import React from 'react'
import Popup from "reactjs-popup"

import * as styles from './style.module.css'

const WatchVideo = () => {
  const watchVideo = "查看影片"

  return (
    <div className="z-0">
      <Popup
        trigger={
          <button className="border-[1.5px] border-2 rounded-full border-black bg-white text-black px-7 py-1.5 font-black text-base md:text-md xl:text-xl">
            {watchVideo}
          </button>
        }
        modal
        contentStyle=""
      >
        {(close) => (
          <div className={styles.modal}>
            <button className={styles.close} onClick={close}>X</button>
            {/**Put your youtube link here*/}
            <div className={styles.videoContainer}>
              <iframe
                className={styles.responsiveIframe}
                width="100%"
                src="https://www.youtube.com/embed/B53Pg3CyDTo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default WatchVideo