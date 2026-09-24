import { useStaticQuery } from 'gatsby';

const useMediaImage = () => {
    const {
        allContentfulSocialMediaPage: { nodes }
      } = useStaticQuery({allContentfulSocialMediaPage: { nodes: [] }});
    return nodes;
};

export default useMediaImage