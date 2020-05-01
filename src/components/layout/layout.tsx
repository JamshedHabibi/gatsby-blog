import React from "react"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"
import Header from "./header"

const Layout = ({ children }: any) => {
  getFontAwesomeIcons()
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
