import { graphql, useStaticQuery } from 'gatsby'

interface NativeStrengthsNode {
  title: string
  leftMedia: {
    url: string
  }
  rightMedia: {
    url: string
  }
}

interface NativeStrengthsQuery {
  allContentfulNativeStrengths: {
    nodes: NativeStrengthsNode[]
  }
}

const useNativeStrengths = (): NativeStrengthsNode[] => {
  const {
    allContentfulNativeStrengths: { nodes },
  } = useStaticQuery<NativeStrengthsQuery>(graphql`
    query StrengthsQL {
      allContentfulNativeStrengths {
        nodes {
          title
          leftMedia {
            url
          }
          rightMedia {
            url
          }
        }
      }
    }
  `)
  return nodes
}

export default useNativeStrengths
