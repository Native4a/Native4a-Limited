// Contentful Types
export interface ContentfulImage {
  url: string
  gatsbyImageData?: any
}

export interface ContentfulRichText {
  raw: string
}

export interface ContentfulSeo {
  metaTitle: string
  metaDescription: {
    metaDescription: string
  }
}

export interface ContentfulHeading {
  content: {
    content: string
  }
}

export interface ContentfulText {
  id: string
  content: {
    content: string
  }
}

export interface ContentfulContactBox {
  id: string
  title: string
  order: number
  textContact: ContentfulText[]
  icon: ContentfulImage
}

export interface ContentfulAddNewPage {
  contentful_id: string
  id: string
  order: number
  pageName: string
  seo: ContentfulSeo
  heading: ContentfulHeading[]
  contact: ContentfulContactBox[]
}

export interface ContentfulBlogPost {
  title: string
  slug: string
  publishDate: string
  tags: string[]
  heroImage: {
    gatsbyImageData: any
  }
  description: ContentfulRichText
  author: {
    name: string
  }
}

export interface ContentfulPerson {
  name: string
  shortBio: ContentfulRichText
  title: string
  company: string
}

// Component Props Types
export interface SeoProps {
  title?: string
  description?: string
  lang?: string
  meta?: Array<{ name?: string; property?: string; content: string }>
  image?: string
  ogUrl?: string
}

export interface LayoutProps {
  children: React.ReactNode
  location?: Location
}

export interface SectionProps {
  children?: React.ReactNode
  SectionClass?: string
  ContainerClass?: string
}

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
}

export interface IconProps {
  className?: string
  size?: number | string
  color?: string
}

export interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export interface GridProps {
  children?: React.ReactNode
  className?: string
  cols?: number
  gap?: number
}

export interface ColumnProps {
  children?: React.ReactNode
  className?: string
  span?: number
}

// Hook Return Types
export interface ContactFormData {
  fieldsName: string
  fieldsEmail: string
  fieldsPhone: string
  fieldsWebsite: string
  fieldServices: string
  fieldFindus: string
  fieldMessage: string
}

export interface ClientLogoData {
  id: string
  logo: ContentfulImage
  name?: string
}

export interface AwardData {
  id: string
  image: ContentfulImage
  title?: string
}

export interface ServiceScopeData {
  id: string
  title: string
  description?: string
  icon?: ContentfulImage
}

export interface SliderItem {
  id: string
  title?: string
  image?: ContentfulImage
  description?: string
}

// Page Props
export interface PageProps<T = any> {
  data: T
  location: Location
  pageContext?: any
}

// GraphQL Query Types
export interface SiteMetadata {
  title: string
  description: string
  siteUrl?: string
}

export interface Site {
  siteMetadata: SiteMetadata
}
