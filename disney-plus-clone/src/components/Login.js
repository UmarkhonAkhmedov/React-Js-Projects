import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg"/>
        <SignUp>
          GET ALL THERE
        </SignUp>
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);

  &::before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 70%;
  padding: 80px 40px;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
  padding: 17px 0;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }

`
