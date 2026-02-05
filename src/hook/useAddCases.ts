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

interface UseAddCasesResult extends Array<CaseNode> {}

const useAddCases = (): UseAddCasesResult => {
  const {
    allContentfulCases: { nodes }
  } = useStaticQuery(graphql`
      query AddCasesQL {
        allContentfulCases(sort: {order: ASC}) {
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
