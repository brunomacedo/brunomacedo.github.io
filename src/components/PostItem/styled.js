import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  &:hover {
    color: #3390e0;
  }

  & + & {
    border-top: 1px solid #38444d;
  }
`

export const PostItemWrapper = styled.section`
  display: flex;
  align-items: center;
`

export const PostItemTag = styled.div`
  background-color: ${props => props.background};
  text-transform: uppercase;
  color: #fff;
  min-width: 5rem;
  min-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 0.8rem;
`

export const PostItemInfo = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  opacity: 0.5;
`

export const PostItemTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const PostItemDescription = styled.p``
