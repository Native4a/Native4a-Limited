import { graphql, useStaticQuery } from 'gatsby';

const useChiBacklinksEvaluation = () => {
    const {
        allContentfulChiBacklinksEvaluation: { nodes }
    } = useStaticQuery(graphql`
    query ChiBacklinkEvaluationQL {
        allContentfulChiBacklinksEvaluation(sort: {order: ASC}) {
            nodes {
              title
              descriptions
              order
            }
          }
      }
  `);
    return nodes;
};

export default useChiBacklinksEvaluation;