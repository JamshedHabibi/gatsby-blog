import React from "react"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"
import Header from "./header"
import { useCmsContentQuery } from "../cms/cms-content-query"

const Layout = ({ children }: any) => {
  getFontAwesomeIcons()
  let cmsContent = useCmsContentQuery()
  console.log(cmsContent)
  return (
    <>
      <Navbar />
      <Header headerTitle={cmsContent.header.nodes[0].childDataJson.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer copyrightName={cmsContent.header.nodes[0].childDataJson.title} />
    </>
  )
}

export default Layout
