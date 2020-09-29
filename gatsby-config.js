module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: `Avtar G Dev`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Mono`,
            variants: [`100`, `200`, `400`, `700`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `black`,
        path: `${__dirname}/src/black`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `white`,
        path: `${__dirname}/src/white`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `darkpop`,
        path: `${__dirname}/src/darkpop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lightpop`,
        path: `${__dirname}/src/lightpop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/backgrounds`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`,
        },
      },
    },
  ],
}
