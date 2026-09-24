import { useStaticQuery } from 'gatsby';

const useRankingFactors = () => {
    const {
        allContentfulGoogleRankingFactors: { nodes }
    } = useStaticQuery({allContentfulGoogleRankingFactors: { nodes: [] }});
    return nodes;
};

export default useRankingFactors;