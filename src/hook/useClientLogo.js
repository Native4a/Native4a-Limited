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
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                width: 424
                height: 212
              )
            }
          }
        }
      }
    `);
    return nodes;
};

export default useClientLogo