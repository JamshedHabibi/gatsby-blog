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
      <div css={[fonts.mainPageText, { display: "flex" }]}>
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
            src={post.image}
            alt="thumbnail"
            css={{ width: "80%", height: "33rem", objectFit: "cover" }}
          />
          <div css={{ width: "80%" }}>
            <h1>{post.title}</h1>
            <div>{post.date}</div>
            <div
              css={{
                img: {
                  width: "100%",
                  objectFit: "cover",
                },
              }}
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
