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
        list {
          raw
        }
        address_China
      }
    }
  }
`);
  return nodes;
};
export default useContactAs;
