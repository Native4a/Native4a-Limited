import { graphql, useStaticQuery } from 'gatsby'

const useJpBacklinksEvaluation = () => {
  const {
    allContentfulJpBacklinksEvaluation: { nodes },
  } = useStaticQuery(graphql`
    query JpBacklinkEvaluationQL {
      allContentfulJpBacklinksEvaluation(sort: { order: ASC }) {
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

export default useJpBacklinksEvaluation
