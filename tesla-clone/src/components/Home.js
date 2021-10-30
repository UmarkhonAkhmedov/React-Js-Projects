import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section 
        title="Model S" 
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-s.jpeg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y" 
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-y.jpeg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y" 
        description="Order Online for Touchless Delivery" 
        backgroundImg="model-y.jpeg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

    </Container>
  )
}

export default Home


const Container = styled.div`
  height: 100vh;
`
