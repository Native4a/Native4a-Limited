# Notion Blog Integration Setup Guide

## Overview
This guide walks you through setting up Notion as your blog CMS and configuring it to sync with your website.

## Prerequisites
- A Notion account
- Access to Notion's API (beta features enabled)
- Vercel project with the website deployed

## Step 1: Create a Notion Integration

1. Go to [Notion Developers](https://www.notion.so/my-integrations)
2. Click "Create new integration"
3. Fill in the details:
   - **Name**: "Blog CMS" or similar
   - **Logo**: Optional
   - **Associated workspace**: Select your workspace
4. Click "Submit"
5. Copy the **Internal Integration Token** (this is your `NOTION_API_KEY`)

## Step 2: Create a Blog Database in Notion

1. In Notion, create a new database with the following properties:
   - **Title** (Text) - Article title
   - **Slug** (Text) - URL-friendly slug (e.g., "my-first-post")
   - **Excerpt** (Text) - Short description
   - **Content** (Rich Text) - Full article content
   - **FeaturedImage** (Files & media) - Cover image
   - **Author** (Text) - Article author name
   - **Tags** (Multi-select) - Article tags/categories
   - **PublishedDate** (Date) - Publication date
   - **Language** (Select) - Choose from: en, ja, zh
   - **Published** (Checkbox) - Check to publish

2. Duplicate this template for each language or use the same database with Language property filtering

3. Share the database with your integration:
   - Click the "Share" button
   - Find your integration in the list
   - Give it "Edit" access

4. Copy the database ID from the URL:
   - URL format: `https://notion.so/myworkspace/{DATABASE_ID}?v=...`
   - This is your `NOTION_DATABASE_ID`

## Step 3: Add Environment Variables

Add these to your Vercel project settings:

```
NOTION_API_KEY=<your_internal_integration_token>
NOTION_DATABASE_ID=<your_database_id>
VERCEL_REDEPLOY_HOOK=<optional_webhook_url>
```

### Optional: Set Up Auto-Redeploy

For real-time blog updates when you publish in Notion:

1. Go to your Vercel project settings → **Deployments** → **Git**
2. Look for **Deploy Hooks**
3. Create a new hook named "Notion Blog Updates"
4. Copy the webhook URL
5. Add it to environment variables as `VERCEL_REDEPLOY_HOOK`

Then configure Notion webhook:

1. In [Notion Developers](https://www.notion.so/my-integrations), select your integration
2. Under "Webhooks", create a new webhook:
   - **Endpoint URL**: `https://your-domain.com/api/notion-webhook`
   - **Events**: Page updates in your blog database

## Step 4: Create Your First Blog Post

1. In your Notion database, create a new page with:
   - **Title**: "My First Blog Post"
   - **Slug**: "my-first-blog-post"
   - **Excerpt**: "An introduction to my blog"
   - **Content**: Write your article using Notion's rich text editor
   - **FeaturedImage**: Upload a cover image
   - **Author**: Your name
   - **Tags**: Add relevant tags
   - **PublishedDate**: Today's date
   - **Language**: Select the content language
   - **Published**: Check this box to publish

2. The article will be automatically fetched on your next rebuild

## Supported Content Formats

The Notion integration automatically converts these Notion block types to HTML:
- Paragraphs
- Headings (H1, H2, H3)
- Lists (bulleted and numbered)
- Code blocks
- Block quotes
- Images
- Dividers

Rich text formatting (bold, italic, code, links) is also supported.

## URL Structure

Blog posts are accessible at:
- Chinese (default): `/zh/blog/my-first-blog-post/`
- English: `/en/blog/my-first-blog-post/`
- Japanese: `/ja/blog/my-first-blog-post/`

## Troubleshooting

### Posts not appearing?
1. Ensure the page is shared with your integration
2. Check that **Published** checkbox is enabled
3. Verify slug is filled in and URL-safe
4. Check environment variables are correctly set

### Images not loading?
1. Ensure images are uploaded (not links)
2. Check your image URLs are publicly accessible
3. Verify browser console for CORS errors

### Build fails?
1. Check Notion API is responding correctly
2. Verify database structure matches expected properties
3. Review build logs for specific errors

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NOTION_API_KEY` | Yes | Your Notion internal integration token |
| `NOTION_DATABASE_ID` | Yes | Your Notion database ID |
| `VERCEL_REDEPLOY_HOOK` | No | Webhook URL for auto-redeploy on updates |

## API Reference

### getNotionBlogPosts(language?: string)
Fetches all published blog posts, optionally filtered by language.

### getNotionBlogPostBySlug(slug: string, language?: string)
Fetches a single blog post by its slug and optional language.

## Next Steps

1. Create content in Notion
2. Deploy the updated code
3. View your blog at `/en/blog/` (or your language)
4. Configure webhook for real-time updates (optional)
