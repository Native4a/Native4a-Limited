import { graphql, useStaticQuery } from 'gatsby';

const useContactForm = () => {
    const {
        allContentfulContactForm: { nodes }
    } = useStaticQuery(graphql`
  query FormQuery {
    allContentfulContactForm {
      nodes {
        fieldsName
        fieldsEmail
        fieldsPhone
        fieldsWebsite
        fieldServices
        fieldFindus
        fieldMessage
      }
    }
  }
  
`);
    return nodes;
};
export default useContactForm;