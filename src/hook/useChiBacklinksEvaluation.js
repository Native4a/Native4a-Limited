import { useStaticQuery } from 'gatsby'

const useChiBacklinksEvaluation = () => {
  const {
    allContentfulBacklinksPage: { nodes },
  } = useStaticQuery({allContentfulBacklinksPage: { nodes: [] }})
  return nodes
}

export default useChiBacklinksEvaluation
