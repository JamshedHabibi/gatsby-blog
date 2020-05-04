import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageTitle } from "../components/common/page-title"
import { useCmsContentQuery } from "../components/cms/cms-content-query"
import { zIndex } from "../styling/constants"

const IndexPage: React.FC<any> = () => {
  const cmsContent = useCmsContentQuery()
  console.log(cmsContent)
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageContent cmsContent={cmsContent} />
    </Layout>
  )
}

const IndexPageContent: React.FC<any> = ({ cmsContent }) => {
  return (
    <div css={[zIndex.pageContent]}>
      <div>
        {cmsContent.instagramContent.nodes.map((post: any) => {
          return <img src={post.original} key={post.id} />
        })}
      </div>
    </div>
  )
}
export default IndexPage
