import React from "react"

const Footer = () => {
    let footer
    footer =  
        <div>
            <footer>
                <div>
                © {new Date().getFullYear()}, Construído con
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
                <div>
                    Prueba
                </div>
            </footer>
        </div>
    return footer
}

export default Footer