/*exports.createPages = ({ actions: { createPage } }) => {
  const travelBlogPosts = require(`./data/blog/travel`)
  travelBlogPosts.forEach(post => {
    createPage({
      path: `travel/${post.date}`,
      component: require.resolve("./src/components/common/blog-post.tsx"),
      context: {
        title: post.title,
        description: post.body,
      },
    })
  })
}
*/
