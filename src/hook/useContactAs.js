import { graphql, useStaticQuery } from 'gatsby';

const useContactAs = () => {
  const {
    allContentfulContactAs: { nodes }
  } = useStaticQuery(graphql`
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
`);
  return nodes;
};
export default useContactAs;