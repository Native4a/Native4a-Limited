import { useStaticQuery } from 'gatsby'

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

interface UseAddCasesResult extends Array<CaseNode> {}

const useAddCases = (): UseAddCasesResult => {
  const {
    allContentfulCases: { nodes }
  } = useStaticQuery({allContentfulCases: { nodes: [] }})
  return nodes
}

export default useAddCases
