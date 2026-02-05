import React from 'react'
import useClients from '../../hook/useClients'
import * as styles from '../../styles/index.module.css'
import Popup from 'reactjs-popup'
import StarRatings from 'react-star-ratings'
import Section from '../baseTools/Section'

const Clients: React.FC = () => {
  const clients = useClients()
  return (
    <Section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {clients.map((item: any, index: number) => {
          const {
            mainVisual,
            companyLogo,
            companyName,
            clientsName,
            clientsPosition,
            clientFeedback,
            url,
            ranking,
          } = item
          return (
            <div key={index}>
              <Popup
                trigger={
                  <div className={styles.overlay_container}>
                    <img
                      src={mainVisual.url}
                      alt="client video"
                      width="500"
                      height="600"
                      className="rounded-sm"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                }
                modal
                contentStyle=""
              >
                {(close: any) => (
                  <div className={styles.modal}>
                    <button className={styles.close} onClick={close}>
                      X
                    </button>
                    <div className={styles.videoContainer}>
                      <iframe
                        className={styles.responsiveIframe}
                        width="100%"
                        src={url}
                        title="client video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </Popup>
              <div className={styles.clientsInfo}>
                <img
                  src={companyLogo.url}
                  alt={companyName}
                  className="w-16"
                />
                <h4 className="text-xl font-bold">{clientsName}</h4>
                <p className="text-sm">{clientsPosition}</p>
                <StarRatings
                  rating={ranking}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
                <p className="text-sm">{clientFeedback?.internal?.content || ''}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Clients
