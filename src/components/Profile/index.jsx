import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Avatar from "../Avatar"
import Socials from "../Socials"
import * as S from "./styled"

function Profile() {
  const {
    site: {
      siteMetadata: { title, position, description, socials },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
            socials {
              label
              href
            }
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
      <Socials socials={socials} />
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
