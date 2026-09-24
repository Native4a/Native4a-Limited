import { useStaticQuery } from 'gatsby';

const useBacklinkSlider = () => {
  const { allContentfulBacklinksPage: { nodes }} = useStaticQuery({allContentfulBacklinksPage: { nodes: [] }});
  return nodes;
};
export default useBacklinkSlider;