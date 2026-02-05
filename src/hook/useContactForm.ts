import { graphql, useStaticQuery } from 'gatsby'

interface FormField {
  fieldsName: string
  fieldsEmail: string
  fieldsPhone: string
  fieldsWebsite: string
  fieldServices: string
  fieldFindus: string
  fieldMessage: string
}

interface UseContactFormReturn extends Array<FormField> {}

const useContactForm = (): UseContactFormReturn => {
  const { allContentfulContactForm } = useStaticQuery<{
    allContentfulContactForm: { nodes: FormField[] }
  }>(graphql`
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

  return allContentfulContactForm.nodes
}

export default useContactForm
