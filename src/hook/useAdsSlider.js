import { graphql, useStaticQuery } from 'gatsby';

const useAdsSlider = () => {
  const { allContentfulSocialMediaPage: { nodes }} = useStaticQuery(graphql`
  query AdsSlider{
    allContentfulSocialMediaPage {
      nodes {
        step1Image {
          title
          url
          description
        }
        step2Image {
          title
          url
          description
        }
        step3Image {
          title
          url
          description
        }
        step4Image {
          title
          url
          description
        }
      }
    }
  }
`);
  return nodes;
};
export default useAdsSlider;