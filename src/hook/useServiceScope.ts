import { graphql, useStaticQuery } from 'gatsby';

interface ServiceScopeNode {
  icon: { url: string };
  title: string;
  descriptions: { raw: string };
  order: number;
}

const useServiceScope = (): ServiceScopeNode[] => {
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
