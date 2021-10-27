import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
      </ButtonGroup>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('images/model-s.jpg');
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: text;

`


const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

`

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white; 
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`

`