import React from 'react'
import useClients from '../../hook/useClients'
import * as styles from '../../styles/index.module.css'
import Popup from 'reactjs-popup'
import StarRatings from 'react-star-ratings'

const Clients = () => {
  const clients = useClients()
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {clients.map((item, index) => {
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
                      alt="YouTube video"
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
                {(close) => (
                  <div className={styles.modal}>
                    <button className={styles.close} onClick={close}>
                      X
                    </button>
                    {/**Put your youtube link here*/}
                    <div className={styles.videoContainer}>
                      <iframe
                        className={styles.responsiveIframe}
                        width="100%"
                        src={url}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </Popup>
              <p className="text-md mt-4 text-center px-6 py-1 bg-amber-500 rounded-full font-bold">
                {clientFeedback.internal.content}
              </p>
              <div className="w-10/12 m-5">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="">
                    <img
                      className="col-end-3 rounded-full"
                      src={companyLogo.url}
                      alt="service_Video_Production"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="pl-4 col-start-3 col-end-9">
                      <p>
                        <b>{clientsName}</b>
                      </p>
                      <p className="text-sm">
                        {companyName} {clientsPosition}
                      </p>
                      <StarRatings
                        rating={ranking}
                        starRatedColor="#ffaa22"
                        starHoverColor="#ffaa22"
                        starDimension="18px"
                        starSpacing="4px"
                        numberOfStars={ranking}
                        name="rating"
                        svgIconViewBox="0 0 1024 1024"
                        svgIconPath="M1008.056 454.562c-72.046 87.755-199.442 232.63-199.442 232.63s20.836 159.064 32.514 267.717c5.077 55.339-34.822 79.272-80.005 57.7-85.98-43.192-216.818-110.113-246.25-125.192-29.952 14.928-162.103 80.744-248.973 123.836-45.705 21.52-86.082-2.408-80.945-57.647 11.833-108.493 32.883-267.403 32.883-267.403S88.979 541.633 16.098 453.99c-25.758-31.83-9.219-77.076 41.57-85.395 103.567-19.581 264.104-50.79 264.104-50.79S409.58 155.963 465.134 56.846c30.576-60.313 51.728-53.35 55.345-51.574 9.423 3.246 24.295 14.975 43.712 51.626 54.923 99.27 141.74 261.326 141.74 261.326s158.649 31.212 261.012 50.842c50.178 8.368 66.564 53.666 41.113 85.496z"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Clients
