import { useStaticQuery } from 'gatsby'

const useFooter = () => {
  const data = useStaticQuery({allContentfulFooter: { nodes: [] }})
  return data?.allContentfulFooter?.nodes || []
}
export default useFooter
