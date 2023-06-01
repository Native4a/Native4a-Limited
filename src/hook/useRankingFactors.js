import { graphql, useStaticQuery } from 'gatsby';

const useRankingFactors = () => {
  const {
    allContentfulGoogleRankingFactors: { nodes }
  } = useStaticQuery(graphql`
      query AddGoogleRankingFactorsQL {
        allContentfulGoogleRankingFactors(sort: {order: ASC}) {
            nodes {
              title
              descriptions {
                descriptions
              }
            }
          }
      }
  `);
  return nodes;
};

export default useRankingFactors;