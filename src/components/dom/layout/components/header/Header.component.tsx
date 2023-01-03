import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './Header.styled'

const Header = () => {
  const [isClicked, setIsClicked] = useState({
    work: true,
    about: false,
    contact: false,
  })

  return (
    <S.Container>
      <Link href='/' legacyBehavior>
        <S.Logo>
          <span>M</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
          <span>I</span>
          <span>E</span>
        </S.Logo>
      </Link>
      <S.Nav>
        <Link href='/works' legacyBehavior>
          <S.Anchor
            onClick={() =>
              setIsClicked({
                work: true,
                about: false,
                contact: false,
              })
            }
            isClicked={isClicked.work}>
            Works
          </S.Anchor>
        </Link>
        <Link href='/about' legacyBehavior>
          <S.Anchor
            onClick={() =>
              setIsClicked({
                work: false,
                about: true,
                contact: false,
              })
            }
            isClicked={isClicked.about}>
            About
          </S.Anchor>
        </Link>
        <Link href='/contact' legacyBehavior>
          <S.Anchor
            onClick={() =>
              setIsClicked({
                work: false,
                about: false,
                contact: true,
              })
            }
            isClicked={isClicked.contact}>
            Contact
          </S.Anchor>
        </Link>
      </S.Nav>
      <S.Language>
        <S.LanguageItem focus={true}>EN </S.LanguageItem>
        <span>/</span>
        <S.LanguageItem focus={false}> FR</S.LanguageItem>
      </S.Language>
    </S.Container>
  )
}

export default Header
