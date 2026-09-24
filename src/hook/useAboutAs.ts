import { useStaticQuery } from 'gatsby'

interface AboutAsNode {
  title: string
  SubTitle: string
  description: {
    raw: any
  }
  logo: {
    url: string
  }
}

interface UseAboutAsResult extends Array<AboutAsNode> {}

const useAboutAs = (): UseAboutAsResult => {
  const {
    allContentfulAboutAs: { nodes }
  } = useStaticQuery({allContentfulAboutAs: { nodes: [] }})
  return nodes
}

export default useAboutAs
