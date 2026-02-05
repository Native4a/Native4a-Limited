import { graphql, useStaticQuery } from 'gatsby'

interface MediaImageNode {
  mediaImage: {
    url: string
  }
}

interface MediaImageQuery {
  allContentfulSocialMediaPage: {
    nodes: MediaImageNode[]
  }
}

const useMediaImage = (): MediaImageNode[] => {
  const {
    allContentfulSocialMediaPage: { nodes },
  } = useStaticQuery<MediaImageQuery>(graphql`
    query MediaImageQuery {
      allContentfulSocialMediaPage {
        nodes {
          mediaImage {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useMediaImage
