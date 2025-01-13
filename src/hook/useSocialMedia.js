import { graphql, useStaticQuery } from 'gatsby'

const useSocialMedia = () => {
  const {
    allContentfulSocialMedia: { nodes },
  } = useStaticQuery(graphql`
    query SocialMediaQL {
      allContentfulSocialMedia {
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
        }
      }
    }
  `)
  return nodes
}

export default useSocialMedia
