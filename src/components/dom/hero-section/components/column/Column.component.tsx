import React from 'react'

import * as S from './Column.styled'

interface Props {
  title: string[]
  content: string[]
}

const Column = ({ title, content }: Props) => {
  return (
    <S.Container>
      <S.Title>
        {title.map((el: string) => (
          <p>{el}</p>
        ))}
      </S.Title>
      <S.Content>
        {content.map((el: string) => (
          <p>{el}</p>
        ))}
      </S.Content>
    </S.Container>
  )
}

export default Column
