import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Avatar from "../Avatar"
import * as S from "./styled"

function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  )

  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
      <nav>
        <Link to="/" activeStyle={{ borderBottom: "2px solid red" }}>
          Home
        </Link>
        <Link to="/about" activeStyle={{ borderBottom: "2px solid red" }}>
          About
        </Link>
      </nav>
    </S.ProfileWrapper>
  )
}

export default Profile
