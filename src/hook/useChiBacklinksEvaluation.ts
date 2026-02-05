import { graphql, useStaticQuery } from 'gatsby'

interface EvaluationDescription {
  order: number
  title: string
}

interface ChiBacklinksNode {
  chiEvaluationDescription: EvaluationDescription[]
}

interface ChiBacklinksQuery {
  allContentfulBacklinksPage: {
    nodes: ChiBacklinksNode[]
  }
}

const useChiBacklinksEvaluation = (): ChiBacklinksNode[] => {
  const {
    allContentfulBacklinksPage: { nodes },
  } = useStaticQuery<ChiBacklinksQuery>(graphql`
    query ChiBacklinkEvaluationQL {
      allContentfulBacklinksPage {
        nodes {
          chiEvaluationDescription {
            order
            title
          }
        }
      }
    }
  `)
  return nodes
}

export default useChiBacklinksEvaluation
