/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

/**
 * To add the slug field to each post
 */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      // value: `/${slug.slice(12)}`,
      value: `${slug}`,
    })
  }

  // Ensures we are processing only rest posts
  if (node.internal.type === "restApiPosts") {
    createNodeField({
      node,
      name: "slugRest",
      value: node.endpointId,
    })
  }
}

/**
 * Create post page
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allRestApiPosts(limit: 5) {
        edges {
          node {
            endpointId
            title
            body
          }
        }
      }
    }
  `).then(result => {
    const post = result.data.allMarkdownRemark.edges
    const postsRest = result.data.allRestApiPosts.edges

    post.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Post.jsx`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    postsRest.forEach(({ node }) => {
      createPage({
        path: `${node.endpointId}`,
        component: path.resolve(`./src/templates/PostRest.jsx`),
        context: {
          slugRest: node.endpointId,
        },
      })
    })
  })
}
