import { graphql, useStaticQuery } from 'gatsby';

const VideoJobRef = () => {
  const {
    allContentfulVideoJobRef: { nodes }
  } = useStaticQuery(graphql`
      query VideoJobRefQL {
        allContentfulVideoJobRef(sort: {order: ASC}) {
            nodes {
              order
              image {
                url
              }
              companyName
              videoTitle
              youtubeUrl
              videoAlt
            }
        }
      }
  `);
  return nodes;
};

export default VideoJobRef;