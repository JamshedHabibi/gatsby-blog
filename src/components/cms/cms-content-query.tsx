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

      instagramToken: allFile(
        filter: { base: { eq: "instagram-token.json" } }
      ) {
        nodes {
          childDataJson {
            token
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
