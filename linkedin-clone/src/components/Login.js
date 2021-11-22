import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Nav>
        <a href="/"><img src="/images/login-logo.svg" alt="Website Logo"></img></a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="Two People sitting chair"/>
        </Hero>
      </Section>
    </Container>
  )
}

export default Login;


const Container = styled.div`
  padding: 0;

`
const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px){
      padding: 0 5px;
    }
  }
`
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  margin-right: 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 300ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`
const Section  = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1128px;
  min-height: 700px;
  align-content: start;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  margin: auto;
  @media (max-width:768px){
    margin: auto;
    min-height: 0;
  }
`
const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px){
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;

    }
  }
  img {
    position: absolute;
    z-index: -1;
    width: 700px;
    height: 670px;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px){
      position: initial;
      top: 230px;
      width: initial;
      height: initial;
    }
  }
`

