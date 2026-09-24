import { useStaticQuery } from 'gatsby';

const useEngBacklinksEvaluation = () => {
    const {
        allContentfulEngBacklinksEvaluation: { nodes }
    } = useStaticQuery({allContentfulEngBacklinksEvaluation: { nodes: [] }});
    return nodes;
};

export default useEngBacklinksEvaluation;