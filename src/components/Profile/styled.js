import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.aside`
  color: #8899a6;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.5rem;
`

export const ProfileLink = styled(Link)`
  color: #3390e0;
  text-decoration: none;
  transition: color 0.5s;
  padding: 0.5rem;

  &:hover,
  &:visited {
    color: #1fa1f2;
  }

  &.actived-page {
    border-bottom: 2px solid #3390e0;
  }
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
`
