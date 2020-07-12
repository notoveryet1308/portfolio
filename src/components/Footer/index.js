import React from 'react'
import styled from 'styled-components';

import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.png';
import twitter from '../../img/twitter.png';

import { Logo } from '../../stylesheets/global';
const Footer = styled.footer`
  width: 100%;
  height: 20vh;
  background:#000;
  padding: 1rem 0;
`
const Content = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Mantra = styled.div`
  display: inline-block;
  padding: .2rem 1rem;
  color:#000;
  font-size: 1.7rem;
  font-weight: 500;
  background: #F6FA2F;
  text-transform: uppercase;
  border-radius: .3rem;
  text-align: center;
`
export const SocilaMediaBox = styled.div`
  display: flex;
  height: 6rem;
  justify-content: flex-start;
  /* background: #eee; */
`
export const IconImg = styled.img`
 width: 5rem;
 height: 5rem;
 cursor: pointer;
 margin-right: .5rem;
 @media (max-width: 600px){
   width: 4rem;
   height: 4rem;
 }
`

function index() {
  return (
    <Footer>
      <Content>
        <Logo>&lt;rahulraj&gt;</Logo>
        <Mantra>I keep learning so i keep doing better.</Mantra>
        <SocilaMediaBox>
          <a
              href="https://github.com/notoveryet1308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImg src={github} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul1308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImg src={linkedin} />
            </a>
            <a
              href="https://twitter.com/rahulraz1308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconImg src={twitter} />
            </a>
        </SocilaMediaBox>
      </Content>
    </Footer>
  )
}

export default index
