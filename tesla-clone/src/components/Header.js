import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Container>
      <a><img src="/images/logo.svg" alt="Website Logo"/></a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu/>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between ;
  min-height: 60px;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    flex-wrap: nowrap;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media(max-width: 768px){
    display: none;

  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 10px;
    font-weight: 600;
    text-transform: uppercase;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`

