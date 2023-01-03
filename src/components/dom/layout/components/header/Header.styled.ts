import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
`

export const Nav = styled.div`
  width: 245px;
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.grey};
  /* box-shadow: 0 8px 32px 0 ${({ theme }) => theme.colors.grey}; */
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`

export const Anchor = styled.a<{ isClicked: boolean }>`
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme, isClicked }) => (isClicked ? theme.colors.white : theme.colors.lightGrey)};
  cursor: pointer;
  transition: all 0.3 ease-in-out;
`

export const Logo = styled.h3`
  font-size: 30px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 2px;
`

export const Language = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  span {
    margin: 0 10px;
  }
`

export const LanguageItem = styled.span<{ focus: boolean }>`
  color: ${({ theme, focus }) => (focus ? theme.colors.yellow : theme.colors.lightGrey)};
  margin: 0 !important;
`
