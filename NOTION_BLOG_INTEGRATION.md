# Blog Page Notion 集成詳細說明

## 概述

Native4a的Blog系統使用Notion數據庫作為內容管理系統（CMS），通過Gatsby和Vercel Functions實現動態內容管理。用戶可以在Notion中編寫文章，系統會自動同步到網站。

## 架構圖

```
┌─────────────────────────────────────────────────────────────────┐
│                    Notion Database                              │
│  (f159575e-3494-4ba7-8727-3d9b7d2e439d)                        │
│                                                                 │
│  Properties: Title, Slug, Excerpt, Content, Language,          │
│              Published, PublishedDate, Author, Tags,            │
│              FeaturedImage                                      │
└──────────────────┬──────────────────────────────────────────────┘
                   │ NOTION_API_KEY (環境變數)
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌─────────────────┐  ┌──────────────────┐
│ 構建時(SSR)    │  │ 運行時(CSR)     │
│ gatsby-node.ts │  │ Vercel Functions│
└────────┬────────┘  └────────┬─────────┘
         │                    │
    ▼────┴────▼        ▼──────┴──────▼
 notionBlog.ts    notion-posts.ts  notion-post.ts
 (服務層)        (列表API)        (詳情API)
         │                    │
         └────────┬───────────┘
                  │
         ┌────────▼────────┐
         │  Gatsby Pages   │
         ├─────────────────┤
         │ blog.js (列表) │
         │ blog-post.tsx   │
         │ (詳情)          │
         └─────────────────┘
```

## 核心文件結構

### 1. 環境配置

**文件**: `.env.local` 或 `.env.development.local`

```env
NOTION_API_KEY=your_notion_api_key_here
NOTION_DATABASE_ID=f159575e-3494-4ba7-8727-3d9b7d2e439d
```

### 2. Notion 數據庫結構

**數據庫 ID**: `f159575e-3494-4ba7-8727-3d9b7d2e439d`

#### 數據庫字段（Properties）

| 字段名 | 類型 | 用途 | 備註 |
|--------|------|------|------|
| **Title** | Title | 文章標題 | Notion中的標題字段 |
| **Slug** | Rich Text | URL路由 | 例如: "seo-basics"，必須唯一 |
| **Excerpt** | Rich Text | 文章摘要 | 顯示在列表頁面 |
| **Content** | Rich Text | 文章內容(備用) | 優先級低於Block content |
| **FeaturedImage** | Files | 特色圖片 | 文章封面圖 |
| **Language** | Select | 語言 | 選項: "Zh", "En", "Ja" |
| **Published** | Checkbox | 發布狀態 | 選中=已發布 |
| **PublishedDate** | Date | 發布日期 | 用於排序 |
| **Author** | Rich Text | 作者名稱 | 預設: "Native4A" |
| **Tags** | Multi-select | 文章標籤 | 用於分類 |

#### 語言代碼映射

```typescript
語言代碼映射 (Language Normalization)
=====================================
前端代碼     →  Notion 數據庫值
en          →  En
ja          →  Ja
zh          →  Zh
zh-CN       →  Zh
```

## 數據流向

### 流程 1: 構建時（SSR - Server Side Rendering）

#### 執行時機
- `gatsby build` 或 `gatsby develop` 時自動執行

#### 流程：
```
gatsby-node.ts createPages()
    ↓
(循環遍歷各語言: en, ja, zh, zh-CN)
    ↓
getNotionBlogPosts(language) [notionBlog.ts]
    ↓
連接 Notion API
    ↓
查詢所有已發布的文章
    ↓
按語言過濾 (Language = "En"/"Ja"/"Zh")
    ↓
按發布日期倒序排列
    ↓
返回文章列表
    ↓
為每篇文章創建靜態頁面
    ↓
生成語言前綴路由: /zh/blog/{slug}/
```

#### 代碼位置: `gatsby-node.ts` (第47-166行)

