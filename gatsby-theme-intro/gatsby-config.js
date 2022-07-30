module.exports = ({
  basePath = "/",
  contentPath = "content/",
  showThemeLogo = false,
  theme = "classic",
}) => {
  return {
    siteMetadata: {
      description: "Personal page of Zain Zafar",
      locale: "en",
      showThemeLogo,
      title: "Zain Zafar",
      formspreeEndpoint: "https://formspree.io/f/{your-id}",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")(theme)),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
      `gatsby-plugin-react-svg`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
