import React from 'react'

import useMediaWork from '../../hook/useMediaImage';
import * as styles from './style.module.css'

const MediaWork = () => {
    const MediaWorkImg = useMediaWork();
    return (
        <div>
            {MediaWorkImg.map((item, index) => {
                const {
                    mediaImage } = item;
                return (
                    <div key={index}>
                        <div className={styles.container}>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                <img src={mediaImage[0].url} alt="mediaImage01" width="500" height="600" />
                                <img src={mediaImage[1].url} alt="mediaImage02" width="500" height="600" />
                                <img src={mediaImage[2].url} alt="mediaImage03" width="500" height="600" />
                                <img src={mediaImage[3].url} alt="mediaImage04" width="500" height="600" />
                                <img src={mediaImage[4].url} alt="mediaImage05" width="500" height="600" />
                                <img src={mediaImage[5].url} alt="mediaImage06" width="500" height="600" />
                                <img src={mediaImage[6].url} alt="mediaImage07" width="500" height="600" />
                                <img src={mediaImage[7].url} alt="mediaImage08" width="500" height="600" />
                                <img src={mediaImage[8].url} alt="mediaImage09" width="500" height="600" />
                                <img src={mediaImage[9].url} alt="mediaImage10" width="500" height="600" />
                                <img src={mediaImage[10].url} alt="mediaImage11" width="500" height="600" />
                                <img src={mediaImage[11].url} alt="mediaImage12" width="500" height="600" />
                                <img src={mediaImage[12].url} alt="mediaImage13" width="500" height="600" />
                                <img src={mediaImage[13].url} alt="mediaImage14" width="500" height="600" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MediaWork;