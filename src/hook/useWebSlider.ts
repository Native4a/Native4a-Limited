import { graphql, useStaticQuery } from 'gatsby';

interface WebSliderNode {
  step1Image: { title: string; url: string; description: string };
  step2Image: { title: string; url: string; description: string };
  step3Image: { title: string; url: string; description: string };
  step4Image: { title: string; url: string; description: string };
}

const useWebSlider = (): WebSliderNode[] => {
  const { allContentfulWebDesignPage: { nodes }} = useStaticQuery(graphql`
  query WebSlider{
    allContentfulWebDesignPage {
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
export default useWebSlider;
