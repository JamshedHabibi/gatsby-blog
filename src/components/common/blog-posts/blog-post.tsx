import React from "react"
import Layout from "../../layout/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }: any) {
  const post = data.travelJson || data.bookishJson || data.lifestyleJson
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    travelJson(fields: { slug: { eq: $slug } }) {
      title
    }
    bookishJson(fields: { slug: { eq: $slug } }) {
      title
    }

    lifestyleJson(fields: { slug: { eq: $slug } }) {
      title
    }
  }
`
