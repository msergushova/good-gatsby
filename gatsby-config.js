module.exports = {
  siteMetadata: {
    title: 'Good Gatsby',
    desc: 'great book... read it',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xgul1xdz1b1p',
        accessToken:
          '104622e91f3c760d4e5a01182cf9726684f901c8a1b11370c03935285356ec58',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