```typescript
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  // 1. 遍歷每種語言
  for (const language of LANGUAGES) {
    // 2. 調用 notionBlog 服務獲取該語言的所有文章
    const posts = await getNotionBlogPosts(language)
    
    // 3. 為每篇文章創建頁面
    posts.forEach((post, index) => {
      createPage({
        path: `/${language}/blog/${post.slug}/`,  // 語言前綴路由
        component: blogPost,
        context: {
          slug: post.slug,
          language: language,
          previousPostSlug: posts[index - 1]?.slug,
          nextPostSlug: posts[index + 1]?.slug,
        }
      })
    })
  }
}
```

### 流程 2: 運行時（CSR - Client Side Rendering）

#### 2.1 博客列表頁面 (`/blog`)

**頁面文件**: `src/pages/blog.js`

```typescript
const BlogIndex = ({ pageContext }) => {
  const [posts, setPosts] = useState([])
  const language = pageContext?.language || 'zh'
  
  useEffect(() => {
    // 調用 REST API 獲取列表
    const res = await fetch(`/api/notion-posts?language=${language}`)
    const data = await res.json()
    setPosts(data.posts)
  }, [language])
  
  return <ArticlePreview posts={posts} />
}
```

**數據流**:
```
用戶訪問 /blog
    ↓
blog.js 頁面組件挂載
    ↓
useEffect 觸發
    ↓
GET /api/notion-posts?language=zh
    ↓
notion-posts.ts 處理
    ↓
連接 Notion 數據庫
    ↓
查詢條件:
  - Language = "Zh" (標準化後)
  - 已發布 (Published = true)
  - 按 PublishedDate 倒序
    ↓
返回文章列表 JSON
    ↓
前端渲染文章列表
```

#### 2.2 博客詳情頁面 (`/blog/[slug]`)

**頁面文件**: `src/templates/blog-post.tsx`

```typescript
const BlogPostTemplate = ({ pageContext }) => {
  const [post, setPost] = useState(null)
  const slug = pageContext?.slug
  const language = pageContext?.language || 'zh'
  
  useEffect(() => {
    // 調用 REST API 獲取單篇文章
    const res = await fetch(`/api/notion-post?slug=${slug}&language=${language}`)
    const data = await res.json()
    setPost(data.post)
  }, [slug, language])
  
  return <article dangerouslySetInnerHTML={{ __html: post.content }} />
}
```

**數據流**:
```
用戶訪問 /blog/seo-basics
    ↓
blog-post.tsx 模板組件挂載
    ↓
useEffect 觸發
    ↓
GET /api/notion-post?slug=seo-basics&language=zh
    ↓
notion-post.ts 處理
    ↓
連接 Notion 數據庫
    ↓
查詢條件:
  - Slug = "seo-basics"
  - (可選) Language = "Zh"
    ↓
獲取頁面 ID
    ↓
調用 notion.blocks.children.list()
    ↓
獲取所有 Blocks (段落、標題、圖片等)
    ↓
blocksToHtml() 轉換為 HTML
    ↓
返回完整文章 JSON
    ↓
前端渲染文章內容
```

## API 端點

### 1. GET `/api/notion-posts`

**用途**: 獲取博客文章列表

**查詢參數**:
```
GET /api/notion-posts?language=zh
```

| 參數 | 類型 | 必需 | 默認值 | 說明 |
|------|------|------|--------|------|
| language | string | 否 | 'zh' | 語言代碼 (en/ja/zh) |

**響應示例**:
```json
{
  "posts": [
    {
      "id": "page-uuid-123",
      "title": "SEO 基礎知識",
      "slug": "seo-basics",
      "excerpt": "本文介紹 SEO 的基本概念...",
      "author": "Native4A",
      "tags": ["SEO", "教程"],
      "featuredImage": "https://...",
      "publishedDate": "2024-01-15T10:00:00Z",
      "language": "Zh"
    }
  ]
}
```

