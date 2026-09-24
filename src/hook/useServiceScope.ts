import { useStaticQuery } from 'gatsby';

interface ServiceScopeNode {
  icon: { url: string };
  title: string;
  descriptions: { raw: string };
  order: number;
}

const useServiceScope = (): ServiceScopeNode[] => {
    const {
        allContentfulServiceScope: { nodes }
    } = useStaticQuery({allContentfulServiceScope: { nodes: [] }});
    return nodes;
};

export default useServiceScope;
