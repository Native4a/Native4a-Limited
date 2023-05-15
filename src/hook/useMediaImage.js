import { graphql, useStaticQuery } from 'gatsby';

const useMediaImage = () => {
    const {
        allContentfulSocialMediaPage: { nodes }
      } = useStaticQuery(graphql`
      query MediaImageQuery {
        allContentfulSocialMediaPage {
          nodes {
            mediaImage {
              url
            }
          }
        }
      }
    `);
    return nodes;
};

export default useMediaImage