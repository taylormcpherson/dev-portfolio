import React from "react"
import NavBar from "./navbar"
import "../styles/styles.scss"

export default function Layout({ children }) {
  return (
    <main style={{ margin: `0 auto`, maxWidth: `100vw`, padding: `10px 0` }}>
        <NavBar></NavBar>
        {children}
    </main>
  )
}