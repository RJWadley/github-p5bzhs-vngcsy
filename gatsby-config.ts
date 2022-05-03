import type { GatsbyConfig } from "gatsby"
const path = require("path")

const config: GatsbyConfig = {
  // TODO add proper metadata
  siteMetadata: {
    title: `Reform Starter`,
    description: `A starter for Gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    image: `./src/images/logo.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // TODO setup a contentful space
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Reform Starter`, // TODO add name
        short_name: `Reform`, // TODO add short name
        start_url: `/`,
        background_color: `#ffffff`, // TODO add theme color
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `./src/images/global/icon.png`, //TODO add favicon
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.resolve("src"),
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve("./src/components/Providers.tsx"),
      },
    },
    {
      resolve: `gatsby-plugin-svgr`,
      options: {
        prettier: true,
        svgo: true,
        memo: true,
        ref: true,
        svgoConfig: {
          plugins: [
            {
              name: "removeViewBox",
              active: false,
            },
            {
              name: "removeDimensions",
              active: true,
            },
            {
              name: "removeRasterImages",
              active: true,
            },
            {
              name: "reusePaths",
              active: true,
            },
            {
              name: "cleanupIDs",
              active: false,
            },
            {
              name: "prefixIds",
              active: false,
            },
            {
              name: "removeUselessDefs",
              active: true,
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true,
      },
    },
  ],
}

export default config
