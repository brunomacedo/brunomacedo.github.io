---
date: 2020-05-14 18:54:23
title: Lorem ipsum dolor post
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ab amet deleniti repudiandae incidunt vitae obcaecati eaque in tempora doloribus commodi molestias ad fugiat corrupti. Fugit sit reprehenderit earum magni?
category: JS
background: "#7aab13"
---

# Lorem ipsum dolor sit amet, consectetur

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, ab amet deleniti repudiandae incidunt vitae obcaecati eaque in tempora doloribus commodi molestias ad fugiat corrupti. Fugit sit reprehenderit earum magni?

```jsx
import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink to={`${slug}`}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead} min. to read
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  timeToRead: PropTypes.number,
}

PostItem.defaultProps = {
  background: "#3390e0",
  category: "Empty",
  date: `${new Date()}`,
  timeToRead: 0,
}

export default PostItem
```

## Commodi molestias ad fugiat

> Possimus, ab amet deleniti repudiandae incidunt vitae obcaecati eaque in tempora doloribus commodi molestias ad fugiat corrupti. Fugit sit reprehenderit earum magni?
