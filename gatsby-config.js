require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Abhay`,
    siteTitleAlt: `Abhay Korat - Portfolio`,
    siteHeadline: `iPhone - Celebration Theme from @AppEnthusiastic`,
    siteUrl: `https://abhuzz.github.io/Portfolio/`,
    siteDescription: `Mobile Application Developer`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@AppEnthusiastic`,
  },
  plugins: [
    {
      resolve: `@appenthusiastic/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abhay Korat - @AppEnthusiastic`,
        short_name: `Abhay`,
        description: `Mobile Application Developer`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
