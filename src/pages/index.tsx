import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/common/page-title"
import { useCmsContentQuery } from "../components/cms/cms-content-query"

const IndexPage: React.FC<any> = () => {
  const heroContent = useCmsContentQuery().landingPage.nodes[0].childDataJson
    .hero
  return (
    <Layout>
      <SEO title="Home" />
      <PageTitle
        pageTitle={heroContent.pageTitle}
        pageDescription={heroContent.pageDescription}
        image={heroContent.image}
      />
      <IndexPageContent />
    </Layout>
  )
}

const IndexPageContent: React.FC<any> = () => {
  return (
    <div>
      <h1
        css={{
          display: "flex",
          justifyContent: "center",
          color: "black",
          position: "relative",
        }}
      >
        Latest Posts
      </h1>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
      <div>Hello World</div>
    </div>
  )
}
export default IndexPage
