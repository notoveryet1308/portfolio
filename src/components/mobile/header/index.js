import React from 'react';
import styled from 'styled-components';
import { Container,Logo } from '../../../stylesheets/global';
import { ReactComponent as Bar } from '../../../img/bar.svg';

const MobHeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 5rem;
  display: none;
  justify-content: space-between;
  align-items: center;
  .bar{
    cursor: pointer;
    
  }
  @media (max-width: 600px){
    display: flex;
  }
`


function index() {
  return (
    <Container bgColor='#000'>
      <MobHeaderWrapper>
        <Logo>rahul.dev</Logo>
        <Bar className='bar' />
      </MobHeaderWrapper>
    </Container>
  )
}

export default index;
