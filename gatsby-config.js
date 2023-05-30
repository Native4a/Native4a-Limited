require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "",
    description: "",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nativeaaaa.com.hk`,
        stripQueryString: true,
      },
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://nativeaaaa.com.hk/sitemap.xml',
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    "gatsby-plugin-robots-txt",
    
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
  ],
};
