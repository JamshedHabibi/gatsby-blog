const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === `TravelJson` ||
    node.internal.type === `BookishJson` ||
    node.internal.type === `LifestyleJson`
  ) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allBookishJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allLifestyleJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allTravelJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allBookishJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/common/blog-posts/blog-post.tsx`
      ),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  result.data.allTravelJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/common/blog-posts/blog-post.tsx`
      ),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  result.data.allLifestyleJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/common/blog-posts/blog-post.tsx`
      ),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
