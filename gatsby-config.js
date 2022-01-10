module.exports = {
  siteMetadata: {
    title: `Taylor McPherson`,
    siteUrl: `https://www.taylormcpherson.dev`,  // No trailing slash allowed!
    description:
      `Taylor McPherson is a frontend engineer with specialties in web accessibility, user experience, and overall web and mobile development. Taylor believes in leveraging technology for a better world.`,
      image: "/icon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: .25, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    }
  ],
};
