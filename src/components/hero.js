import React from 'react'
//import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from '../styles/hero.module.css'
//import { style } from '@mui/system'
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
const Hero = ({ title, content }) => (
  <div className={styles.hero}>
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && (
        <div className={styles.content}>{renderRichText(content)}</div>
      )} 
    </div>
  </div>
)

export default Hero
