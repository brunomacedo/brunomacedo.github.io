import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostItem from "../components/PostItem"

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About Page</h1>
      <PostItem
        slug="/"
        background="purple"
        category="About"
        date="30 May, 2020"
        timeToRead="30 minutes"
        title="Lnihil veritatis perferendis tempora quas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore modi facilis. Ullam in, minima nemo blanditiis itaque inventore totam"
      />
    </Layout>
  )
}

export default AboutPage
