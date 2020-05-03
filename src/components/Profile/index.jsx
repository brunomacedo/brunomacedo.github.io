import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Profile() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
            author
          }
        }
      }
    `
  )

  return (
    <aside className="profile-wrapper">
      <h1>{site.siteMetadata.title}</h1>
      <h2>{site.siteMetadata.position}</h2>
      <p>
        {site.siteMetadata.description}
      </p>
    </aside>
  )
}

export default Profile
