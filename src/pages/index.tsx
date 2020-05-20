import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { PortraitCategoryCard } from "../components/portrait-category-card"
import mq from "../styling/media-queries"
import LargeBlogPostPreview from "../components/common/blog-posts/large-blog-post-preview"
import { SidePanel } from "../components/layout/side-panel/side-panel"
import SmallBlogPostPreview from "../components/common/blog-posts/small-blog-post-preview"

const IndexPage: React.FC<any> = () => {
  const homeCmsContent = useCmsContentQuery().homePage.nodes[0].childDataJson
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageContent homeContent={homeCmsContent} />
    </Layout>
  )
}

type CategoryCardProps = {
  categoryTitle: string
  image: { imagePath: string; alternativeText: string }
}

const IndexPageContent: React.FC<any> = ({ homeContent }) => {
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
          />
        ))}
      </div>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <div css={{ width: "75%" }}>
          <div css={{ paddingBottom: "5rem" }}>
            <LargeBlogPostPreview />
          </div>
          <div
            css={mq({
              display: "flex",
              flexDirection: ["column", "row"],
              paddingBottom: "2.5rem",
            })}
          >
            <SmallBlogPostPreview />
            <span
              css={mq({
                paddingLeft: ["0", "1.5rem"],
                paddingTop: ["2.5rem", "0"],
              })}
            >
              <SmallBlogPostPreview />
            </span>
          </div>
          <div
            css={mq({
              display: "flex",
              flexDirection: ["column", "row"],
              paddingBottom: "2.5rem",
            })}
          >
            <SmallBlogPostPreview />
            <span
              css={mq({
                paddingLeft: ["0", "1.5rem"],
                paddingTop: ["2.5rem", "0"],
              })}
            >
              <SmallBlogPostPreview />
            </span>
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
