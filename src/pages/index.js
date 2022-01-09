import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ProjectCards from '../components/projectCards'

const IndexPage = () => {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <meta charSet="utf-8" />
        <link rel="icon" 
              href="data:image/svg+xml,
              <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
              <text y=%22.9em%22 font-size=%2290%22>
              🥳
              </text></svg>">
        </link>
      </Helmet>
      <div className="work">
        <section className="work__intro">
          <h1 className="work__intro-title">
              <span 
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease">
                Creative,
              </span><br />
              <span 
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-easing="ease">
                Accessible,
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
          <h2 className="work__section-title">
            Selected Works
          </h2>
          <ProjectCards></ProjectCards>
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage