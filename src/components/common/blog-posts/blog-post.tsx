import React from "react"
import Layout from "../../layout/layout"
import { graphql } from "gatsby"
import { SidePanel } from "../../layout/side-panel/side-panel"
import { fonts } from "../../../styling/fonts"
import { Remarkable } from "remarkable"
import mq from "../../../styling/media-queries"

const md = new Remarkable()

export default function BlogPost({ data }: any) {
  const post = data.travelJson || data.bookishJson || data.lifestyleJson
  return (
    <Layout>
      <div
        css={[
          fonts.mainPageText,
          { display: "flex", justifyContent: "center" },
        ]}
      >
        <div
          css={mq({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: ["80%", "100%"],
          })}
        >
          <div css={{ width: "auto", textAlign: "center" }}>
            <img
              src={post.image}
              alt="thumbnail"
              css={mq({
                height: ["20rem", "27rem"],
                width: "100%",
                objectFit: "contain",
              })}
            />
          </div>
          <div css={{ width: "100%" }}>
            <h1>{post.title}</h1>
            <div>{post.date}</div>
            <div
              css={mq({
                img: {
                  width: "100%",
                  objectFit: "contain",
                  height: ["20rem", "33rem"],
                },
              })}
              dangerouslySetInnerHTML={{ __html: md.render(post.body) }}
            />
          </div>
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    travelJson(fields: { slug: { eq: $slug } }) {
      title
      image
      date(formatString: "DD MMM YYYY")
      body
    }
    bookishJson(fields: { slug: { eq: $slug } }) {
      title
      image
      date(formatString: "DD MMM YYYY")
      body
    }

    lifestyleJson(fields: { slug: { eq: $slug } }) {
      title
      image
      date(formatString: "DD MMM YYYY")
      body
    }
  }
`
