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
  return []
}

export default useContactForm
