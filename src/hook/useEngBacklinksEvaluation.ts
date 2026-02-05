import { graphql, useStaticQuery } from 'gatsby'

interface EngBacklinksNode {
  order: number
  descriptions: string
}

interface EngBacklinksQuery {
  allContentfulEngBacklinksEvaluation: {
    nodes: EngBacklinksNode[]
  }
}

const useEngBacklinksEvaluation = (): EngBacklinksNode[] => {
  const {
    allContentfulEngBacklinksEvaluation: { nodes },
  } = useStaticQuery<EngBacklinksQuery>(graphql`
    query EngBacklinkEvaluationQL {
      allContentfulEngBacklinksEvaluation(sort: { order: ASC }) {
        nodes {
          order
          descriptions
        }
      }
    }
  `)
  return nodes
}

export default useEngBacklinksEvaluation
