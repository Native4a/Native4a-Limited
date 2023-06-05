import { graphql, useStaticQuery } from 'gatsby';

const useEngBacklinksEvaluation = () => {
    const {
        allContentfulEngBacklinksEvaluation: { nodes }
    } = useStaticQuery(graphql`
    query EngBacklinkEvaluationQL {
        allContentfulEngBacklinksEvaluation(sort: {order: ASC}) {
            nodes {
              order
              descriptions
            }
          }
      }
  `);
    return nodes;
};

export default useEngBacklinksEvaluation;