import { graphql, useStaticQuery } from 'gatsby'

const useChiBacklinksEvaluation = () => {
  const {
    allContentfulBacklinksPage: { nodes },
  } = useStaticQuery(graphql`
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
