import React from "react"

const Footer = () => {
    let footer
    footer =  <footer>
            © {new Date().getFullYear()}, Construído con
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    return footer
}

export default Footer