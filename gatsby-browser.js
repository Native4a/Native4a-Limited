// gatsby-browser.js
import './src/styles/global.css'
import i18n from './src/i18n/config'

const languageFromPath = (pathname = '/') =>
  pathname.match(/^\/(zh-CN|en|ja|zh)(?:\/|$)/)?.[1] || 'zh'

const syncLanguage = (pathname, pageLanguage) => {
  const language = pageLanguage || languageFromPath(pathname)
  if (i18n.language !== language) {
    i18n.language = language
    i18n.languages = [language, 'zh']
    void i18n.changeLanguage(language)
  }
}

export const wrapPageElement = ({ element, props }) => {
  syncLanguage(props?.location?.pathname, props?.pageContext?.language)
  return element
}

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
