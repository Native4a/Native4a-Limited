import { useStaticQuery } from 'gatsby';

const useSeoSlider = () => {
  const { allContentfulSeoPage: { nodes }} = useStaticQuery({allContentfulSeoPage: { nodes: [] }});
  return nodes;
};
export default useSeoSlider;