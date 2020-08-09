import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Header = props => {
    const rootPath = `${__PATH_PREFIX__}/`
    let response

    if (props.location.pathname === rootPath) {
        response = (
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
              
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {props.title}
            </Link>
          </h1>
        )
      } else {
        response = (
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {props.title}
            </Link>
          </h3>
        )
      }
      return response
}

export default Header