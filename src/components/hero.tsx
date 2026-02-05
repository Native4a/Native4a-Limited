import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from '../styles/hero.module.css'

interface HeroProps {
  title: string
  content?: any
  image?: IGatsbyImageData
}

const Hero: React.FC<HeroProps> = ({ title, content, image }) => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1">
      <div className="flex justify-center ">{image && (
        <GatsbyImage className="mt-20 md:mt-28 w-5/6" alt={title} image={image} />
      )}</div>
      <div className="flex justify-center bg-white">
        <div className="bg-white">
        <h1 className={styles.title}>{title}</h1>
        {content && (
          <div className={styles.content}>{renderRichText(content)}</div>
        )}
      </div></div>
    </div>
  </div>
)

export default Hero
