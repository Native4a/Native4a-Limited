import { graphql, useStaticQuery } from 'gatsby';

const useServiceScope = () => {
    const {
        allContentfulServiceScope: { nodes }
    } = useStaticQuery(graphql`
      query ServiceScope_QL {
        allContentfulServiceScope(sort: {order: ASC}) {
            nodes {
              icon {
                url
              }
              title
              descriptions {
                raw
              }
              order
            }
        }
      }
  `);
    return nodes;
};

export default useServiceScope;