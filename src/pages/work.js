import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectCards from '../components/projectCards'

const WorkPage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <meta charSet="utf-8" />
        <title>Work</title>
      </Helmet>
      <div className="work">
        <section className="work__intro">
          <h1 className="work__intro-title">
              <span 
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease">
                Creative
              </span><br />
              <span 
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-easing="ease">
                Accessible
              </span><br />
              <span 
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease">
                &#38; Delightful
              </span><br />
              <span 
                  data-sal="slide-up"
                  data-sal-delay="500"
                  data-sal-duration="800"
                  data-sal-easing="ease">
                Development
              </span><br />
          </h1>
          <h2 className="work__intro-subtitle"
              data-sal="slide-up"
              data-sal-delay="800"
              data-sal-easing="ease">
              for a better world.
          </h2>
        </section>

        <section className="work__projects-container">
          <div className="work__section-animation">
            <h2 className="work__section-title" 
                aria-label="'Selected Works' in a text marquee.">
              KS • SELECTED WORKS • SELECTED WORKS • SELECTED WORKS 
            </h2>
          </div>
          <ProjectCards></ProjectCards>
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default WorkPage