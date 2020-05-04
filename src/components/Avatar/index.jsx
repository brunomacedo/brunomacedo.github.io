import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../../images/favicon.png"
import * as S from "./styled"

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
    <>
      <img src={Icon} alt="Logo" style={{ display: "none" }} />
      <S.AvatartImg
        fluid={avatarImage.childImageSharp.fluid}
        style={{
          maxWidth: 220,
        }}
      />
    </>
  )
}

export default Avatar
