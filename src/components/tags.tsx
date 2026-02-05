import React from 'react'

import * as styles from '../styles/tags.module.css'

interface TagsProps {
  tags?: string[]
}

const Tags: React.FC<TagsProps> = ({ tags }) =>
  tags?.length && tags.length > 0 && (
    <small className={styles.tags}>
      {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
