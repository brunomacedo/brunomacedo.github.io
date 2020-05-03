import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

function Avatar() {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fluid(maxWidth: 220, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <Img
      fluid={avatarImage.childImageSharp.fluid}
      style={{
        maxWidth: 220
      }}
    />
  )
}

export default Avatar
