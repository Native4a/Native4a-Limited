import { graphql, useStaticQuery } from 'gatsby'

const useFooter = () => {
  const data = useStaticQuery(graphql`
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
  return data?.allContentfulFooter?.nodes || []
}
export default useFooter
