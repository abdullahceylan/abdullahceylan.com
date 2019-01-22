let contentfulConfig;
const isDev = process.env.NODE_ENV !== 'production';

try {
  contentfulConfig = require('./.contentful');
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
    development: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  };
} finally {
  const { spaceId, accessToken } = contentfulConfig.production;
  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful space ID and access token need to be provided.'
    );
  }
}

module.exports = {
  siteMetadata: {
    title: 'Abdullah Ceylan',
    siteUrl: 'http://www.abdullahceylan.com',
    description: 'Digital portfolio for Abdullah Ceylan',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Abdullah Ceylan',
        short_name: 'Abdullah Ceylan',
        start_url: '/',
        background_color: '#121212',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'static/logos/logo-512.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `http://www.abdullahceylan.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        anonymize: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#FFFFFF',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: isDev
        ? contentfulConfig.development
        : contentfulConfig.production,
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-netlify',
  ],
};
