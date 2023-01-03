import React from 'react'
import { Canvas } from '@react-three/fiber'

import YellowSphere from './components/three-d/ThreeD.component'
import Column from './components/column'

import * as S from './HeroSection.styled'

const HeroSection = () => {
  return (
    <S.Container>
      <S.Top>
        <S.LeftContainer>
          <S.Title>NOJYK</S.Title>
          <S.SubTitle>
            FOOD DELIVERY <span>WEB</span> / <span>WEB MOBILE</span> APP
          </S.SubTitle>
          <S.Content>
            <Column title={['role']} content={['frontend']} />
            <Column title={['status', 'from', 'to']} content={['in progress', 'dec 2021', 'now']} />
            <Column
              title={['technos']}
              content={['STRIPE / REACT-STRIPE', 'GOOGLE MAPS API', 'TYPESCRIPT', 'NEXTJS', 'REDUX']}
            />
          </S.Content>
        </S.LeftContainer>
        <S.RightContainer>
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <YellowSphere />
          </Canvas>
        </S.RightContainer>
      </S.Top>
      <S.Bottom>
        <span id='left'>1</span>
        <span id='center'>/</span>
        <span id='right'>3</span>
      </S.Bottom>
    </S.Container>
  )
}

export default HeroSection
