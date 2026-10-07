const React = require('react')

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
