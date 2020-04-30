import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/common/page-title"
import { cmsContentQuery } from "../components/cms/cms-content-query"

const IndexPage: React.FC<any> = () => (
  <StaticQuery
    query={cmsContentQuery}
    render={cmsContent => {
      const heroContent = cmsContent.landingPage.nodes[0].childDataJson.hero
      return (
        <Layout>
          <SEO title="Home" />
          <PageTitle pageTitle={heroContent.pageTitle} />
        </Layout>
      )
    }}
  />
)
export default IndexPage
