const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-polished',
    'babel-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'pl'],
        defaultLanguage: 'en',
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Alfa Slab One`,
            subsets: [`latin-ext`],
            variants: [`400`, `700`],
          },
          {
            family: `Noticia Text`,
            subsets: [`latin-ext`],
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        include: path.join(__dirname, 'static'),
      },
    },
    'react-country-flag',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karol Zieniewicz - portfolio site`,
        short_name: `Karol Zieniewicz - portfolio`,
        theme_color: `#003049`,
      },
    },
  ],
};
