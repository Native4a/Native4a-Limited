import React from 'react'

const HyperLink = () => {

  return (
    <div className="m-5 md:m-12 text-md leading-loose underline underline-offset-8 decoration-1 text-slate-700">
      <ul className="space-y-4 list-disc pl-6">
        <li>
          <a href="/aboutAs" className="hover:text-blue-600">
            關於NATIVE4A
          </a>
        </li>
        <li>
          <a href="/backlinks" className="hover:text-blue-600">
            獨家繁中BACKLINK
          </a>
        </li>
        <li>
          <a
            href="/web-design"
            className="hover:text-blue-600"
          >
            網站設計及開發
          </a>
        </li>
        <li>
          <a
            href="/seo"
            className="hover:text-blue-600"
          >
            SEO
          </a>
        </li>
        <li>
          <a
            href="/smm-ads"
            className="hover:text-blue-600"
          >
            社交媒體廣告
          </a>
        </li>
      </ul>
    </div>
  )
}

export default HyperLink