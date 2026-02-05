import { graphql, useStaticQuery } from 'gatsby'

interface ClientLogoNode {
  order: number
  title: string
  clientsAlt: string
  clientsLogo: {
    url: string
    gatsbyImageData: any
  }
}

interface ClientLogoQuery {
  allContentfulClientsLogo: {
    nodes: ClientLogoNode[]
  }
}

const useClientLogo = (): ClientLogoNode[] => {
  const {
    allContentfulClientsLogo: { nodes },
  } = useStaticQuery<ClientLogoQuery>(graphql`
    query ClientLogoQuery {
      allContentfulClientsLogo(sort: { order: ASC }) {
        nodes {
          order
          title
          clientsAlt
          clientsLogo {
            url
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 424, height: 212)
          }
        }
      }
    }
  `)
  return nodes
}

export default useClientLogo
