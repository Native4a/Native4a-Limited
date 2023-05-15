import { graphql, useStaticQuery } from 'gatsby';

const useNativeStrengths = () => {
    const {
        allContentfulNativeStrengths: { nodes }
    } = useStaticQuery(graphql`
  query StrengthsQL{
    allContentfulNativeStrengths {
        nodes {
          title
          leftMedia {
            url
          }
          rightMedia {
            url
          }
        }
      }
    }
`);
    return nodes;
};
export default useNativeStrengths;