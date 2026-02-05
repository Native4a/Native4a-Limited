import { graphql, useStaticQuery } from 'gatsby'

interface TwelveDifferentNode {
  no: number
  title: string
  descriptions: {
    internal: {
      content: string
    }
  }
}

interface TwelveDifferentQuery {
  allContentfulTwelveDifferent: {
    nodes: TwelveDifferentNode[]
  }
}

const useTwelveDifferent = (): TwelveDifferentNode[] => {
  const {
    allContentfulTwelveDifferent: { nodes },
  } = useStaticQuery<TwelveDifferentQuery>(graphql`
    query TwelveDifferentQL {
      allContentfulTwelveDifferent(sort: { order: ASC }) {
        nodes {
          no
          title
          descriptions {
            internal {
              content
            }
          }
        }
      }
    }
  `)
  return nodes
}

export default useTwelveDifferent
