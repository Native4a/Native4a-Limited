import { useStaticQuery } from 'gatsby';

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
  } = useStaticQuery({allContentfulSocialMedia: { nodes: [] }});
  return nodes;
};

export default useSocialMedia;
