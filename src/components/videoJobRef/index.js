import React from 'react'
import useVideoJobRef from '../../hook/useVideoJobRef'
import * as styles from '../../styles/video.module.css'
import Popup from "reactjs-popup"

const VideoJobsRef = () => {
    const videoJobRef = useVideoJobRef();
    return (
        <div className='contents'>
                {videoJobRef.map((item, index) => {
                    const {
                        image,companyName,videoTitle,youtubeUrl,videoAlt
                    } = item;
                    return (
                        <div key={index}>
                            <Popup
                                trigger={
                                    <div className={styles.overlay_container}>
                                        <img src={image.url} alt={videoAlt} width="500" height="600" loading="lazy" decoding="async" />
                                        <div className={styles.overlay}>{companyName}<br />{videoTitle}</div>
                                    </div>
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
                                                src={youtubeUrl}
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
                    );
                })}
        </div>
    );
}

export default VideoJobsRef