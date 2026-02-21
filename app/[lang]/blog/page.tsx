'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPage() {
  const { t } = useTranslation()
  const { lang } = useParams() as { lang: string }

  // Placeholder blog posts - in a real app, these would come from Contentful
  const blogPosts = [
    {
      id: 1,
      slug: 'seo-best-practices',
      title: 'SEO Best Practices for 2024',
      excerpt: 'Learn the latest SEO strategies to improve your search rankings',
      date: '2024-01-15',
    },
    {
      id: 2,
      slug: 'digital-marketing-trends',
      title: 'Digital Marketing Trends to Watch',
      excerpt: 'Discover emerging trends in digital marketing this year',
      date: '2024-01-10',
    },
    {
      id: 3,
      slug: 'web-design-guide',
      title: 'Modern Web Design Guide',
      excerpt: 'Best practices for creating engaging web designs',
      date: '2024-01-05',
    },
  ]

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-native-color">
          {t('blog.title') || 'Blog'}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Latest insights on digital marketing and web development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-bold mt-2 mb-3 text-native-color">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/${lang}/blog/${post.slug}`}
                  className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
