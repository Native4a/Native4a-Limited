import { graphql, useStaticQuery } from 'gatsby';

const useBacklinkSlider = () => {
  const { allContentfulBacklinksPage: { nodes }} = useStaticQuery(graphql`
  query BacklinksPage{
    allContentfulBacklinksPage {
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
export default useBacklinkSlider;