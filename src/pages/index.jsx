import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              timeToRead
              fields {
                slug
              }
              frontmatter {
                background
                category
                date(locale: "en-us", formatString: "MMMM DD, YYYY")
                description
                title
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Homepage</h1>

      {postList.map(({ node: { id, fields, timeToRead, frontmatter } }) => (
        <PostItem
          key={fields.slug}
          timeToRead={timeToRead}
          {...frontmatter}
          {...fields}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
