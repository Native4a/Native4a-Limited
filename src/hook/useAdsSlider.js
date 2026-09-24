import { useStaticQuery } from 'gatsby';

const useAdsSlider = () => {
  const { allContentfulSocialMediaPage: { nodes }} = useStaticQuery({allContentfulSocialMediaPage: { nodes: [] }});
  return nodes;
};
export default useAdsSlider;