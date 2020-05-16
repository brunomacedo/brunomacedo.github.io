import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Homepage</h1>
      <PostItem
        slug="/about/"
        background="green"
        category="Home"
        date="30 May, 2020"
        timeToRead="30 minutes"
        title="Lnihil veritatis perferendis tempora quas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore modi facilis. Ullam in, minima nemo blanditiis itaque inventore totam"
      />
    </Layout>
  )
}

export default IndexPage