**錯誤響應**:
```json
{
  "error": "Failed to fetch posts",
  "posts": []
}
```

### 2. GET `/api/notion-post`

**用途**: 獲取單篇博客文章的完整內容

**查詢參數**:
```
GET /api/notion-post?slug=seo-basics&language=zh
```

| 參數 | 類型 | 必需 | 說明 |
|------|------|------|------|
| slug | string | 是 | 文章 slug |
| language | string | 否 | 語言代碼 |

**響應示例**:
```json
{
  "post": {
    "id": "page-uuid-123",
    "title": "SEO 基礎知識",
    "slug": "seo-basics",
    "excerpt": "本文介紹 SEO 的基本概念...",
    "author": "Native4A",
    "tags": ["SEO", "教程"],
    "featuredImage": "https://...",
    "publishedDate": "2024-01-15T10:00:00Z",
    "language": "Zh",
    "content": "<h1>SEO 基礎知識</h1><p>...</p>"
  }
}
```

## 服務層實現

### 1. notionBlog.ts - 核心服務

**位置**: `src/services/notionBlog.ts`

#### 初始化
```typescript
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID 
  || "f159575e-3494-4ba7-8727-3d9b7d2e439d"
```

#### 主要函數

##### a) getNotionBlogPosts(language?: string)

**功能**: 獲取特定語言的所有已發布文章

**參數**: 語言代碼 ('en' | 'ja' | 'zh')

**返回**: NotionBlogPost[] 數組

**查詢邏輯**:
```typescript
// 1. 基本過濾條件
filter: {
  property: "Published",
  checkbox: { equals: true }
}

// 2. 如果指定語言，添加語言過濾
if (language) {
  filter = {
    and: [
      { property: "Published", checkbox: { equals: true } },
      { property: "Language", select: { equals: normalizedLanguage } }
    ]
  }
}

// 3. 排序
sorts: [{ 
  property: "PublishedDate", 
  direction: "descending" 
}]
```

**映射邏輯**:
```typescript
posts.map(page => ({
  id: page.id,
  title: notionRichTextToPlain(page.properties.Title.title),
  slug: page.properties.Slug.rich_text[0].plain_text,
  excerpt: notionRichTextToPlain(page.properties.Excerpt.rich_text),
  author: page.properties.Author.rich_text[0]?.plain_text || "Native4A",
  tags: page.properties.Tags.multi_select.map(tag => tag.name),
  featuredImage: page.properties.FeaturedImage.files[0].file.url,
  publishedDate: page.properties.PublishedDate.date.start,
  language: page.properties.Language.select.name,
}))
```

##### b) getNotionBlogPost(pageId: string)

**功能**: 獲取單篇文章的完整內容（包括 Blocks）

**參數**: Notion 頁面 ID

**返回**: NotionBlogPost 對象

**過程**:
```typescript
// 1. 獲取頁面信息
const page = await notion.pages.retrieve({ page_id: pageId })

// 2. 獲取所有子塊（遞歸分頁）
let blocks = []
let cursor = undefined
while (hasMore) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    start_cursor: cursor
  })
  blocks = [...blocks, ...response.results]
  hasMore = response.has_more
  cursor = response.next_cursor
}

// 3. 轉換為 HTML
const content = await notionBlocksToHtml(blocks)

// 4. 返回完整對象
return {
  ...extractProperties(page),
  content: content
}
```

##### c) getNotionBlogPostBySlug(slug: string, language?: string)

**功能**: 通過 slug 查詢文章

**參數**: 
- slug: 文章 URL 友好名稱
- language: 可選語言代碼

**返回**: NotionBlogPost | null

**查詢**:
```typescript
// 1. 按 slug 查詢
filter: {
  property: "Slug",
  rich_text: { equals: slug }
}

// 2. 如果指定語言，添加組合過濾
if (language) {
  filter = {
    and: [
      { property: "Slug", rich_text: { equals: slug } },
      { property: "Language", select: { equals: normalizedLanguage } }
    ]
  }
}

// 3. 查詢結果後獲取完整內容
return getNotionBlogPost(response.results[0].id)
```

