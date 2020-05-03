import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/common/page-title"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { zIndex } from "../styling/constants"

const IndexPage: React.FC<any> = () => {
  const heroContent = useCmsContentQuery()
  console.log(heroContent)
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageContent />
    </Layout>
  )
}

const IndexPageContent: React.FC<any> = () => {
  return <div css={[zIndex.pageContent]}></div>
}
export default IndexPage
