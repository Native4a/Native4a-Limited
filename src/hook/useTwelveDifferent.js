import { graphql, useStaticQuery } from 'gatsby';

const useTwelveDifferent = () => {
  const { allContentfulTwelveDifferent: { nodes }} = useStaticQuery(graphql`
  query TwelveDifferentQL {
    allContentfulTwelveDifferent(sort: {order: ASC}) {
        nodes {
          no
          title
          descriptions {
            internal {
              content
            }
          }
        }
      }
  }
`);
  return nodes;
};

export default useTwelveDifferent;