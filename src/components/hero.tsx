import React from 'react'

import * as styles from '../styles/hero.module.css'

interface HeroProps {
  title: string
  content?: any
  image?: string
}

const Hero: React.FC<HeroProps> = ({ title, content, image }) => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1">
      <div className="flex justify-center ">{image && (
        <img className="mt-20 md:mt-28 w-5/6" alt={title} src={image} />
      )}</div>
      <div className="flex justify-center bg-white">
        <div className="bg-white">
        <h1 className={styles.title}>{title}</h1>
        {content && (
          <div className={styles.content}>{content}</div>
        )}
      </div></div>
    </div>
  </div>
)

export default Hero
