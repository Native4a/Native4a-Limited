import { graphql, useStaticQuery } from 'gatsby'

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

interface CasesQuery {
  allContentfulCases: {
    nodes: CaseNode[]
  }
}

const useAddCases = (): CaseNode[] => {
  const {
    allContentfulCases: { nodes },
  } = useStaticQuery<CasesQuery>(graphql`
    query AddCasesQL {
      allContentfulCases(sort: { order: ASC }) {
        nodes {
          order
          title
          description
          slug
          url
          image {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useAddCases
