import { useStaticQuery } from 'gatsby';

const useContactAs = () => {
  const {
    allContentfulContactAs: { nodes }
  } = useStaticQuery({allContentfulContactAs: { nodes: [] }});
  return nodes;
};
export default useContactAs;