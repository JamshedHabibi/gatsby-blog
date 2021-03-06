import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { PortraitCategoryCard } from "../components/portrait-category-card"
import mq from "../styling/media-queries"
import LargeBlogPostPreview, {
  blogPostPropsContent,
} from "../components/common/blog-posts/large-blog-post-preview"
import { SidePanel } from "../components/layout/side-panel/side-panel"
import SmallBlogPostPreview from "../components/common/blog-posts/small-blog-post-preview"

const IndexPage: React.FC<any> = () => {
  const homeCmsContent = useCmsContentQuery().homePage.nodes[0].childDataJson
  const blogCmsContent = useCmsContentQuery().blogContentOrderedByDate.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageContent
        homeContent={homeCmsContent}
        blogContent={blogCmsContent}
      />
    </Layout>
  )
}

type CategoryCardProps = {
  categoryTitle: string
  image: { imagePath: string; alternativeText: string }
}

const IndexPageContent: React.FC<any> = ({ homeContent, blogContent }) => {
  console.log(blogContent)
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: "3rem",
          width: "100%",
        })}
      >
        {homeContent.categoryCard.map((card: CategoryCardProps) => (
          <PortraitCategoryCard
            categoryTitle={card.categoryTitle}
            image={card.image}
            key={card.categoryTitle}
          />
        ))}
      </div>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <div css={{ width: "75%" }}>
          {blogContent[0] ? (
            <div css={{ paddingBottom: "5rem" }}>
              <LargeBlogPostPreview blogPost={blogContent[0].context} />
            </div>
          ) : null}
          <div css={mq({ display: "flex", flexDirection: ["column", "row"] })}>
            {blogContent
              .slice(1, 3)
              .map((post: { context: blogPostPropsContent }) => (
                <SmallBlogPostPreview
                  blogPost={post.context}
                  key={post.context.body}
                />
              ))}
          </div>
          <div css={mq({ display: "flex", flexDirection: ["column", "row"] })}>
            {blogContent
              .slice(3, 5)
              .map((post: { context: blogPostPropsContent }) => (
                <SmallBlogPostPreview
                  blogPost={post.context}
                  key={post.context.body}
                />
              ))}
          </div>
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </div>
  )
}
export default IndexPage
