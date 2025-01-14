import { graphql, useStaticQuery } from 'gatsby'

const useSocialMedia = () => {
  const {
    allContentfulSocialMedia: { nodes },
  } = useStaticQuery(graphql`
    query SocialMediaQL {
      allContentfulSocialMedia(sort: { order: ASC }) {
        nodes {
          title
          description
          socialMediaLogo {
            url
          }
          backgroundColor {
            value
          }
          url
          order
        }
      }
    }
  `)
  return nodes
}

export default useSocialMedia
