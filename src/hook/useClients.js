import { graphql, useStaticQuery } from 'gatsby';

const useClients = () => {
    const {
        allContentfulClients: { nodes }
    } = useStaticQuery(graphql`
    query ClientsQL {
      allContentfulClients(sort: {order: ASC}) {
        nodes {
          order
          mainVisual {
            url
          }
          companyLogo {
            url
          }
          companyName
          clientsName
          clientsPosition
          clientFeedback {
            internal {
              content
            }
          }
          ranking
          url
        }
      }
    }
  `);
    return nodes;
};

export default useClients;