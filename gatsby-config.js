module.exports = {
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'babel-plugin-styled-components',
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
    'react-country-flag',
    `gatsby-plugin-smoothscroll`,
  ],
};
