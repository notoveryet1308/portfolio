import React from 'react';
import styled from 'styled-components';

const WorkcardWrapper = styled.div`
  
  display: none;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;
 border-radius: 1rem;
  @media screen and (max-width:768px){
    display: flex;
    width: 49%;
  }
  @media (max-width: 715px){
    width: 80%;
  }
  @media screen and (max-width:450px){
    display: flex;
    width: 100%;
  }
`
const WorkImg = styled.img`
position: relative;
 width:100%;
 height: 27rem;
 border-radius: 1rem 1rem 0 0;
`
const WorkInfo = styled.div`
 position: relative;
 display: flex;
 justify-content: flex-start;
 flex-direction: column;
 width: 100%;
 background-color: #fff;
 border-radius: 0 0 1rem 1rem;
 padding-bottom: 2rem;
`
const Topbox = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 0;
  align-items: center;

  .name{
    font-size: 2.2rem;
    font-weight: 500;
  }
  .responsive{
    font-size: 1.5rem;
    font-weight: 500;
    background: #F6FA2F;
    padding: .4rem;
    border-radius: .2rem;
    text-transform: uppercase;
  }

  @media screen and (max-width:360px){
    .name{
      font-size: 2rem;
    }
    .responsive{
    font-size: 1.4rem;
  }
  }
  
`
const Subtitle = styled.p`
 
  display: inline;
  font-size: 1.5rem;
  color: #737373;
  text-transform: uppercase;
  padding: 2rem;
  padding-top: 0;
  font-weight: 300;
 
`
const Sumarry = styled.div`
  height: 10rem;
  padding:0 2rem;
  p{
    color: #737373;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 360px){
    font-size: 1.5rem;
    height: 12rem;
  }
`
const Span = styled.span`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  background: #EF1872;
  padding: .4rem;
  border-radius: 2px;
  margin-right: .5rem;
  @media screen and (max-width: 360px){
    font-size: 1.3rem;
  }
`
const Tech = styled.p`
  display: inline;
  color: #737373;
  font-size: 1.6rem;
  padding: 1.5rem 2rem;
  padding-bottom: 0;
`
const ButtonBox = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 3rem;
  background: #00B4A9;
  color: #fff;
  margin-right: 2rem;
  font-size: 1.8rem;
  border-radius: 3px;
  @media screen and (max-width: 360px){
    width: 10rem;
    font-size: 1.6rem;
    margin-right: 1rem;
  }
`

function index({ data }) {
  return (
    <WorkcardWrapper>
      <WorkImg src={data.mobimg} alt={data.name} />
      <WorkInfo>
        <Topbox>
          <h2 className="name">{data.name}</h2>
          <p className="responsive">{data.responsive}</p>
        </Topbox>
        <Subtitle>{data.subtitle}</Subtitle>
        <Sumarry>
          <p>
            {data.summary}
          </p>
        </Sumarry>
        <Tech>Made using:&nbsp;&nbsp;
          {
            data.tech.map((d, i) => <Span>{d}</Span>)
          }
        </Tech>
        <ButtonBox>
          <Btn href={data.code} target="_blank">Code</Btn>
          <Btn href={data.live} target="_blank">Live</Btn>
        </ButtonBox>
      </WorkInfo>
    </WorkcardWrapper>
  )
}

export default index
