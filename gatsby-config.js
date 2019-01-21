const path = require('path');
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'Jonathan Gallo',
		desc: 'A personal, informational website and design/development playground for Jonathan Gallo',
	},
	pathPrefix: '/blog',
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jonathan Gallo Personal website`,
				short_name: `JDCastro`,
				start_url: `/`,
				background_color: `#fafafa`,
				theme_color: `#353535`,
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: `standalone`,
				icon: `src/images/favicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				// Add any options here
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.join(__dirname, 'src', 'images'),
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				//SPACE_ID build environment variable from Netlify or Gatsby?
				spaceId: 'oghc6wtiomc3',
				//DELIVERY_API_TOKEN build environment variable from Netlify or Gatsby?
				accessToken: '9f37d0ec8416ebe8c9c11b5db58b1a85d39c0f369f15fcc863b47f53c32179e7',
			},
		},
		// {
		// 	resolve: 'gatsby-plugin-eslint',
		// 	options: {
		// 		test: /\.js$|\.jsx$/,
		// 		exclude: /(node_modules|cache|public)/,
		// 		options: {
		// 			emitWarning: true,
		// 			failOnError: false
		// 		}
		// 	}
		// },
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Jonathan Gallo Personal Website',
				short_name: 'personal',
				start_url: '/',
				icon: 'src/images/jdc-favicon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-130258530-1",
				head: false,
				anonymize: true,
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: [],
				// Enables Google Optimize using your container Id
				// optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",

				// Any additional create only fields (optional)
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				// cookieDomain: "jacobdcastro.com",
			},
		},
		// {
		// 	resolve: `gatsby-plugin-typography`,
		// 	options: {
		// 		pathToConfigModule: 'src/utils/typography',
		// 	}
		// },
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-lodash',
	],
};
