import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { PortraitCategoryCard } from "../components/common/portrait-category-card"
import mq from "../styling/media-queries"
import BlogPost from "../components/common/blog-posts"
import { SidePanel } from "../components/layout/side-panel/side-panel"

const IndexPage: React.FC<any> = () => {
  const homeCmsContent = useCmsContentQuery().homePage.nodes[0].childDataJson
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageContent homeContent={homeCmsContent} />
    </Layout>
  )
}

const IndexPageContent: React.FC<any> = ({ homeContent }) => {
  return (
    <div>
      <div
        css={mq({
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "3rem",
        })}
      >
        {homeContent.categoryCard.map(
          (card: {
            categoryTitle: string
            image: { imagePath: string; alternativeText: string }
          }) => (
            <PortraitCategoryCard
              categoryTitle={card.categoryTitle}
              image={card.image}
            />
          )
        )}
      </div>

      <div css={{ display: "flex", justifyContent: "center" }}>
        <div css={{ width: "75%" }}>
          <BlogPost />
        </div>
        <div css={mq({ width: "25%", display: ["none", "initial"] })}>
          <SidePanel />
        </div>
      </div>
    </div>
  )
}
export default IndexPage
