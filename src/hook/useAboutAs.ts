import { graphql, useStaticQuery } from 'gatsby'

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
  } = useStaticQuery(graphql`
  query BioQL{
    allContentfulAboutAs {
      nodes {
        title
        SubTitle
        description {
          raw
        }
        logo {
          url
        }
      }
    }
  }
`)
  return nodes
}

export default useAboutAs
