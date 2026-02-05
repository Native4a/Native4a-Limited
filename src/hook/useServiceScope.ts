import { graphql, useStaticQuery } from 'gatsby'

interface ServiceScopeNode {
  icon: {
    url: string
  }
  title: string
  descriptions: {
    raw: string
  }
  order: number
}

interface ServiceScopeQuery {
  allContentfulServiceScope: {
    nodes: ServiceScopeNode[]
  }
}

const useServiceScope = (): ServiceScopeNode[] => {
  const {
    allContentfulServiceScope: { nodes },
  } = useStaticQuery<ServiceScopeQuery>(graphql`
    query ServiceScope_QL {
      allContentfulServiceScope(sort: { order: ASC }) {
        nodes {
          icon {
            url
          }
          title
          descriptions {
            raw
          }
          order
        }
      }
    }
  `)
  return nodes
}

export default useServiceScope
