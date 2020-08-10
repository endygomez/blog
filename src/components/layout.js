import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Footer from "../components/footer"
import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`  
  return (    
    <div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <Header location={location} title={title}/>
      <main>{children}</main>
      <Footer />
      </div>
    </div>
  )
}

export default Layout
