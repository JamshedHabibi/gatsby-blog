import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const useCmsContentQuery = () => {
  const cmsContent = useStaticQuery(graphql`
    query CmsContentQuery {
      blogContentOrderedByDate: allSitePage(
        filter: { context: { blog: { eq: true } } }
        sort: { order: DESC, fields: context___date }
      ) {
        edges {
          node {
            context {
              date
              postType
              title
              thumbnail
              body
              slug
            }
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

      sidePanel: allFile(filter: { base: { eq: "side-panel.json" } }) {
        nodes {
          childDataJson {
            id
            aboutMeSummary {
              summary
              image {
                alternateText
                imagePath
              }
            }
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

      aboutPage: allFile(filter: { base: { eq: "about.json" } }) {
        nodes {
          childDataJson {
            image {
              alternateText
              imagePath
            }
            description
          }
        }
      }
    }
  `)
  return cmsContent
}
