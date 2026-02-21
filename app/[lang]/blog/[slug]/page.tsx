'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function BlogPostPage() {
  const { lang, slug } = useParams() as { lang: string; slug: string }

  // In a real app, this would fetch from Contentful based on slug
  const post = {
    title: `Blog Post: ${slug}`,
    date: '2024-01-15',
    author: 'Native4a Team',
    content: 'This is a placeholder for the blog post content. In a real application, this would be fetched from Contentful CMS.',
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href={`/${lang}/blog`} className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
          ← Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4 text-native-color">{post.title}</h1>
          
          <div className="flex gap-4 text-gray-600 mb-8 border-b pb-8">
            <time>{post.date}</time>
            <span>By {post.author}</span>
          </div>

          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  )
}
