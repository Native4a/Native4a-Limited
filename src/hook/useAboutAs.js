import { graphql, useStaticQuery } from 'gatsby';

const useHeader = () => {
  const {
    allContentfulAboutAs: { nodes }
  } = useStaticQuery(graphql`
  query BioQL{
    allContentfulAboutAs {
      nodes {
        title
        SubTitle
        description {
          raw
        }
        logo {
          url
        }
      }
    }
  }
`);
  return nodes;
};
export default useHeader;