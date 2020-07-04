import React from "react"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"
import Header from "./header"
import { useCmsContentQuery } from "../cms/cms-content-query"
import InstagramFeed from "./InstagramFeed"
import mq from "../../styling/media-queries"
import { flex, zIndex } from "../../styling/constants"

type LayoutProps = {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  getFontAwesomeIcons()
  let cmsContent = useCmsContentQuery()
  console.log(cmsContent)
  return (
    <>
      <Navbar />
      <Header headerTitle={cmsContent.header.nodes[0].childDataJson.title} />
      <div
        css={[
          flex.columnCentered,
          mq({
            width: "100%",
            paddingTop: ["30vh", "35vh"],
          }),
        ]}
      >
        <main css={[zIndex.pageContent, mq({ width: ["80%", "75%"] })]}>
          {children}
        </main>
      </div>
      <div css={mq({ overflowX: "hidden" })}>
        <InstagramFeed
          userId="2119123388"
          thumbnailWidth={240}
          photoCount={12}
        />
      </div>
      <Footer copyrightName={cmsContent.header.nodes[0].childDataJson.title} />
    </>
  )
}

export default Layout
