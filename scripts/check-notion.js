require('dotenv').config();

const https = require('https');

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "b73bd3a3ecba44f3ba132b315671033a";

console.log('[DEBUG] NOTION_API_KEY:', NOTION_API_KEY ? 'SET' : 'NOT SET');
console.log('[DEBUG] NOTION_DATABASE_ID:', NOTION_DATABASE_ID);

function notionRequest(path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.notion.com',
      port: 443,
      path: path,
      method: body ? 'POST' : 'GET',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2025-09-03',
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(data),
          });
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }

    req.end();
  });
}

async function checkNotionDatabase() {
  try {
    // Remove hyphens from database ID for API calls
    const dbId = NOTION_DATABASE_ID.replace(/-/g, '');
    const path = `/v1/databases/${dbId}/query`;
    
    console.log('[DEBUG] API path:', path);
    
    // Query all pages first
    console.log('[DEBUG] Querying published pages in database...');
    const response = await notionRequest(path, {
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'PublishedDate',
          direction: 'descending',
        },
      ],
    });

    if (response.status !== 200) {
      console.error('[ERROR] API Error status:', response.status);
      console.error('[ERROR] Response:', JSON.stringify(response.data, null, 2));
      return;
    }

    const results = response.data.results || [];
    console.log(`[DEBUG] Total published pages: ${results.length}`);

    if (results.length > 0) {
      console.log('[DEBUG] ✅ Published posts found:');
      results.forEach((page, index) => {
        const props = page.properties;
        const title = props.Title?.title?.[0]?.plain_text || 'N/A';
        const language = props.Language?.select?.name || 'N/A';
        const slug = props.Slug?.rich_text?.[0]?.plain_text || 'N/A';
        console.log(`  [${index + 1}] Title: ${title}, Language: ${language}, Slug: ${slug}`);
      });
    } else {
      console.log('[DEBUG] ⚠️  No published posts found!');
      console.log('[DEBUG] Make sure to:');
      console.log('  1. Create blog posts in your Notion database');
      console.log('  2. Check the "Published" checkbox');
      console.log('  3. Fill in Title, Slug, and Language fields');
    }
  } catch (error) {
    console.error('[ERROR] Failed:', error.message);
  }
}

checkNotionDatabase();
