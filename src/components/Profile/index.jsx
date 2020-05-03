import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Avatar from "../Avatar"

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
      <Avatar />
      <h1>{site.siteMetadata.title}</h1>
      <h2>{site.siteMetadata.position}</h2>
      <p>{site.siteMetadata.description}</p>
      <nav>
        <Link to="/" activeStyle={{ borderBottom: '2px solid red' }} >Home</Link>
        <Link to="/about" activeStyle={{ borderBottom: '2px solid red' }} >About</Link>
      </nav>
    </aside>
  )
}

export default Profile
