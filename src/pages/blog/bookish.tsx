import React from "react"
import Layout from "../../components/layout/layout"
import { useCmsContentQuery } from "../../components/cms/cms-content-query"
import LargeBlogPostPreview from "../../components/common/blog-posts/large-blog-post-preview"
import { SidePanel } from "../../components/layout/side-panel/side-panel"

const bookishPage: React.FC<any> = ({}) => {
  return (
    <Layout>
      <div css={{ display: "flex" }}>
        <div css={{ width: "75%" }}>
          <BookishPageContent />
        </div>
        <div css={{ width: "25%" }}>
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
        .filter(blog => blog.node.context.postType === "bookish")
        .map(blog => (
          <div css={{ paddingBottom: "3rem" }}>
            <LargeBlogPostPreview blogPost={blog.node.context} />
          </div>
        ))}
    </div>
  )
}
export default bookishPage
