import { graphql, useStaticQuery } from 'gatsby'

interface ContactFormNode {
  fieldsName: string
  fieldsEmail: string
  fieldsPhone: string
  fieldsWebsite: string
  fieldServices: string
  fieldFindus: string
  fieldMessage: string
}

interface ContactFormQuery {
  allContentfulContactForm: {
    nodes: ContactFormNode[]
  }
}

const useContactForm = (): ContactFormNode[] => {
  const {
    allContentfulContactForm: { nodes },
  } = useStaticQuery<ContactFormQuery>(graphql`
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
  `)
  return nodes
}

export default useContactForm
