import React from 'react'

import { useFrame } from '@react-three/fiber'

const YellowSphere = () => {
  const sphere = React.useRef(null)
  useFrame(({ clock }) => {
    sphere.current.rotation.x = clock.getElapsedTime()
  })
  return (
    <mesh ref={sphere}>
      <boxBufferGeometry />
      <meshStandardMaterial color='rgba(255, 204, 29, 0.05)' />
    </mesh>
  )
}

export default YellowSphere
