import React from 'react'

import { animateScroll as scroll, Link } from 'react-scroll';
import styled from 'styled-components';
import { Logo } from '../../stylesheets/global';

const HeaderWrapper = styled.div`
  width: 100%;
  /* position: fixed;
  top: 0;
  left: 0; */
  z-index: 7887;
  background: #000;
`
const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;

 @media (min-width:1200px){
    width: 80%;
  }
  @media (max-width:1200px){
    width: 90%;
  }
  @media (max-width: 600px){
    display: none;
  }

`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const SmootLink = styled(Link)`
  color: ${props => props.color};
  font-size: 2rem;
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;
  font-weight: 300;

  @media (max-width: 768px){
    font-size: 1.6rem;
    margin: 0 .7rem;
  }
`

function Index() {
  return (
    <HeaderWrapper>
      <Header>
        <Logo onClick={() => scroll.scrollToTop()}>rahul.dev</Logo>
        <Nav>
          <SmootLink
            to="skills"
            smooth={true}
            duration={500}
            color='#ED284C'
          >Skills</SmootLink>
          <SmootLink
            to="works"
            smooth={true}
            duration={500}
            color='#DD15C9'
          >Works</SmootLink>
          <SmootLink
            to="aboutme"
            smooth={true}
            duration={500}
            color='#30E6F1'
          >About me</SmootLink>
          <SmootLink
            to="aboutme"
            smooth={true}
            duration={500}
            color='#fff'
          >Contact me</SmootLink>
        </Nav>
      </Header>

    </HeaderWrapper>
  )
}

export default Index;
