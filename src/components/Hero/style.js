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
  /* align-items: center; */
  @media (min-width:1200px){
    width: 80%;
  }
  @media (max-width:1200px){
    width: 90%;
    
  }
  @media (max-width: 600px){
    padding-top: 2rem;
    width: 90%;
    height: 92vh;
    justify-content: center;
    flex-direction: column-reverse;
    /* background:blue; */
  }
  @media (max-width: 400px){
    height: 85vh;
  }
  .circled-arrow{
    position: absolute;
    top: 78vh;
    left: 50%;
    .line{
      
      animation: ${hideshow} 1s ease-in-out infinite;
    }

    @media (max-width: 600px){
      display: none;
  }
  }
  
`
export const LeftContent = styled.div`
  width: 50%; 
  /* height: 60vh; */
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5rem;
  @media (max-width: 1150px){
    width: 60%;
    /* height: 100vh; */
    /* background: #333; */
  }
 
  @media (max-width: 600px){
    /* height: 40vh; */
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 0;
    /* background: #333; */
  }
`
export const RightContent = styled.div`
  width: 30%; 
  /* height: 100%; */
  /* background: #333; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 7rem;
  padding-left: 2rem;
  @media (max-width: 1039px){
    width: 35%;
  }
  @media (max-width: 950px){
    padding-top: 9rem;
  }
  @media (max-width: 840px){
    width: 38%;
  }
   @media (max-width: 750px){
     width: 45%;
  }
  @media (max-width: 768px){
    padding-top: 8rem;
    
  }
  @media (max-width: 600px){
    width: 100%;
    /* height: 40vh; */
    justify-content: center;
    align-items: center;
    padding: 0;
    /* background: #333; */
  }
  @media (max-width: 400px){
    width: 100%;
    /* height: 40vh; */
    /* background: #333; */
  }
`
export const MainTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  text-transform: uppercase;
  /* color:#ED284C; */
  color: #fff;
  margin-top: 12rem;
  @media (max-width:935px){
    font-size: 4rem;
    /* margin-top: 3rem; */
  }
  @media (max-width:810px){
    font-size: 3.5rem;
    /* margin-top: 3rem; */
  }
  @media (max-width: 768px){
    margin-top: 7rem;
    font-size: 3rem;
  }
  @media (max-width: 600px){
    font-size: 3.5rem;
    margin-top: 2rem;
  }
  @media (max-width: 450px){
    font-size: 3rem;
  }
  @media (max-width: 380px){
    font-size: 2.5rem;
  }
  @media (max-width: 310px){
    font-size: 2.5rem;
  }
`
export const SubText = styled.h3`
  color: #FDFFA5;
  /* text-transform: capitalize; */
  font-size: 1.7rem;
  font-weight:300;
  /* @media (max-width:900px){
    font-size:2rem;
  } */
  @media (max-width: 600px){
    font-size: 1.6rem;
    /* background: #eee; */
    text-align: center;
  }
  @media (max-width: 400px){
    font-size: 1.5rem;
  }
`
export const ButtonBox = styled.div`
  width: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ED284C;
  margin-top:3rem;
  margin-bottom: 3rem;
  border-radius: 0;
  cursor:pointer;
  &:hover{
    background: #ED2823;
  }
  @media (max-width: 840px){
      margin: 2rem 0;
  }
  @media (max-width: 768px){
    width: 13rem;
    margin-top: 3rem;
  }
  @media (max-width: 600px){
    margin:1rem 0;
     
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
  @media (max-width: 840px){
      padding: .6rem 1rem;
  }
  @media (max-width: 600px){
    padding: .5rem 1rem;
    font-size: 1.5rem;
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
 @media (max-width: 600px){
   width: 4rem;
   height: 4rem;
 }
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
  @media (max-width: 600px){
    margin-top: .3rem;
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
    font-size: 3.5rem;
  }
  @media (max-width: 600px){
    font-size: 3rem;
  }
  @media (max-width: 400px){
    font-size: 2.5rem;
  }
`
export const HideText = styled.span`
 @media (max-width: 600px){
   display: none;
 }
 
`