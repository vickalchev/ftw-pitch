module.exports = {
  siteMetadata: {
    title: `FTW Pitch`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
   resolve: "gatsby-plugin-anchor-links",
   options: {
      offset: -100,
      duration: 1000
    }
    },

  ]
};