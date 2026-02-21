// Replaced Gatsby useStaticQuery with static fallback

interface ServiceScopeNode {
  icon: { url: string }
  title: string
  descriptions: { raw: string }
  order: number
}

const useServiceScope = (): ServiceScopeNode[] => {
  return []
}

export default useServiceScope
