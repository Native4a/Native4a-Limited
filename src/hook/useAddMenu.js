import { graphql, useStaticQuery } from 'gatsby'

const useAddMenu = () => {
  const {
    allContentfulMenu: { nodes },
  } = useStaticQuery(graphql`
    query MenuQL {
      allContentfulMenu(sort: { order: ASC }) {
        nodes {
          order
          slug
          urlTitle
          url
          submenu {
            link
            slug
            title
          }
        }
      }
    }
  `)
  return nodes
}

export default useAddMenu
