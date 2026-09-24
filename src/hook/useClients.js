import { useStaticQuery } from 'gatsby';

const useClients = () => {
    const {
        allContentfulClients: { nodes }
    } = useStaticQuery({allContentfulClients: { nodes: [] }});
    return nodes;
};

export default useClients;