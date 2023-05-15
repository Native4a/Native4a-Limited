import { graphql, useStaticQuery } from 'gatsby';

const useFooter = () => {
    const {
        allContentfulFooter: { nodes }
    } = useStaticQuery(graphql`
    query FooterQuery {
        allContentfulFooter {
            nodes {
              title
              buttonName
              native4aLogo {
                url
              }
              copyRight {
                raw
              }
              googlePartnerImage {
                url
              }
            }
          }
      }
`);
    return nodes;
};
export default useFooter;