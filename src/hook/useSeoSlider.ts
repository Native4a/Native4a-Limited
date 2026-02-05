import { graphql, useStaticQuery } from 'gatsby'

interface StepImage {
  title: string
  url: string
  description: string
}

interface SeoSliderNode {
  step1Image: StepImage
  step2Image: StepImage
  step3Image: StepImage
  step4Image: StepImage
}

interface SeoSliderQuery {
  allContentfulSeoPage: {
    nodes: SeoSliderNode[]
  }
}

const useSeoSlider = (): SeoSliderNode[] => {
  const {
    allContentfulSeoPage: { nodes },
  } = useStaticQuery<SeoSliderQuery>(graphql`
    query SeoSlider {
      allContentfulSeoPage {
        nodes {
          step1Image {
            title
            url
            description
          }
          step2Image {
            title
            url
            description
          }
          step3Image {
            title
            url
            description
          }
          step4Image {
            title
            url
            description
          }
        }
      }
    }
  `)
  return nodes
}

export default useSeoSlider
