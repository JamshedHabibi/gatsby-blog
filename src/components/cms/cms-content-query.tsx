import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCmsContentQuery = () => {
  const cmsContent = useStaticQuery(graphql`
    query CmsContentQuery {
      instagramContent: allInstaNode {
        nodes {
          caption
          id
          original
          likes
          comments
          thumbnails {
            config_height
            config_width
            src
          }
        }
      }

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

      homePage: allFile(filter: { base: { eq: "home.json" } }) {
        nodes {
          childDataJson {
            categoryCard {
              categoryTitle
              image {
                alternateText
                imagePath
              }
            }
          }
        }
      }
    }
  `)
  return cmsContent
}
