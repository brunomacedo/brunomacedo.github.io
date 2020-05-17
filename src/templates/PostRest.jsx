import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

function PostRest({ data }) {
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
  query PostRest($slugRest: Int!) {
    restApiPosts(endpointId: { eq: $slugRest }) {
      title
      body
      endpointId
    }
  }
`

export default PostRest
