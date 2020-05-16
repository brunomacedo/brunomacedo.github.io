import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <PostItem />
    </Layout>
  )
}

export default IndexPage
