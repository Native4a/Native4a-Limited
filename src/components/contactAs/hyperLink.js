import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import useContactAs from '../../hook/useContactAs'

const HyperLink = () => {
  const contactAs = useContactAs()
  return (
    <div>
      {contactAs.map((item, index) => {
        const { list } = item
        return (
          <div
            className="m-5 md:m-12 text-md leading-loose underline underline-offset-8 decoration-1 text-slate-700"
            key={index}
          >
            {renderRichText(list)}
          </div>
        )
      })}
    </div>
  )
}
export default HyperLink
