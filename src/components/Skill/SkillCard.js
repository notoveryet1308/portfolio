import React from 'react';
import styled from 'styled-components';

const SkillCardWrapper = styled.div`
  width: 30%;
  height: ${props => props.height};
  padding: 2rem 4rem;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: .5rem;
  /* box-shadow: 1px 1px 10px rgba(0,0,0,.5); */
  @media (max-width:1200px){
    
    padding: 2rem;
  }
  @media (max-width: 600px){
    width: 100%;
    /* background:blue; */
    margin-bottom: 2rem;
    height: ${props => props.height2};
  }
`
const SkillTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2rem;
  @media (max-width:1200px){
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width:768px){
    font-size: 1.7rem;

    }
`
const Skill = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 1.3rem;
  text-transform: uppercase;
   
  .name{
    font-size: 2rem;
    color: #504F4F;
    margin-bottom: .3rem;
    font-weight: 500; 
    @media (max-width:1200px){
    font-size: 1.5rem;
    margin-bottom: 1rem;
    }
    @media (max-width:768px){
  
    margin-bottom: .5rem;
    }
    
    
  }
  .level{
    font-size: 1.4rem;
    color: #737373;
    font-weight: 400; 
  }
`
function SkillCard({ height, headTitle, data, height2 }) {
  return (
    <SkillCardWrapper
      height={height}
      height2={height2}
    >
      <SkillTitle>{headTitle}</SkillTitle>
      {data.map((d, i) => <Skill>
        <h3 className='name'>{d.name}</h3>
        <span className='level'>{d.level}</span>
      </Skill>)}
    </SkillCardWrapper>
  )
}

export default SkillCard
