import { graphql, useStaticQuery } from 'gatsby';

const useSlider = () => {
  const { allContentfulVideoPage: { nodes }} = useStaticQuery(graphql`
  query Slider{
    allContentfulVideoPage {
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
export default useSlider;