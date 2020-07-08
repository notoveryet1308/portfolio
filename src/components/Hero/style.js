import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes`
   0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`
const hideshow = keyframes`
0% { transform: translate(0px); }
  45% {  transform: translateY(3px); }
  60% {  transform: translateY(2px); }
  100% {  transform: translateY(0px);}
`



export const HeroWrapper = styled.div`

  height: 97vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width:1200px){
    width: 80%;
  }
  @media (max-width:1200px){
    width: 90%;
  }
  @media (max-width: 600px){
    display: none;
  }
  .circled-arrow{
    position: absolute;
    top: 85vh;
    left: 50%;
    .line{
      
      animation: ${hideshow} 1s ease-in-out infinite;
    }
  }
  
`
export const LeftContent = styled.div`
  width: 50%; 
  height: 60vh;
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const RightContent = styled.div`
  width: 35%; 
  height: 60vh;
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 2rem;
  padding-left: 2rem;
  @media (max-width: 1039px){
    width: 45%;
  }
  @media (max-width: 768px){
    padding-top: 3rem;
    width: 48%;
  }
`
export const MainTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color:#fff;
  margin-top: 12rem;
  @media (max-width:1150px){
    font-size: 5rem;
    margin-top: 10rem;
  }
  @media (max-width:1000px){
    font-size: 4.5rem;
    margin-top: 8rem;
  }
  @media (max-width:900px){
    font-size: 3.5rem;
    margin-top: 8rem;
  }
  @media (max-width: 768px){
    font-size: 3rem;
  }
`
export const SubText = styled.h3`
  color: #FDFFA5;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 400;
  @media (max-width:900px){
    font-size:2rem;
  }
`
export const ButtonBox = styled.div`
  width: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DD15C9;
  margin-top:4rem;
  margin-bottom: 3rem;
  border-radius: .2rem;

  @media (max-width: 768px){
    width: 10rem;
    margin-top: 3rem;
  }
`
export const MyworkBtn = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  text-transform: capitalize;
   cursor: pointer;
   padding: 1rem 1.5rem;
   @media (max-width: 768px){
    font-size: 1.6rem;
  }
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
`
export const HeroTextBox = styled.div`
  display: inline-block;
  margin: .7rem;

  z-index: 3;
  @media (max-width:1000px){
    margin: 1rem;
  }
  @media (max-width:900px){
    margin-top:.7rem;
  }
`
export const HeroText = styled.h1`
 font-size: 5rem;
 font-family: 'Sansita', sans-serif;
 font-weight: 900;
 color: #fff;
 text-transform: uppercase;
 background: linear-gradient(264deg, #305cb4, #d95554, #e0e433, #e43370, #33e49f);
 background-size: 1000% 1000%;
-webkit-animation: ${textAnimation} 30s ease infinite;
-moz-animation: ${textAnimation} 30s ease infinite;
 animation: ${textAnimation} 30s ease infinite;
 -webkit-background-clip: text;
 background-clip: text;
color: transparent;
transform: translateY(4rem);
z-index: 2;
visibility: hidden;
/* animation-fill-mode: forwards; */
@media (max-width:1150px){
   font-size: 4.5rem;
  }
  @media (max-width:1000px){
    font-size: 4rem;
  }
  @media (max-width:900px){
    font-size: 3.8rem;
  }
`