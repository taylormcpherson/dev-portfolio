import React from "react"
import NavBar from "./navbar"
import "@fontsource/roboto"
import "@fontsource/raleway"
import "../styles/styles.scss"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
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