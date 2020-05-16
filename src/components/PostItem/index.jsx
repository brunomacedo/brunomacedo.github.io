import React from "react"
import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/page/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#3390e0">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>May, 16 of 2020</S.PostItemDate>
        <S.PostItemTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </S.PostItemTitle>
        <S.PostItemDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          quidem optio maiores odio ab mollitia?
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

export default PostItem
