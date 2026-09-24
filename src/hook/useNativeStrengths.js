import { useStaticQuery } from 'gatsby';

const useNativeStrengths = () => {
    const {
        allContentfulNativeStrengths: { nodes }
    } = useStaticQuery({allContentfulNativeStrengths: { nodes: [] }});
    return nodes;
};
export default useNativeStrengths;