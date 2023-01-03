import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 30px 40px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`