### 2. 文本轉換函數

#### 富文本轉純文本
```typescript
function notionRichTextToPlain(richTextArray: any[]): string {
  return richTextArray.map(text => text.plain_text).join("")
}
```

#### 富文本轉 HTML
```typescript
function notionRichTextToHtml(richTextArray: any[]): string {
  return richTextArray.map(text => {
    let html = text.plain_text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")

    if (text.annotations.bold) html = `<strong>${html}</strong>`
    if (text.annotations.italic) html = `<em>${html}</em>`
    if (text.annotations.code) html = `<code>${html}</code>`
    if (text.annotations.strikethrough) html = `<s>${html}</s>`
    if (text.href) html = `<a href="${text.href}">${html}</a>`

    return html
  }).join("")
}
```

#### Block 轉 HTML
```typescript
// 支持的 Block 類型:
- paragraph: <p>
- heading_1/2/3: <h1>/<h2>/<h3>
- bulleted_list_item: <li> (自動包裝 <ul>)
- numbered_list_item: <li> (自動包裝 <ol>)
- image: <figure><img>
- code: <pre><code>
- quote: <blockquote>
- divider: <hr>
- callout: <div class="callout">
```

**列表自動包裝邏輯**:
```typescript
// 跟踪列表狀態
let inList = false
let listType = "" // "ul" 或 "ol"

// 檢測列表項
const isList = type === "bulleted_list_item" || type === "numbered_list_item"

// 列表類型改變時，關閉前一個列表
if (inList && (!isList || currentListType !== listType)) {
  html += `</${listType}>`
  inList = false
}

// 開始新列表
if (isList && !inList) {
  html += `<${currentListType}>`
  inList = true
}
```

## 語言處理機制

### 語言代碼標準化

```typescript
function normalizeLanguageCode(language: string): string {
  const languageMap: Record<string, string> = {
    'en': 'En',
    'ja': 'Ja',
    'zh': 'Zh',
    'zh-cn': 'Zh',
  }
  return languageMap[language.toLowerCase()] || 'Zh'
}
```

### 應用位置

1. **gatsby-node.ts**: 構建時獲取文章
   ```typescript
   for (const language of LANGUAGES) {
     const posts = await getNotionBlogPosts(language)
   }
   ```

2. **notion-posts.ts**: 列表 API
   ```typescript
   const normalizedLanguage = languageMap[language] || 'Zh'
   
   filter: {
     property: "Language",
     select: { equals: normalizedLanguage }
   }
   ```

3. **notion-post.ts**: 詳情 API
   ```typescript
   // 注意: 詳情 API 中語言過濾是可選的
   // 優先級: 按 slug 查詢 > 按語言過濾
   ```

## 路由結構

### 生成的路由

```
/zh/blog/                    → 中文文章列表
/zh/blog/seo-basics/         → 中文詳情頁
/en/blog/                    → 英文文章列表
/en/blog/seo-basics/         → 英文詳情頁
/ja/blog/                    → 日文文章列表
/ja/blog/seo-basics/         → 日文詳情頁
```

### 重定向規則

```typescript
// 舊路由到新路由 (中文為默認)
/blog/ → /zh/blog/
/blog/{slug}/ → /zh/blog/{slug}/
```

### 客户端路由 (Client-only routes)

```typescript
// gatsby-node.ts 中的 onCreatePage
matchPath: '/blog/*'           → /blog/[slug]/
matchPath: '/zh-CN/blog/*'     → /zh-CN/blog/[slug]/
```

## 環境變數配置

