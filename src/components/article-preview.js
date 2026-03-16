import React from 'react'
import { Link } from 'gatsby'

const ArticlePreview = ({ posts, language = 'zh' }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p>No blog posts found.</p>
      </div>
    )
  }

  // Helper function to generate blog post path
  // Uses client-side route at /blog/[slug] which handles dynamic posts
  const getBlogPostPath = (slug) => {
    return `/blog/${slug}`
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            {post.featuredImage && (
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <Link
              to={getBlogPostPath(post.slug)}
              className="flex flex-col flex-1 p-6 no-underline text-current hover:no-underline"
            >
              <h3 className="m-0 mb-2 text-lg font-semibold text-gray-900 leading-relaxed hover:text-yellow-600 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="my-2 text-gray-600 text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              )}
              <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-gray-200">
                <span className="font-medium">
                  {post.author || 'Native4A'}
                </span>
                <span className="italic">
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticlePreview
