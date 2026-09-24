import { useStaticQuery } from 'gatsby';

const useClientLogo = () => {
    const {
      allContentfulClientsLogo: { nodes }
      } = useStaticQuery({allContentfulClientsLogo: { nodes: [] }});
    return nodes;
};

export default useClientLogo