### 必需變數

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=f159575e-3494-4ba7-8727-3d9b7d2e439d
```

### 獲取 NOTION_API_KEY

1. 訪問 https://www.notion.so/my-integrations
2. 創建新集成 (Integration)
3. 複製 "Internal Integration Token"
4. 在 Notion 數據庫中共享該集成

### 獲取 NOTION_DATABASE_ID

在 Notion 數據庫 URL 中:
```
https://www.notion.so/workspaceId/f159575e-3494-4ba7-8727-3d9b7d2e439d?v=...
                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                         DATABASE_ID
```

## 調試

### 控制台日誌

#### 構建時 (gatsby-node.ts)
```
[v0] Fetching Notion posts for language: zh
[v0] Fetched 14 posts for zh
```

#### 運行時
```
[v0] Error loading blog posts: Network error
[v0] Notion API error: Invalid database ID
```

### 檢查 API

```bash
# 檢查列表 API
curl "http://localhost:8000/api/notion-posts?language=zh"

# 檢查詳情 API
curl "http://localhost:8000/api/notion-post?slug=seo-basics&language=zh"
```

### 常見問題

| 問題 | 原因 | 解決方案 |
|------|------|--------|
| 404 Not Found | API 不存在 | 確保運行 `gatsby develop` |
| Unauthorized | API Key 無效 | 驗證 NOTION_API_KEY |
| 數據庫不存在 | DATABASE_ID 錯誤 | 檢查 Notion 數據庫 ID |
| 文章不顯示 | Published=false | Notion 中勾選 Published |
| 語言錯誤 | 語言代碼不標準化 | 確保使用正確的大小寫 |

## 性能優化

### 1. 構建時緩存

文章在 Gatsby 構建時已加載，不需每次訪問查詢 Notion。

### 2. API 響應緩存

Vercel Functions 可配置緩存:
```typescript
res.setHeader("Cache-Control", "max-age=3600")  // 1小時緩存
```

### 3. 圖片優化

```typescript
// Notion 文件 URL 已支持優化
const imageUrl = typeData.file.url  // Notion 提供的 CDN URL
```

### 4. 分頁加載

Notion API 自動處理分頁:
```typescript
// 自動遞歸獲取所有 blocks
while (hasMore) {
  const response = await notion.blocks.children.list({
    start_cursor: cursor
  })
  hasMore = response.has_more
  cursor = response.next_cursor
}
```

## 工作流程總結

### 編輯流程（內容管理員）

```
1. 在 Notion 數據庫中創建新文章
   ↓
2. 填寫所有必需字段 (Title, Slug, Content)
   ↓
3. 勾選 Published 複選框
   ↓
4. 設置 Language 為目標語言 (Zh/En/Ja)
   ↓
5. 填寫 PublishedDate
   ↓
6. 系統會自動同步
   - Gatsby 構建時載入
   - 或用戶訪問時動態加載
```

### 發布流程

```
手動編輯 (Notion)
    ↓
自動構建 (gatsby build)
    ↓
生成靜態頁面 + API
    ↓
部署到 Vercel
    ↓
用戶訪問網站
    ↓
獲取文章內容
```

### 更新流程

```
更新現有文章 (Notion)
    ↓
觸發 Webhook (可選配置)
    ↓
重新部署網站
    ↓
或用戶訪問時動態取最新內容
```

## 技術棧

| 技術 | 用途 |
|------|------|
| Notion API | 內容數據源 |
| @notionhq/client | Notion SDK |
| Gatsby | 靜態網站生成器 |
| Gatsby Functions | 無伺服器 API |
| React | 前端框架 |
| TypeScript | 類型安全 |
| Vercel | 部署平台 |

## 參考資源

- [Notion API 文檔](https://developers.notion.com/reference/intro)
- [Notion 數據庫查詢](https://developers.notion.com/reference/post-database-query)
- [Gatsby 文檔](https://www.gatsbyjs.com/docs/)
- [Vercel Functions](https://vercel.com/docs/functions)

---

**最後更新**: 2026年1月16日  
**狀態**: 完整實現，正常運作
