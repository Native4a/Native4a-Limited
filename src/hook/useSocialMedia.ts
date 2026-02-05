import { graphql, useStaticQuery } from 'gatsby';

interface SocialMediaNode {
  title: string;
  description: string;
  socialMediaLogo: { url: string };
  backgroundColor: { value: string };
  url: string;
  order: number;
}

const useSocialMedia = (): SocialMediaNode[] => {
  const {
    allContentfulSocialMedia: { nodes },
  } = useStaticQuery(graphql`
    query SocialMediaQL {
      allContentfulSocialMedia(sort: { order: ASC }) {
        nodes {
          title
          description
          socialMediaLogo {
            url
          }
          backgroundColor {
            value
          }
          url
          order
        }
      }
    }
  `);
  return nodes;
};

export default useSocialMedia;
