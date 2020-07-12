import React from 'react';
import styled from 'styled-components';
import { SectionName } from '../../stylesheets/global';
import Workcard from './Workcard';
import WorkcardMob from './../mobile/Workcard';

import {Renteasy, Moviegallery} from '../../Workdata';

const Container = styled.div`
 position: relative;
  width: 100%;
  background-color: #DD15C9;
  padding-top: .1rem;
  padding-bottom: 8rem;
`
const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15rem;
  position: relative;
  margin: 0 auto;
  /* padding-bottom: 5rem; */
  @media (min-width:1200px){
    width: 80%;
  }
  @media (max-width:1200px){
    width: 90%;
  }
  @media (max-width: 768px){
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
  }
  @media (max-width: 715px){
    justify-content: center;
    padding-top: 12rem;
    
  }
  @media (max-width: 590px){
    /* justify-content: center; */
    padding-top: 2rem;
  }
`


function Index() {
  return (
    <Container>
      <SectionName>Works.</SectionName>
      <WorkWrapper id='works'>
        <Workcard data={Renteasy}/>
        <WorkcardMob data={Renteasy} />
        <Workcard data={Moviegallery} justmob={true}/>
        <WorkcardMob data={Moviegallery} />   
      </WorkWrapper>
    </Container>
  )
}

export default Index;
