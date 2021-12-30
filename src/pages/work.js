import * as React from 'react'
import Layout from '../components/layout'
import ProjectCards from '../components/projectCards'

const WorkPage = () => {
  return (
    <Layout>
      <div className="work">
        <section className="work__intro">
          <h1 className="work__intro-title">
              <span 
                  data-sal="slide-right"
                  data-sal-delay="100"
                  data-sal-easing="ease">
                Creative
              </span><br />
              <span 
                  data-sal="slide-right"
                  data-sal-delay="500"
                  data-sal-easing="ease">
                Accessible
              </span><br />
              <span 
                  data-sal="slide-right"
                  data-sal-delay="900"
                  data-sal-easing="ease">
                &#38; Delightful
              </span><br />
              <span 
                  data-sal="slide-right"
                  data-sal-easing="ease">
                Development
              </span><br />
          </h1>
          <h2 className="work__intro-subtitle"
              data-sal="slide-right"
              data-sal-delay="800"
              data-sal-easing="ease">
              for a better world.
          </h2>
        </section>

        <section className="work__projects-container">
          <p>Selected Works</p>
          <ProjectCards></ProjectCards>
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default WorkPage