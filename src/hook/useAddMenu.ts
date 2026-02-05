import { graphql, useStaticQuery } from 'gatsby'

interface Submenu {
  link: string
  slug: string
  title: string
}

interface MenuNode {
  order: number
  slug: string
  urlTitle: string
  url: string
  submenu: Submenu[]
}

interface MenuQuery {
  allContentfulMenu: {
    nodes: MenuNode[]
  }
}

const useAddMenu = (): MenuNode[] => {
  const {
    allContentfulMenu: { nodes },
  } = useStaticQuery<MenuQuery>(graphql`
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
