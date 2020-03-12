module.exports = {
  plugins: [
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
