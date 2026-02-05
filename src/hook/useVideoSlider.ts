import { graphql, useStaticQuery } from 'gatsby';

interface VideoSliderNode {
  step1Image: { title: string; url: string; description: string };
  step2Image: { title: string; url: string; description: string };
  step3Image: { title: string; url: string; description: string };
  step4Image: { title: string; url: string; description: string };
}

const useSlider = (): VideoSliderNode[] => {
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
