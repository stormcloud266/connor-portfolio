module.exports = {
  siteMetadata: {
    title: 'Connor Norton',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#057788',
        theme_color: '#057788',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `7cef981ca778ce0fee1561d08662f8`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL
        apiUrl: 'https://site-api.datocms.com',
      },
    },
    'gatsby-plugin-offline',
  ],
}
