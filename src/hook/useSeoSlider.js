import { graphql, useStaticQuery } from 'gatsby';

const useSeoSlider = () => {
  const { allContentfulSeoPage: { nodes }} = useStaticQuery(graphql`
  query SeoSlider{
    allContentfulSeoPage {
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
export default useSeoSlider;