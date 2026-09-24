import { useStaticQuery } from 'gatsby';

const VideoJobRef = () => {
  const {
    allContentfulVideoJobRef: { nodes }
  } = useStaticQuery({allContentfulVideoJobRef: { nodes: [] }});
  return nodes;
};

export default VideoJobRef;