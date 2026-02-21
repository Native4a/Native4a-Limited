// Replaced Gatsby useStaticQuery with static fallback

interface SocialMediaNode {
  title: string
  description: string
  socialMediaLogo: { url: string }
  backgroundColor: { value: string }
  url: string
  order: number
}

const useSocialMedia = (): SocialMediaNode[] => {
  return []
}

export default useSocialMedia
