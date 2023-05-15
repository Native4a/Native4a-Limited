import { graphql, useStaticQuery } from 'gatsby';

const useWebSlider = () => {
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