import { graphql, useStaticQuery } from 'gatsby'

interface VideoJobRefNode {
  order: number
  image: {
    url: string
  }
  companyName: string
  videoTitle: string
  youtubeUrl: string
  videoAlt: string
}

interface VideoJobRefQuery {
  allContentfulVideoJobRef: {
    nodes: VideoJobRefNode[]
  }
}

const useVideoJobRef = (): VideoJobRefNode[] => {
  const {
    allContentfulVideoJobRef: { nodes },
  } = useStaticQuery<VideoJobRefQuery>(graphql`
    query VideoJobRefQL {
      allContentfulVideoJobRef(sort: { order: ASC }) {
        nodes {
          order
          image {
            url
          }
          companyName
          videoTitle
          youtubeUrl
          videoAlt
        }
      }
    }
  `)
  return nodes
}

export default useVideoJobRef
