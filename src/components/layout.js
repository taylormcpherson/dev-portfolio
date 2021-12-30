import React from "react"
import NavBar from "./navbar"
import "../styles/styles.scss"

export default function Layout({ children }) {
  return (
    <main style={{ margin: `0 auto`, maxWidth: 2200 }}>
        <NavBar></NavBar>
        {children}
    </main>
  )
}