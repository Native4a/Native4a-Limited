import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN must be defined in environment variables'
  );
}

export const contentfulClient = createClient({
  space,
  accessToken,
});

export async function getContentfulData(contentType: string, locale = 'zh') {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: contentType,
      locale,
    });
    return entries.items;
  } catch (error) {
    console.error(`Error fetching Contentful data for ${contentType}:`, error);
    return [];
  }
}
