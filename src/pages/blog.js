import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import '../components/variables.css'
import '../styles/global.css'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'


class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <ArticlePreview posts={posts}/>
      </Layout>
    )
  }
}

/*=======front end page blog========
  <ArticlePreview posts={posts} />
*/

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: {publishDate: DESC}) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
        author {
          name
        }
      }
    }
  }
`

