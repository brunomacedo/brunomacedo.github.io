import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #3390e0;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
`

export const PostItemTag = styled.div`
  background-color: ${props => props.background};
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  padding: 0.5rem;
`

export const PostItemInfo = styled.div``

export const PostItemDate = styled.time``

export const PostItemTitle = styled.h1``

export const PostItemDescription = styled.p``
