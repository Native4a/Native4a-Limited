// gatsby-plugin-canonical-urls and react-helmet both emit a canonical link.
// Pages listed here must ship exactly one canonical in the static HTML.
const SINGLE_CANONICAL_PATHS = new Set(['/zh/geo/'])

const normalizePath = (pathname = '/') => (pathname.endsWith('/') ? pathname : `${pathname}/`)

export const onPreRenderHTML = ({ pathname, getHeadComponents, replaceHeadComponents }) => {
  if (!SINGLE_CANONICAL_PATHS.has(normalizePath(pathname))) return

  let hasCanonical = false
  const headComponents = getHeadComponents()
    .flat(Infinity)
    .filter((node) => {
      const isCanonical = node && node.type === 'link' && node.props && node.props.rel === 'canonical'
      if (!isCanonical) return true
      if (hasCanonical || !node.props.href) return false
      hasCanonical = true
      return true
    })

  replaceHeadComponents(headComponents)
}
