import { graphql, useStaticQuery } from 'gatsby'

interface FooterNode {
  title: string
  description: {
    description: string
  }
  buttonName: string
  native4aLogo: {
    url: string
  }
  copyRight: {
    raw: string
  }
  googlePartnerImage: {
    url: string
  }
}

interface FooterQuery {
  allContentfulFooter: {
    nodes: FooterNode[]
  }
}

const useFooter = (): FooterNode[] => {
  const {
    allContentfulFooter: { nodes },
  } = useStaticQuery<FooterQuery>(graphql`
    query FooterQuery {
      allContentfulFooter {
        nodes {
          title
          description {
            description
          }
          buttonName
          native4aLogo {
            url
          }
          copyRight {
            raw
          }
          googlePartnerImage {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useFooter
