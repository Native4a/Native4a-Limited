// Replaced Gatsby useStaticQuery with static fallback
// TODO: Connect to Contentful API when environment variables are available

interface CaseNode {
  order: number
  title: string
  description: string
  slug: string
  url: string
  image: {
    url: string
  }
}

const useAddCases = (): CaseNode[] => {
  return []
}

export default useAddCases
