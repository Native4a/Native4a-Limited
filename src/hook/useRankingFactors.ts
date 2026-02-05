import { graphql, useStaticQuery } from 'gatsby'

interface RankingFactorNode {
  order: number
  title: string
  descriptions: string
}

interface RankingFactorsQuery {
  allContentfulGoogleRankingFactors: {
    nodes: RankingFactorNode[]
  }
}

const useRankingFactors = (): RankingFactorNode[] => {
  const {
    allContentfulGoogleRankingFactors: { nodes },
  } = useStaticQuery<RankingFactorsQuery>(graphql`
    query RankingFactorsQL {
      allContentfulGoogleRankingFactors(sort: { order: ASC }) {
        nodes {
          order
          title
          descriptions
        }
      }
    }
  `)
  return nodes
}

export default useRankingFactors
