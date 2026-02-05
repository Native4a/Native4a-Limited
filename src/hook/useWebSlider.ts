import { graphql, useStaticQuery } from 'gatsby'

interface StepImage {
  title: string
  url: string
  description: string
}

interface WebSliderNode {
  step1Image: StepImage
  step2Image: StepImage
  step3Image: StepImage
  step4Image: StepImage
}

interface WebSliderQuery {
  allContentfulWebDesignPage: {
    nodes: WebSliderNode[]
  }
}

const useWebSlider = (): WebSliderNode[] => {
  const {
    allContentfulWebDesignPage: { nodes },
  } = useStaticQuery<WebSliderQuery>(graphql`
    query WebSlider {
      allContentfulWebDesignPage {
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

export default useWebSlider
