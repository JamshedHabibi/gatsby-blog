import React from "react"
import Layout from "../../components/layout/layout"
import { useCmsContentQuery } from "../../components/cms/cms-content-query"
import LargeBlogPostPreview from "../../components/common/blog-posts/large-blog-post-preview"
import { SidePanel } from "../../components/layout/side-panel/side-panel"
import mq from "../../styling/media-queries"
import { blogPostPropsContent } from "../../components/common/blog-posts/large-blog-post-preview"

const bookishPage: React.FC<any> = ({}) => {
  return (
    <Layout>
      <div css={{ display: "flex" }}>
        <div css={{ width: "75%" }}>
          <BookishPageContent />
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </Layout>
  )
}

const BookishPageContent: React.FC<any> = () => {
  const blogPosts = useCmsContentQuery().blogContentOrderedByDate.edges
  return (
    <div>
      {blogPosts
        .filter(
          (blog: { node: { context: blogPostPropsContent } }) =>
            blog.node.context.postType === "bookish"
        )
        .map((blog: { node: { context: blogPostPropsContent } }) => (
          <div
            css={{
              paddingBottom: "3rem",
              display: "flex",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <LargeBlogPostPreview blogPost={blog.node.context} />
          </div>
        ))}
    </div>
  )
}
export default bookishPage
