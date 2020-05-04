import React from "react"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"
import Header from "./header"
import { useCmsContentQuery } from "../cms/cms-content-query"
import { InstagramFeed } from "../layout/instagram-feed"
import mq from "../../styling/media-queries"

const Layout = ({ children }: any) => {
  getFontAwesomeIcons()
  let cmsContent = useCmsContentQuery()
  console.log(cmsContent)
  return (
    <>
      <Navbar />
      <Header headerTitle={cmsContent.header.nodes[0].childDataJson.title} />
      <div
        css={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <div css={mq({ overflowX: "hidden" })}>
        <InstagramFeed instagramContent={cmsContent.instagramContent.nodes} />
      </div>
      <Footer copyrightName={cmsContent.header.nodes[0].childDataJson.title} />
    </>
  )
}

export default Layout
