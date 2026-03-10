require('dotenv').config();

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "f159575e-3494-4ba7-8727-3d9b7d2e439d";

async function checkNotionDatabase() {
  console.log('[DEBUG] NOTION_API_KEY:', process.env.NOTION_API_KEY ? 'SET' : 'NOT SET');
  console.log('[DEBUG] NOTION_DATABASE_ID:', NOTION_DATABASE_ID);

  try {
    // Try to retrieve database
    const database = await notion.databases.retrieve({
      database_id: NOTION_DATABASE_ID,
    });

    console.log('[DEBUG] Database found:', database.title?.[0]?.plain_text || 'Unknown');
    console.log('[DEBUG] Database schema:', Object.keys(database.properties));

    // Try to query all pages (without filter)
    const allPages = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    });

    console.log(`[DEBUG] Total pages in database: ${allPages.results.length}`);

    // Check published posts
    const publishedPages = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
    });

    console.log(`[DEBUG] Published pages: ${publishedPages.results.length}`);

    if (publishedPages.results.length > 0) {
      console.log('[DEBUG] First published page:');
      const page = publishedPages.results[0];
      console.log('  Title:', page.properties.Title?.title?.[0]?.plain_text || 'N/A');
      console.log('  Slug:', page.properties.Slug?.rich_text?.[0]?.plain_text || 'N/A');
      console.log('  Language:', page.properties.Language?.select?.name || 'N/A');
      console.log('  Published:', page.properties.Published?.checkbox);
    } else {
      console.log('[DEBUG] ⚠️  No published pages found! Make sure to:');
      console.log('  1. Create blog posts in your Notion database');
      console.log('  2. Check the "Published" checkbox for each post');
      console.log('  3. Fill in required fields: Title, Slug, Language');
    }
  } catch (error) {
    console.error('[ERROR] Failed to connect to Notion:', error.message);
    console.error('[ERROR] Make sure:');
    console.error('  1. NOTION_API_KEY is set correctly in environment');
    console.error('  2. NOTION_DATABASE_ID is correct');
    console.error('  3. The integration has access to the database (Share → Add integration)');
  }
}

checkNotionDatabase();
