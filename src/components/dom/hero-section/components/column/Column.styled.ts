import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  text-transform: uppercase;

  p {
    margin: 0;
    margin-bottom: 7px;
    font-size: 13px;
  }
`

export const Title = styled.div`
  width: 120px;
  color: ${({ theme }) => theme.colors.lightGrey};
`

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.white};
`
