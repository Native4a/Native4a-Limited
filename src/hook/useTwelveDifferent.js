import { useStaticQuery } from 'gatsby';

const useTwelveDifferent = () => {
  const { allContentfulTwelveDifferent: { nodes }} = useStaticQuery({allContentfulTwelveDifferent: { nodes: [] }});
  return nodes;
};

export default useTwelveDifferent;