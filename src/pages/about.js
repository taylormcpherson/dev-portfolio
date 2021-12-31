import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <section className="about">
        <div className="about__section" data-section="left">
          <h1 className="about__title"> Hi 👋 I'm Taylor.</h1>
          <p className="about__copy">I'm a front </p>
        </div>
        <div className="about__section" data-section="right">
          <div className='about__img-wrapper'>
            <StaticImage src='../images/hi.jpg' alt='Black and white portrait of Taylor McPherson.'></StaticImage>   
          </div>
        </div>        
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage