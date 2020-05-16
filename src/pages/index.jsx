import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                background
                category
                date(locale: "en-us", formatString: "MMMM DD, YYYY")
                description
                title
              }
              timeToRead
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

      {postList.map(({ node: { id, timeToRead, frontmatter } }) => (
        <PostItem key={id} {...frontmatter} timeToRead={timeToRead} />
      ))}
    </Layout>
  )
}

export default IndexPage
