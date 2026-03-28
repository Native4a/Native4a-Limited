// gatsby-browser.js
import './src/styles/global.css'
import './src/i18n/config'

// Prevent scroll to top when only the language prefix changes
export const shouldUpdateScroll = ({ routerProps, prevRouterProps }) => {
  if (!prevRouterProps) return true
  
  const currentPath = routerProps.location.pathname
  const prevPath = prevRouterProps.location.pathname
  
  // Remove language prefix to compare base paths
  const stripLangPrefix = (path) => path.replace(/^\/(en|ja|zh-CN|zh(?!-CN))(\/|$)/, '/')
  
  const currentBasePath = stripLangPrefix(currentPath)
  const prevBasePath = stripLangPrefix(prevPath)
  
  // If only language changed (same base path), don't scroll
  if (currentBasePath === prevBasePath) {
    return false
  }
  
  return true
}
