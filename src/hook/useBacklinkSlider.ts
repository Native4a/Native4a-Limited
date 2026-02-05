import { graphql, useStaticQuery } from 'gatsby'

interface StepImage {
  title: string
  url: string
  description: string
}

interface BacklinkSliderNode {
  step1Image: StepImage
  step2Image: StepImage
  step3Image: StepImage
  step4Image: StepImage
}

interface BacklinkSliderQuery {
  allContentfulBacklinksPage: {
    nodes: BacklinkSliderNode[]
  }
}

const useBacklinkSlider = (): BacklinkSliderNode[] => {
  const {
    allContentfulBacklinksPage: { nodes },
  } = useStaticQuery<BacklinkSliderQuery>(graphql`
    query BacklinksPage {
      allContentfulBacklinksPage {
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

export default useBacklinkSlider
