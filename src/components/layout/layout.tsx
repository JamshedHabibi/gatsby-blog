import React from "react"
import Navbar from "./navbar/navbar"
import "./layout.css"
import getFontAwesomeIcons from "../../styling/font-awesome"
import { Footer } from "./footer"
import Header from "./header"
import { useCmsContentQuery } from "../cms/cms-content-query"
import { InstagramFeed } from "../layout/instagram-feed"
import mq from "../../styling/media-queries"
import { flex } from "../../styling/constants"

type LayoutProps = {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  getFontAwesomeIcons()
  let cmsContent = useCmsContentQuery()
  console.log(cmsContent.socialMedia.nodes[0].childDataJson.socialMedia)
  return (
    <>
      <Navbar />
      <Header headerTitle={cmsContent.header.nodes[0].childDataJson.title} />
      <div
        css={[
          flex.columnCentered,
          {
            width: "100%",
            paddingTop: "30vh",
          },
        ]}
      >
        <main css={mq({ width: ["80%", "70%"] })}>{children}</main>
      </div>
      <div css={mq({ overflowX: "hidden" })}>
        <InstagramFeed
          instagramLink={cmsContent.socialMedia.nodes[0].childDataJson.socialMedia.find(
            (media: { link: { name: string; url: string } }) =>
              media.link.name.toLowerCase() === "instagram"
          )}
          instagramContent={cmsContent.instagramContent.nodes}
        />
      </div>
      <Footer copyrightName={cmsContent.header.nodes[0].childDataJson.title} />
    </>
  )
}

export default Layout
