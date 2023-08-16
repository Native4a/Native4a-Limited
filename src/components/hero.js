import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from '../styles/hero.module.css'
/*<div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.title}>{subtitle}</h2>
      
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
      
    </div>
  </div>*/
const Hero = ({ title, content, image }) => (
    <div className="flex items-end m-[0 auto] min-h-[200px] relative">
    {image && (
      <GatsbyImage className="mt-28 h-[61.8vh] w-full" alt={title} image={image} />
    )}
    <div className="absolute pl-6 bg-white">
      <h1 className={styles.title}>{title}</h1>
      
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero
