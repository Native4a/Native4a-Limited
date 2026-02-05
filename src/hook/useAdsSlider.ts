import { graphql, useStaticQuery } from 'gatsby'

interface StepImage {
  title: string
  url: string
  description: string
}

interface AdsSliderNode {
  step1Image: StepImage
  step2Image: StepImage
  step3Image: StepImage
  step4Image: StepImage
}

interface AdsSliderQuery {
  allContentfulSocialMediaPage: {
    nodes: AdsSliderNode[]
  }
}

const useAdsSlider = (): AdsSliderNode[] => {
  const {
    allContentfulSocialMediaPage: { nodes },
  } = useStaticQuery<AdsSliderQuery>(graphql`
    query AdsSlider {
      allContentfulSocialMediaPage {
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

export default useAdsSlider
