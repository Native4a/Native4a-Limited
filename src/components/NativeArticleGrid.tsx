'use client';

import { useMemo, useState, useEffect } from 'react';
import { ArrowUpRight, Search, SlidersHorizontal } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
  coverImage?: string;
  slug?: string;
}

const categoryColors: Record<string, string> = {
  'SEO 策略': 'bg-[#dce5e4]',
  '社交媒體': 'bg-[#ede8db]',
  '內容行銷': 'bg-[#e5e0d8]',
  'SEM 廣告': 'bg-[#e8dcd4]',
  'default': 'bg-[#e6e1d8]',
};

export function NativeArticleGrid() {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Notion posts on component mount
  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/blog/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setArticles(data);
        setFilteredArticles(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setArticles([]);
        setFilteredArticles([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    articles.forEach((article) => {
      article.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [articles]);

  // Filter articles based on search and tags
  useEffect(() => {
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((article) =>
        selectedTags.some((tag) => article.tags?.includes(tag))
      );
    }

    setFilteredArticles(filtered);
  }, [searchQuery, selectedTags, articles]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const getCategoryColor = (tags?: string[]): string => {
    if (!tags || tags.length === 0) return categoryColors.default;
    for (const tag of tags) {
      if (categoryColors[tag]) return categoryColors[tag];
    }
    return categoryColors.default;
  };

  if (isLoading) {
    return (
      <div className="w-full py-16 text-center">
        <p className="text-gray-500">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1d] mb-2">
            最新文章
          </h2>
          <p className="text-gray-600">
            探索最新的 SEO、數碼營銷和內容策略文章
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FAAB00]"
              />
            </div>
          </div>

          {/* Tags Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-[#FAAB00] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {articles.length === 0 ? '還沒有發布的文章' : '沒有符合條件的文章'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                href={`/blog/${article.slug || article.id}`}
                className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div
                  className={`w-full h-48 ${getCategoryColor(article.tags)} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}
                >
                  {article.coverImage ? (
                    <img
                      src={article.coverImage}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Date */}
                  {article.date && (
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(article.date).toLocaleDateString('zh-HK', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1d1d1d] mb-3 line-clamp-2 group-hover:text-[#FAAB00] transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  {article.excerpt && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Read More Link */}
                  <div className="flex items-center text-[#FAAB00] font-medium text-sm group-hover:translate-x-1 transition-transform">
                    閱讀更多
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
