import { useStaticQuery } from 'gatsby';

interface WebSliderNode {
  step1Image: { title: string; url: string; description: string };
  step2Image: { title: string; url: string; description: string };
  step3Image: { title: string; url: string; description: string };
  step4Image: { title: string; url: string; description: string };
}

const useWebSlider = (): WebSliderNode[] => {
  const { allContentfulWebDesignPage: { nodes }} = useStaticQuery({allContentfulWebDesignPage: { nodes: [] }});
  return nodes;
};
export default useWebSlider;
