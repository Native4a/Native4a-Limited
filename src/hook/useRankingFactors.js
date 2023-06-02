import { graphql, useStaticQuery } from 'gatsby';

const useRankingFactors = () => {
    const {
        allContentfulGoogleRankingFactors: { nodes }
    } = useStaticQuery(graphql`
      query RankingFactorsQL {
        allContentfulGoogleRankingFactors (sort: {order: ASC}) {
            nodes {
              order
              title
              descriptions
            }
          }
      }
  `);
    return nodes;
};

export default useRankingFactors;