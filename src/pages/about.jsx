import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function AboutPage() {
  const { allRestApiPosts } = useStaticQuery(
    graphql`
      query {
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
    `
  )

  const postList = allRestApiPosts.edges

  return (
    <Layout>
      <SEO title="About" />
      <h1>About Page</h1>
      {postList.map(({ node: { title, endpointId, body } }) => (
        <PostItem
          key={`${endpointId}`}
          slug={`/${endpointId}/`}
          title={title}
          description={body}
        />
      ))}
    </Layout>
  )
}

export default AboutPage
