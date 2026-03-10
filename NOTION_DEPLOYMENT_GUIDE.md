# Notion Blog Integration - Testing & Deployment Guide

## Pre-Deployment Checklist

- [ ] Notion integration created and token copied
- [ ] Blog database created with required properties
- [ ] Database shared with integration
- [ ] Environment variables added to Vercel
- [ ] At least one test blog post created in Notion
- [ ] Code committed and ready to deploy

## Testing Locally

### 1. Set Up Local Environment

```bash
# Copy environment file
cp .env.example .env.local

# Add your Notion credentials
NOTION_API_KEY=your_token
NOTION_DATABASE_ID=your_database_id
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Test Notion Service

Create a test file `test-notion.js`:

```javascript
const { getNotionBlogPosts, getNotionBlogPostBySlug } = require('./src/services/notionBlog');

(async () => {
  console.log('Testing Notion integration...');
  
  // Test fetching all posts
  const posts = await getNotionBlogPosts('zh');
  console.log('Posts fetched:', posts.length);
  console.log('Sample post:', posts[0]);
  
  // Test fetching single post
  if (posts.length > 0) {
    const post = await getNotionBlogPostBySlug(posts[0].slug, 'zh');
    console.log('Full post loaded:', post?.title);
  }
})();
```

Run: `node test-notion.js`

### 4. Build Locally

```bash
pnpm build
```

Check for any errors related to Notion blog posts.

### 5. Serve Locally

```bash
pnpm serve
```

Visit `http://localhost:9000/zh/blog/` to see the blog listing.

## Deployment Steps

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "feat: integrate Notion blog CMS"
git push origin v0/native4a-5385aa19
```

### Step 2: Add Environment Variables to Vercel

1. Go to Vercel Project Settings
2. Click "Environment Variables"
3. Add:
   - `NOTION_API_KEY` = your integration token
   - `NOTION_DATABASE_ID` = your database ID
   - `VERCEL_REDEPLOY_HOOK` = (optional) deployment hook URL

### Step 3: Deploy

Option A: Manual deploy from GitHub
- Visit Vercel dashboard
- Click "Deploy" on your branch

Option B: Auto-deploy
- Merge to main branch
- Vercel will auto-deploy

### Step 4: Verify Deployment

1. Wait for build to complete
2. Visit production URL: `https://your-domain.com/zh/blog/`
3. Check if blog posts appear
4. Click on a post to verify full content loads
5. Test language switching to verify localized blog URLs work

## Troubleshooting Deployment Issues

### Build fails with "Cannot find module '@notionhq/client'"

```bash
# Ensure dependencies are installed
pnpm install
# Clear cache and rebuild
pnpm build --no-cache
```

### Blog posts not appearing

1. **Check Notion database:**
   - Verify database is shared with integration
   - Ensure at least one post has "Published" checkbox enabled
   - Confirm all required fields are filled (Title, Slug, etc.)

2. **Check environment variables:**
   - Verify `NOTION_API_KEY` is correct in Vercel
   - Verify `NOTION_DATABASE_ID` is correct
   - Redeploy after adding/changing env vars

3. **Check Notion API:**
   - Go to https://developers.notion.com/reference/get-database
   - Test your API key directly

### Rich text content not rendering

1. Check browser console for errors
2. Verify HTML content is being generated correctly
3. Test with simpler Notion blocks first (paragraphs, headings)

### Images not displaying

1. Ensure images are uploaded to Notion (not linked externally)
2. Verify image URLs are accessible
3. Check for CORS issues in browser console

## Real-Time Sync Setup

### Create Vercel Deploy Hook

1. Vercel Dashboard → Settings → Deployments → Git
2. Click "Create Hook" under Deploy Hooks
3. Name it "Notion Blog Updates"
4. Copy the webhook URL
5. Add to Vercel env vars as `VERCEL_REDEPLOY_HOOK`

### Set Up Notion Webhook

1. Go to [Notion Developers](https://www.notion.so/my-integrations)
2. Select your integration
3. Under "Webhooks", click "Add new webhook"
4. Configure:
   - **Endpoint URL**: `https://your-domain.com/api/notion-webhook`
   - **Events**: Page updates
5. Click "Save"

### Test Webhook

1. Edit a blog post in Notion
2. Monitor Vercel deployment dashboard
3. A new deployment should start automatically

## Monitoring & Maintenance

### Monitor Build Logs

```bash
# View live deployment logs
vercel logs --follow
```

### Check for Notion API Issues

Add monitoring to your webhook endpoint:

```bash
# View webhook errors
vercel logs --function notion-webhook
```

### Update Blog Posts

1. Edit a post in Notion (published posts only)
2. Wait for webhook to trigger
3. Verify changes appear on site

## Rollback Plan

If Notion integration fails:

1. Revert to Contentful by:
   - Checking out previous Git commit
   - Reverting `gatsby-node.ts` changes
   - Reverting blog template changes
   - Pushing to Git
   - Vercel will auto-redeploy with Contentful

## Performance Optimization

- Blog posts are fetched on-demand during page render
- Consider adding caching for frequently accessed posts
- Notion API rate limits: 3 requests per second

## Next Steps

1. Create more blog posts in Notion
2. Configure SEO metadata
3. Set up webhooks for automatic updates
4. Monitor performance and analytics
