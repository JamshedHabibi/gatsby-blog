import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCmsContentQuery = () => {
  const cmsContent = useStaticQuery(graphql`
    query CmsContentQuery {
      landingPage: allFile(filter: { base: { eq: "landing.json" } }) {
        nodes {
          childDataJson {
            hero {
              image {
                alternateText
                imagePath
              }
              pageTitle
            }
          }
        }
      }
    }
  `)
  return cmsContent
}
