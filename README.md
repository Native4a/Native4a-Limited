# NATIVE4A ADV LTD

Create by Taki Kwan

![An article page of the starter blog](./src/img/2023_native4a_logo_p.svg "An article page of the starter blog")

NATIVE4A ADV LTD是一家專業的SEO公司，成立於2017年。該公司提供多種SEO服務，包括關鍵詞研究、網站優化、內容創建、社交媒體管理等等。該公司擁有一支技術優秀、經驗豐富的團隊，他們能夠利用最新的SEO技術和工具，為客戶提供最佳的解決方案。NATIVE4A ADV LTD的目標是幫助客戶提高網站的排名和流量，提高線上品牌知名度，並實現商業目標。該公司重視客戶的需求，能夠量身定制符合客戶需求的服務方案。如果您正在尋找一家可信賴的SEO公司來提高網站的搜索引擎排名和流量，NATIVE4A ADV LTD是您的不二之選。

## Features

- Simple content model and structure. Easy to adjust to your needs.
- Use the [synchronization feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization) of our [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/).
- Responsive/adaptive images via [gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/) and our [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).

## Getting started

See our [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Get the source code and install dependencies.

```
$ git clone https://github.com/contentful/starter-gatsby-blog.git
$ npm install
```

Or use Gatsby Cloud

Use Deploy Now to get started in [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

[<img src="https://www.gatsbyjs.com/deploynow.png" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/contentful/starter-gatsby-blog)

If you use Deploy Now, Gatsby Cloud will run the `gatsby-provision` script on your behalf, if you choose, after you Quick Connected to your empty Contentful Space. That script will add the necessary content models and content to support this site.


Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new contentful-starter-blog https://github.com/contentful/starter-gatsby-blog/
```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `npm run setup`.

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./.contentful.json`).

`npm run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.

## Deployment

See the [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

## Contribution

Feel free to open pull requests to fix bugs. If you want to add features, please have a look at the [original version](https://github.com/contentful-userland/gatsby-contentful-starter). It is always open to contributions and pull requests.

You can learn more about how Contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).
