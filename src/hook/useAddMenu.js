import { graphql, useStaticQuery } from 'gatsby';

const useAddMenu = () => {
  const {
    allContentfulMenu: { nodes }
  } = useStaticQuery(graphql`
      query MenuQL {
        allContentfulMenu(sort: {order: ASC}) {
          nodes {
            slug
            urlTitle
            url
            order
          }
        }
      }
  `);
  return nodes;
};

export default useAddMenu;