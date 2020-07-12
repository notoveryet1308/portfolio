import React from 'react';
import styled from 'styled-components';
import { } from '../../stylesheets/global';

const Container = styled.div`
  width: 100%;
  position: relative;
  background: #30E6F1;
  .moveup{
    
  }
`
const SectionName = styled.h1`
  font-size: 15rem;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(51, 48, 48, 0.24);
  position: absolute;
  top: -2.9rem;
  right: 0;
  @media (max-width:1200px){
    font-size: 12rem;
    top: -2rem;
  }
  @media (max-width:768px){
    font-size: 10rem;
    margin-top: 0rem;
  }
  @media (max-width:600px){
    font-size: 8rem;
    z-index: 23;
    color:rgba(255, 254, 254, 0.41);
    text-align: center;
    /* margin-top: rem; */
    top: -4.5rem;
    left: 45%;
    transform: translateX(-50%);
  }
  @media (max-width:400px){
    font-size: 6rem;
    z-index: 23;
    top: -3.4rem;
    left: 45%;
    transform: translateX(-50%);
  }
`
const AboutWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding-top: 13rem;
  margin-bottom: 0rem;
  padding-bottom: 4rem;
  @media screen and (max-width: 1200px){
    width: 90%;
  }
  @media screen and (max-width: 600px){
    padding-top: 8rem;
  }
`
const Content = styled.div`
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background: #fff;
  border-radius: .5rem;
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  padding: 7rem 10rem;
  @media (max-width: 900px){
    padding: 4rem 7rem;
  }
  @media (max-width: 768px){
    padding: 3rem 5rem;
  }
  @media (max-width: 650px){
    padding: 2rem 4rem;
  }
  @media (max-width: 600px){
    padding: 2rem;
  }
`
const Textbox = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .para{
    font-size: 1.8rem;
    color: #383535;
    font-weight: 400;
  }
  .span{
    background: #5F5B5B;
    color: #fff;
    padding: .1rem .4rem;
    border-radius: .2rem;
    word-break: keep-all;
  }

  @media (max-width:650px){
    font-size: 1.6rem;
  }
  @media (max-width:550px){
    font-size: 1.5rem;
  }
`
const Personal = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  .heading{
    margin-top: 2.5rem;
    font-size: 2rem;
    color:#6D0C6F;
    font-weight: 400;
   
  }
  .artistbox{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 600px){
    .heading{
      font-size: 1.7rem;
       margin-bottom: 1rem;
    }
  }
`
const Artistname = styled.div`
  display: inline;
  padding: .4rem .8rem;
  text-align: center;
  background: #8631F2;
  color: white;
  font-size: 1.6rem;
  margin: .6rem 1rem;
  border-radius: .3rem;
  @media (max-width:600px){
    font-size: 1.5rem;
    margin: .3rem .5rem;
  }
`


function index() {
  return (
    <Container id="aboutme">
      <SectionName className="moveup">About.</SectionName>
      <AboutWrapper>
        <Content>
          <Textbox>
            <p className='para'>Hello, <br></br>
            My name is Rahul Raj. I’m a <span className="span">self taught web developer</span> from Bihar, India. I recently completed B-Tech in Information Technology from Guru Nanak Dev Engineering College, Ludhiana Punjab.<br></br>
              <br></br>
            I love wokring on creating web products as I could instanlty see my work done. After learnng React.Js and working on several projects with this technology, working on web technologies have become so much fun for me. I enjoy this process of creating something new.
          </p>
          </Textbox>
          <Personal>
            <h3 className="heading">My favourite music artists😍</h3>
            <div className="artistbox">
              <Artistname>Prateek Khuhad</Artistname>
              <Artistname>Ritivz</Artistname>
              <Artistname>21 Pilots</Artistname>
              <Artistname>Halsey</Artistname>
              <Artistname>Imagine Dragon</Artistname>
              <Artistname>Kodaline</Artistname>
              <Artistname>Lukus Graham</Artistname>
            </div>
          </Personal>
        </Content>
      </AboutWrapper>

    </Container>
  )
}

export default index
