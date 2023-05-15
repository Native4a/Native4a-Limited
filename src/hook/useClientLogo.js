import { graphql, useStaticQuery } from 'gatsby';

const useClientLogo = () => {
    const {
        allContentfulHomePage: { nodes }
      } = useStaticQuery(graphql`
      query ClientLogoQuery{
        allContentfulHomePage {
          nodes {
            clientsLogo{
              url
              title
            }
            awardImage {
              url
              title
            }
            mediaReport {
              url
              title
            }
          }
        }
      }
    `);
    return nodes;
};

export default useClientLogo