import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCmsContentQuery = () => {
  const cmsContent = useStaticQuery(graphql`
    query CmsContentQuery {
      header: allFile(filter: { base: { eq: "header.json" } }) {
        nodes {
          childDataJson {
            title
          }
        }
      }

      socialMedia: allFile(filter: { base: { eq: "social-media.json" } }) {
        nodes {
          childDataJson {
            socialMedia {
              link {
                name
                url
              }
            }
          }
        }
      }

      landingPage: allFile(filter: { base: { eq: "landing.json" } }) {
        nodes {
          childDataJson {
            hero {
              image {
                alternateText
                imagePath
              }
              pageTitle
              pageDescription
            }
          }
        }
      }
    }
  `)
  return cmsContent
}
