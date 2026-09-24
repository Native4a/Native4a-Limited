interface CaseNode {
  order: number
  title: string
  description: string
  slug: string
  url: string
  image: {
    url: string
  }
}

interface UseAddCasesResult extends Array<CaseNode> {}

const useAddCases = (): UseAddCasesResult => {
  return []
}

export default useAddCases
