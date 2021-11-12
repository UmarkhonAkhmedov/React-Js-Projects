import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    z-index: -1;
  }
`
