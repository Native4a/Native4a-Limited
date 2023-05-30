import { graphql, useStaticQuery } from 'gatsby';

const useClientLogo = () => {
    const {
      allContentfulClientsLogo: { nodes }
      } = useStaticQuery(graphql`
      query ClientLogoQuery{
        allContentfulClientsLogo(sort: {order: ASC}) {
          nodes {
            order
            title
            clientsAlt
            clientsLogo {
              url
            }
          }
        }
      }
    `);
    return nodes;
};

export default useClientLogo