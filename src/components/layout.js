import React from "react"
import Helmet from 'react-helmet'
import NavBar from "./navbar"
import "@fontsource/roboto"
import "@fontsource/raleway"
import "../styles/styles.scss"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <meta charSet="utf-8" />
        <title>Taylor McPherson</title>
        <meta name="description" content="Taylor McPherson is a frontend software engineer who specializes in web accessibility, user experience, and overall web and mobile development. Taylor believes in leveraging technology for a better world." />
        <link rel="icon" 
              href="data:image/svg+xml,
              <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
              <text y=%22.9em%22 font-size=%2290%22>
              🥳
              </text></svg>">
        </link>
      </Helmet>
      <NavBar></NavBar>
      <main style={{ margin: `0 auto`, maxWidth: `100vw` }}>
          <div className="presentational__wrapper--layout">
              {children}
          </div>
      </main>
      <Footer></Footer>
    </div>
  )
}