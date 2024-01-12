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
  <div class="container mx-auto">
    <div class="grid grid-cols-1">
      <div class="flex justify-center ">{image && (
        <GatsbyImage className="mt-20 md:mt-28 w-5/6" alt={title} image={image} />
      )}</div>
      <div class="flex justify-center bg-white">
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
