import React from "react"
import Layout from "../../components/layout/layout"
import { useCmsContentQuery } from "../../components/cms/cms-content-query"
import LargeBlogPostPreview from "../../components/common/blog-posts/large-blog-post-preview"
import { SidePanel } from "../../components/layout/side-panel/side-panel"
import mq from "../../styling/media-queries"
import { blogPostPropsContent } from "../../components/common/blog-posts/large-blog-post-preview"

const lifestylePage: React.FC<any> = ({}) => {
  return (
    <Layout>
      <div css={{ display: "flex" }}>
        <div>
          <LifestylePageContent />
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </Layout>
  )
}

const LifestylePageContent: React.FC<any> = () => {
  const blogPosts = useCmsContentQuery().blogContentOrderedByDate.nodes
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {blogPosts.length > 0 ? (
        blogPosts
          .filter(
            (blog: { context: blogPostPropsContent }) =>
              blog.context.postType === "lifestyle"
          )
          .map((blog: { context: blogPostPropsContent }) => (
            <div
              css={{
                paddingBottom: "3rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "90%",
              }}
            >
              <LargeBlogPostPreview blogPost={blog.context} />
            </div>
          ))
      ) : (
        <div>No blog posts</div>
      )}
    </div>
  )
}
export default lifestylePage
