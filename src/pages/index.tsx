import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { zIndex } from "../styling/constants"
import { PortraitCategoryCard } from "../components/common/portrait-category-card"
import mq from "../styling/media-queries"

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
    <div
      css={mq([
        zIndex.pageContent,
        {
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          alignItems: "center",
        },
      ])}
    >
      {homeContent.categoryCard.map(card => (
        <PortraitCategoryCard
          categoryTitle={card.categoryTitle}
          image={card.image}
        />
      ))}
    </div>
  )
}
export default IndexPage
