module.exports = {
  siteMetadata: {
    title: `Iconoclasm - Icon packs for iOS 14 homescreens`,
    description: `Iconoclasm is a collection of high res iOS 14 icon packs, to customize your iPhone homescreen and give your apps a new look.`,
    author: `AvGre Dev, Brain of Laraine`,
    url: "https://www.iconoclasm.shop",
    keywords: "icons, iconoclasm, ios14, homescreen, app icons",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.svg`,
        icon_options: {
          purpose: `maskable`,
        },
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
        name: `gold`,
        path: `${__dirname}/src/gold`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `silver`,
        path: `${__dirname}/src/silver`,
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
        name: `red`,
        path: `${__dirname}/src/red`,
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
        name: `rainbow`,
        path: `${__dirname}/src/rainbow`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `red`,
        path: `${__dirname}/src/red`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pastels`,
        path: `${__dirname}/src/pastel`,
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
