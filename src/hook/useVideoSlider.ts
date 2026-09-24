import { useStaticQuery } from 'gatsby';

interface VideoSliderNode {
  step1Image: { title: string; url: string; description: string };
  step2Image: { title: string; url: string; description: string };
  step3Image: { title: string; url: string; description: string };
  step4Image: { title: string; url: string; description: string };
}

const useSlider = (): VideoSliderNode[] => {
  const { allContentfulVideoPage: { nodes }} = useStaticQuery({allContentfulVideoPage: { nodes: [] }});
  return nodes;
};
export default useSlider;
