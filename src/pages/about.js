import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout>
      <section className="about">
        <div className="about__section" data-section="left">

          <h1 className="about__title"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
          > 
            Hi 👋 I'm Taylor, <br />
            a Front End Engineer <br />
            with a heart for social impact.
          </h1>
          <p className="about__copy"
             data-sal="fade"
             data-sal-delay="800"
             data-sal-duration="800"
             data-sal-easing="ease-in-out"
           >
            I am passionate about building intuitive, accessible, and responsive digital experiences for users 
            and stakeholders alike. I regularly work with frameworks and languages such as WordPress, PHP, 
            Javascript, HTML5, LESS, and SASS. I know that this is an ever-changing field to work in, and 
            I am always eager to pick up new skills, languages, or improvements to my craft.
          </p>
          <p className='about__copy'
              data-sal="fade"
              data-sal-delay="800"
              data-sal-duration="800"
              data-sal-easing="ease-in-out">
            I formally studied Computer Science, UX Research and Design, as well as a bit of Feminist Theory 
            and Art History. Whatever I am doing though, I do it with a
            <strong> sincere desire to learn as much as I can and contribute to a better world.</strong>
          </p>
        </div>
        <div className="about__section" 
             data-section="right"
             data-sal="fade"
             data-sal-delay=""
             data-sal-duration="400"
             data-sal-easing="ease-in-out">
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