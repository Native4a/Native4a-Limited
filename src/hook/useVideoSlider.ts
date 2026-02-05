import { graphql, useStaticQuery } from 'gatsby'

interface StepImage {
  title: string
  url: string
  description: string
}

interface VideoSliderNode {
  step1Image: StepImage
  step2Image: StepImage
  step3Image: StepImage
  step4Image: StepImage
}

interface VideoSliderQuery {
  allContentfulVideoPage: {
    nodes: VideoSliderNode[]
  }
}

const useVideoSlider = (): VideoSliderNode[] => {
  const {
    allContentfulVideoPage: { nodes },
  } = useStaticQuery<VideoSliderQuery>(graphql`
    query Slider {
      allContentfulVideoPage {
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

export default useVideoSlider
