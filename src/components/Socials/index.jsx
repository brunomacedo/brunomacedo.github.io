import React from "react"
import Icons from "./Icons"
import * as S from "./styled"

export default function Socials({ socials }) {
  return (
    <S.SocialWrapList>
      {socials.map((social, index) => {
        const Icon = Icons[social.label]

        return (
          <S.SocialList key={index}>
            <S.SocialLink
              href={social.href}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </S.SocialLink>
          </S.SocialList>
        )
      })}
    </S.SocialWrapList>
  )
}
