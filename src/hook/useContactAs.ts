import { graphql, useStaticQuery } from 'gatsby'

interface ContactAsNode {
  title: string
  email: string
  phone: string
  list: {
    raw: string
  }
  address_China: string
  address_HongKong: string
}

interface ContactAsQuery {
  allContentfulContactAs: {
    nodes: ContactAsNode[]
  }
}

const useContactAs = (): ContactAsNode[] => {
  const {
    allContentfulContactAs: { nodes },
  } = useStaticQuery<ContactAsQuery>(graphql`
    query ContactQuery {
      allContentfulContactAs {
        nodes {
          title
          email
          phone
          list {
            raw
          }
          address_China
          address_HongKong
        }
      }
    }
  `)
  return nodes
}

export default useContactAs
