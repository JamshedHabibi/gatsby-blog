import React from "react"
import { graphql } from "gatsby"

export const cmsContentQuery = graphql`
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
`
