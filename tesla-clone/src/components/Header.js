import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

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
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="#">Existing Invebtory</a></li>
        <li><a href="#">Used Invebtory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Existing Invebtory</a></li>
        <li><a href="#">Existing Invebtory</a></li>
        <li><a href="#">Existing Invebtory</a></li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: start;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  transform: ${props=> props.show ?'traslateX(0)': 'translateX(100%)'};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;

    }
  } 
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`

