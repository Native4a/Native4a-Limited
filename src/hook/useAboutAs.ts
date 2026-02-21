// Replaced Gatsby useStaticQuery with static fallback

interface AboutAsNode {
  title: string
  SubTitle: string
  description: {
    raw: any
  }
  logo: {
    url: string
  }
}

const useAboutAs = (): AboutAsNode[] => {
  return []
}

export default useAboutAs
