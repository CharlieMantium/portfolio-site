const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    'babel-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Alfa Slab One`,
            variants: [`400`, `700`],
          },
          {
            family: `Noticia Text`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-smoothscroll`,
  ],
};
