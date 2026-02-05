import { graphql, useStaticQuery } from 'gatsby'

interface AboutAsNode {
  title: string
  SubTitle: string
  description: {
    raw: string
  }
  logo: {
    url: string
  }
}

interface AboutAsQuery {
  allContentfulAboutAs: {
    nodes: AboutAsNode[]
  }
}

const useAboutAs = (): AboutAsNode[] => {
  const {
    allContentfulAboutAs: { nodes },
  } = useStaticQuery<AboutAsQuery>(graphql`
    query BioQL {
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
