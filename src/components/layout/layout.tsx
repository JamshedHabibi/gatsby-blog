/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"

const Layout = ({ children }: any) => {
  const data = graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `

  getFontAwesomeIcons()
  return (
    <div>
      <Navbar />
      <div css={{ position: "relative", top: "5vh" }}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
