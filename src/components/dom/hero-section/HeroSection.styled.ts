import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* display: flex; */
  /* background: red; */
`

export const Top = styled.div`
  display: flex;
`

export const LeftContainer = styled.div`
  width: 50%;
  padding-top: 180px;
  color: ${({ theme }) => theme.colors.lightGrey};
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.yellow};
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  letter-spacing: 19px;
`

export const SubTitle = styled.div`
  width: 400px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 2px;

  margin-bottom: 70px;

  span {
    color: ${({ theme }) => theme.colors.white};
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
`

export const RightContainer = styled.div`
  width: 50%;
  height: calc(100vh - 192px);
  background: ${({ theme }) => theme.colors.lightYellow};
`

export const Bottom = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 20px;
  height: 40px;
  /* border: 1px solid red; */

  span {
    margin-right: 10px;
    font-size: 20px;

    &#left {
      font-size: 30px;
      margin-bottom: -3px;
    }

    &#center {
      color: ${({ theme }) => theme.colors.yellow};
    }
    &#right {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`
