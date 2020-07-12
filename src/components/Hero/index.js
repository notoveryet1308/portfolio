import React, { useRef, useEffect } from 'react';
import { gsap,Expo } from 'gsap';
import { Link } from 'react-scroll';
import { Container } from '../../stylesheets/global';
import github from '../../img/github.svg';


import linkedin from '../../img/linkedin.png';
import twitter from '../../img/twitter.png';


import {
  HeroWrapper,
  LeftContent,
  MainTitle,
  SubText,
  ButtonBox,
  MyworkBtn,
  SocilaMediaBox,
  IconImg,
  RightContent,
  HeroText,
  HeroTextBox,
  HideText
} from './style';



function Index() {
  const design = useRef(null);
  const prototype = useRef(null);
  const create = useRef(null);
  const deliver = useRef(null);
  const repeat = useRef(null);

  useEffect(() => {
    gsap.to(design.current, 2, { css: { transform: "translateY(0)", zIndex: 44, visibility: "visible" }, opacity: 1, ease: Expo.easeInOut },);
    gsap.to(prototype.current, 3, { css: { transform: "translateY(0)", zIndex: 44, visibility: "visible" }, opacity: 1, ease: Expo.easeInOut },);
    gsap.to(create.current, 4, { css: { transform: "translateY(0)", zIndex: 44, visibility: "visible" }, opacity: 1, ease: Expo.easeInOut },);
    gsap.to(deliver.current, 5, { css: { transform: "translateY(0)", zIndex: 44, visibility: "visible" }, opacity: 1, ease: Expo.easeInOut },);
    gsap.to(repeat.current, 6, { css: { transform: "translateY(0)", zIndex: 44, visibility: "visible" }, opacity: 1, ease: Expo.easeInOut },);
  }, [])
  return (
    <Container bgColor="#000">
      <HeroWrapper>
        <LeftContent>
          <MainTitle>Frontend Developer</MainTitle>
          {/* <SubText>i keep learning so i keep doing better</SubText> */}
          <SubText>
            Specialized in developing frontend side of the web.
            <HideText>
              Have experince in developing fullstack web products too.
            </HideText>
          </SubText>
          <ButtonBox>
            <MyworkBtn to="works" duration={1000} smooth={true}>My Work</MyworkBtn>

          </ButtonBox>
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
        </LeftContent>
        <RightContent>
          <HeroTextBox>
            <HeroText ref={design}>DESIGN</HeroText>
          </HeroTextBox>
          {/* <HeroText ref={design}>DESIGN</HeroText> */}
          <HeroTextBox>
            <HeroText ref={prototype}>Prototype</HeroText>
          </HeroTextBox>
          <HeroTextBox>
            <HeroText ref={create}>Create</HeroText>
          </HeroTextBox>
          <HeroTextBox>
            <HeroText ref={deliver}>Deliver</HeroText>
          </HeroTextBox>
          <HeroTextBox>
            <HeroText ref={repeat}>Repeat</HeroText>
          </HeroTextBox>
        </RightContent>
        <div className="circled-arrow">
          <Link to="skills" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17.5" cy="17.5" r="16.5" stroke="white" stroke-width="2" />
              <line className="line" x1="10.5195" y1="15.2386" x2="18.072" y2="25.057" stroke="white" stroke-width="2" />
              <line className="line" x1="24.8638" y1="15.7066" x2="18.1758" y2="26.133" stroke="white" stroke-width="2" />
            </svg>
          </Link>
        </div>
      </HeroWrapper>
    </Container>
  )
}

export default Index;
