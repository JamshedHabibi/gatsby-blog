import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { fonts } from "../styling/fonts"
import { SidePanel } from "../components/layout/side-panel/side-panel"
import mq from "../styling/media-queries"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { Remarkable } from "remarkable"

const md = new Remarkable()

const AboutPage: React.FC<any> = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div css={{ display: "flex" }}>
        <div>
          <AboutPageContent />
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </Layout>
  )
}

const AboutPageContent: React.FC<any> = () => {
  let aboutPageContent = useCmsContentQuery().aboutPage.nodes[0].childDataJson
  console.log(aboutPageContent)
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={aboutPageContent.image.imagePath}
        alt={aboutPageContent.image.alternateText}
        css={{ width: "80%", paddingBottom: "3rem" }}
      />

      <div
        css={[
          fonts.mainPageText,
          {
            width: "80%",
            textAlign: "justify",
            img: {
              width: "100%",
              objectFit: "cover",
            },
          },
        ]}
        dangerouslySetInnerHTML={{
          __html: md.render(aboutPageContent.description),
        }}
      />
    </div>
  )
}
export default AboutPage
