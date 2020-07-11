import React from 'react';
import styled from 'styled-components';


const WorkBox = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  justify-content: flex-start;
  /* align-items: baseline; */
  margin-bottom: 5rem;
  @media screen and (max-width: 767px){
    display: none;
  }
`
const WorkImgBox = styled.div`
  width: ${props => props.width}%;
  height: 35rem;

  @media screen and (max-width: 1125px){
    height: 30rem;
  }
  @media screen and (max-width: 950px){
    width: ${props => props.width - 5}%;
    height: 28rem;
  }
`
const WorkIngBoxSmall = styled.div`
  width: ${props => props.width}%;
  height: 35rem;

  @media screen and (max-width: 1125px){
    height: 30rem;
  }
  @media screen and (max-width: 950px){
    width: ${props => props.width}%;
    height: 28rem;
  }
  @media screen and (max-width: 810px){
    width: ${props => props.width + 5}%;
    height: 28rem;
  }
`

const WorkImg = styled.img`
position: relative;
 width:100%;
 height: 100%;
 border-radius: 1rem;

`
const WorkInfo = styled.div`
 position: relative;
 display: flex;
 justify-content: flex-start;
 flex-direction: column;
 width: 40%;
 height: 27rem;
 background-color: #fff;
 margin-top: 8rem;
 margin-left: 2rem;
 border-radius: 1rem;
 @media screen and (max-width: 1125px){
   margin-top: 3rem;
 }
 @media screen and (max-width:1000px){
    width: 45%;
    height: 28rem;
    margin-top: 0rem;
  }
 @media screen and (max-width: 768px){
   width:45%;
 }
 
`
const Topbox = styled.div`
  width: 100%;
  /* height: 4rem; */
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
    font-size: 1.6rem;
    font-weight: 500;
    background: #F6FA2F;
    padding: .5rem;
    border-radius: .3rem;
    text-transform: uppercase;
  }
  @media screen and (max-width: 850px){
    .name{
    font-size: 1.9rem;
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
  @media screen and (max-width: 850px){
    font-size: 1.4rem;
  }
`
const Sumarry = styled.p`
  color: #737373;
  font-size: 1.6rem;
  padding:0 2rem;
  @media screen and (max-width: 850px){
    font-size: 1.5rem;
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
`
const Tech = styled.p`
  display: inline;
  color: #737373;
  font-size: 1.6rem;
  padding: 1.5rem 2rem;
  padding-bottom: 0;
  @media screen and (max-width: 850px){
    font-size: 1.5rem;
  }
`
const ButtonBox = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 850px){
    height: 4rem;
  }
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
  @media screen and (max-width: 850px){
    font-size: 1.6rem;
    width: 8rem;
  }
`

function Workcard({ data, justmob }) {
  console.log(data)
  return (
    <WorkBox>

      {(justmob !== undefined && justmob === true) ?
        <WorkIngBoxSmall width={38}>
          <WorkImg src={data.mobimg} alt={data.name} />
        </WorkIngBoxSmall> :
        <WorkImgBox width={60}>
          <WorkImg src={data.webimg} alt={data.name} />
        </WorkImgBox>
      }

      <WorkInfo>
        <Topbox>
          <h2 className="name">{data.name}</h2>
          <p className="responsive">{data.responsive}</p>
        </Topbox>
        <Subtitle>{data.subtitle}</Subtitle>
        <Sumarry>{data.summary}</Sumarry>

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
    </WorkBox>
  )
}

export default Workcard;
