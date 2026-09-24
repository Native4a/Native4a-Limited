import { useStaticQuery } from 'gatsby'

const useAddMenu = () => {
  const {
    allContentfulMenu: { nodes },
  } = useStaticQuery({allContentfulMenu: { nodes: [] }})
  return nodes
}

export default useAddMenu
