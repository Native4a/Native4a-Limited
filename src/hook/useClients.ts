import { graphql, useStaticQuery } from 'gatsby'

interface ClientNode {
  order: number
  mainVisual: {
    url: string
  }
  companyLogo: {
    url: string
  }
  companyName: string
  clientsName: string
  clientsPosition: string
  clientFeedback: {
    internal: {
      content: string
    }
  }
  ranking: number
  url: string
}

interface ClientsQuery {
  allContentfulClients: {
    nodes: ClientNode[]
  }
}

const useClients = (): ClientNode[] => {
  const {
    allContentfulClients: { nodes },
  } = useStaticQuery<ClientsQuery>(graphql`
    query ClientsQL {
      allContentfulClients(sort: { order: ASC }) {
        nodes {
          order
          mainVisual {
            url
          }
          companyLogo {
            url
          }
          companyName
          clientsName
          clientsPosition
          clientFeedback {
            internal {
              content
            }
          }
          ranking
          url
        }
      }
    }
  `)
  return nodes
}

export default useClients
