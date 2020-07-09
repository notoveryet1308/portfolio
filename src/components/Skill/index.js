import React from 'react'
import styled from 'styled-components';

import { SectionName } from '../../stylesheets/global';
import SkillCard from './SkillCard';
import { Fundamental, Framework, Backend } from '../../skilldata';

const Container = styled.div`
  width: 100%;
  position: relative;
  background: #ED284C;
  padding-top: .1rem;
`
const SkillWrapper = styled.div`
  margin: 0 auto;
  @media (min-width:1200px){
    width: 80%;
    height: 80vh;
  }
  @media (max-width:1200px){
    width: 90%;
  }
  @media (min-width:769px){
    height: 75vh;
  }
  
`
const SkillDisplayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* background:#eee; */
  margin-top: 13rem;
  @media (max-width: 600px){
    margin-top: 1rem;
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    /* background:blue; */
  }
`
function index() {
  return (
    <Container>
      <SkillWrapper id='skills'>
        <SectionName>Skills.</SectionName>
        <SkillDisplayBox>
          <SkillCard
            height='70vh'
            height2='60vh'
            headTitle="FUNDAMENTAL Technologies"
            data={Fundamental}

          />
          <SkillCard
            height='60vh'
            height2='45vh'
            headTitle="FRAMEWORK & RELATED"
            data={Framework}

          />
          <SkillCard
            height='70vh'
            height2='60vh'
            headTitle="BACKEND & RELATED"
            data={Backend}

          />
        </SkillDisplayBox>
      </SkillWrapper>
    </Container>
  )
}

export default index
