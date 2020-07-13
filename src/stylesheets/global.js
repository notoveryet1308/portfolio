import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
     padding: 0;
     margin:0;
     box-sizing: border-box;
   }
   html {
     font-size: 0.625rem;
     font-family: 'Roboto', sans-serif;
   }
`
export const Container = styled.div`
  width: 100%;
  position: relative;
  background: ${props => props.bgColor};
`
export const Logo = styled.h1`
   display: inline-block;
   font-size: 2.5rem;
   font-family: 'Poppins', sans-serif;
   font-weight: bold;
   color: #fff;
   cursor: pointer;
   @media (max-width: 600px){
     font-size: 2rem;
   }
`
export const SectionName = styled.h1`
  font-size: 15rem;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(51, 48, 48, 0.6);
  /* color:#fff; */
  position: absolute;
  top: -2.9rem;
  right: 0;
  @media (max-width:1200px){
    font-size: 12rem;
    top: -2rem;
  }
  @media (max-width:768px){
    font-size: 10rem;
    top: -1.5rem;
  }
  @media (max-width:600px){
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 8rem;
    z-index: 23;
    /* color:rgba(255, 254, 254, 0.7); */
    text-align: center;
    margin-top: -3rem;
  }
  @media (max-width:400px){
    font-size: 6rem;
    z-index: 23;
    text-align: center;
    margin-top: -2rem;


  }
  @media (max-width:300px){
    font-size: 4rem;
    z-index: 23;
    text-align: center;

  }
`