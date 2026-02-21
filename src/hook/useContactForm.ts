// Replaced Gatsby useStaticQuery with static fallback

interface FormField {
  fieldsName: string
  fieldsEmail: string
  fieldsPhone: string
  fieldsWebsite: string
  fieldServices: string
  fieldFindus: string
  fieldMessage: string
}

const useContactForm = (): FormField[] => {
  return []
}

export default useContactForm
