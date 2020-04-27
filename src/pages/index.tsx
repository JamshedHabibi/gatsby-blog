import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/common/page-title"

const IndexPage: React.FC<any> = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle
      pageTitle="BAMBINA KATARINA"
      pageDescription="Welcome to my Blog"
    />
  </Layout>
)

export default IndexPage
