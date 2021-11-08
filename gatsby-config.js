const path = require(`path`);

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`)
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-plugin-scroll-reveal`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Roboto']
                }
            }
        }
    ]
};
