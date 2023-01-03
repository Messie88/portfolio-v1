import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

import { Container } from './Layout.styled'
import Header from './components/header'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <Container ref={mergeRefs([ref, localRef])}>
      <Header />
      <div>{children}</div>
    </Container>
  )
})
Layout.displayName = 'Layout'

export default Layout
