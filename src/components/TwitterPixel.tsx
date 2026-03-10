import React from 'react'
import { Helmet } from 'react-helmet'

interface TwitterPixelProps {
  pixelId: string
}

const TwitterPixel: React.FC<TwitterPixelProps> = ({ pixelId }) => {
  const scriptContent = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','${pixelId}');`

  return (
    <Helmet>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: scriptContent }}
      />
    </Helmet>
  )
}

export default TwitterPixel
