import React from 'react'
import styled from 'styled-components';
import {
  selectUserName,
  selectUserPhoto,
} from ".../features/user/userSlice"
import { useSelector } from "react-redux"

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      {
        !userName ? (<Login>Login</Login>) : 
        <>
          <NavMenu>
        <a>
          <img src="/images/home-icon.svg"/>
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg"/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg"/>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg"/>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg"/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg"/>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/umarkhon.jpg"/>
        </>
      }
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  background: #090b13;
  padding: 0 36px;
  overflow-x: hidden;

`

const Logo = styled.img`
  width: 80px;

`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        background-color: white;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
