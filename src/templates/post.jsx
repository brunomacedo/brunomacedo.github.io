import React from "react"
import { graphql } from "gatsby"

function Post({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default Post
