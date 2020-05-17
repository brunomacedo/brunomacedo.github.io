import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

function Post({ data }) {
  const { restApiPosts } = data
  const { title, body } = restApiPosts
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: Int!) {
    restApiPosts(endpointId: { eq: $slug }) {
      title
      body
      endpointId
    }
  }
`

export default Post
