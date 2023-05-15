import { graphql, useStaticQuery } from 'gatsby';

const useSocialMedia = () => {
  const { allContentfulSocialMedia: { nodes }} = useStaticQuery(graphql`
  query SocialMediaQL {
    allContentfulSocialMedia {
        nodes {
          title
          socialMediaLogo {
            url
          }
          url
        }
      }
  }
`);
  return nodes;
};

export default useSocialMedia;