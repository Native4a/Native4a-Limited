import { graphql, useStaticQuery } from 'gatsby'

interface AwardImage {
  title: string
  url: string
}

interface AwardsNode {
  title: {
    title: string
  }
  subTitle_field01: string
  awardImage_field01: AwardImage
  subTitle_field02: string
  awardImage_field02: AwardImage
  title_field: {
    raw: string
  }
}

interface AwardsQuery {
  allContentfulAwards: {
    nodes: AwardsNode[]
  }
}

const useAwards = (): AwardsNode[] => {
  const {
    allContentfulAwards: { nodes },
  } = useStaticQuery<AwardsQuery>(graphql`
    query AwardsQuery {
      allContentfulAwards {
        nodes {
          title {
            title
          }
          subTitle_field01
          awardImage_field01 {
            title
            url
          }
          subTitle_field02
          awardImage_field02 {
            title
            url
          }
          title_field {
            raw
          }
        }
      }
    }
  `)
  return nodes
}

export default useAwards
