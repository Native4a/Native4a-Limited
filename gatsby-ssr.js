const React = require('react')
const i18n = require('./src/i18n/config').default

const languageFromPath = (pathname = '/') =>
  pathname.match(/^\/(zh-CN|en|ja|zh)(?:\/|$)/)?.[1] || 'zh'

export const wrapPageElement = ({ element, props }) => {
  const language = props?.pageContext?.language || languageFromPath(props?.location?.pathname)
  if (i18n.language !== language) {
    i18n.language = language
    i18n.languages = [language, 'zh']
    void i18n.changeLanguage(language)
  }
  return element
}

const normalizePath = (pathname = '/') => {
  const segments = pathname.split('/').filter(Boolean)
  return segments.length === 0 ? '/' : `/${segments.join('/')}/`
}

const getCanonicalUrl = (pathname = '/') => {
  const normalizedPath = normalizePath(pathname)
  const canonicalPath = /^\/(?:en|ja|zh-CN|zh)(?:\/|$)/.test(normalizedPath)
    ? normalizedPath
    : normalizePath(`/zh${normalizedPath}`)
  return `https://nativeaaaa.com.hk${canonicalPath}`
}

export const onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  const canonicalUrl = getCanonicalUrl(pathname)
  let hasCanonical = false
  const headComponents = getHeadComponents()
    .flat(Infinity)
    .filter((node) => {
      const isCanonical = node && node.type === 'link' && node.props && node.props.rel === 'canonical'
      if (!isCanonical) return true
      if (hasCanonical) return false
      hasCanonical = true
      return true
    })
    .map((node) => {
      if (node && node.type === 'link' && node.props && node.props.rel === 'canonical') {
        return React.cloneElement(node, { href: canonicalUrl })
      }
      return node
    })

  if (!hasCanonical) {
    headComponents.push(React.createElement('link', { key: 'canonical', rel: 'canonical', href: canonicalUrl }))
  }

  replaceHeadComponents(headComponents)
}
