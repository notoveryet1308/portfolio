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
`