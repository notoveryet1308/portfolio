import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Container, Logo } from '../../../stylesheets/global';
import { ReactComponent as Bar } from '../../../img/bar.svg';
import { ReactComponent as Cross } from '../../../img/back-btn.svg';

const MobHeaderWrapper = styled.div`
 position: relative;
  width: 90%;
  margin: 0 auto;
  height: 5rem;
  display: none;
  justify-content: space-between;
  align-items: center;
  .bar{
    cursor: pointer;
    
  }
  @media (max-width: 600px){
    display: flex;
  }
`
const Sidemenubox = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  background: #171515;
  border-radius: .5rem;
  z-index: 9999;
  transition: all 300ms ease;
  display: flex;
  flex-direction: column;
  visibility: ${props => props.visible};
  backface-visibility: hidden;
  &:nth-child(3){
    padding-top: 2rem;
  }
`
const SmootLink = styled(Link)`
  color: ${props => props.color};
  font-size: 1.8rem;
  text-decoration: none;
  margin: .8rem .5rem;
  cursor: pointer;
  font-weight: 400;
  display: ${props => props.display};
  padding-left: 2rem;
`
function Index() {
  const [sidemenu, setSideMenu] = useState(false);
  const [size, setSize] = useState(0);
  const onClickHandler = () => {
    setSideMenu(!sidemenu);
  }
  useEffect(() => {
    if (!sidemenu) setSize(0);
    if (sidemenu) setSize(20);
  }, [sidemenu])
  return (
    <Container bgColor='#000'>
      <MobHeaderWrapper>
        <Logo>&lt;rahulraj&gt;</Logo>
        {!sidemenu ? <Bar className='bar' onClick={onClickHandler} /> :
          <Cross
            onClick={onClickHandler}
            className='bar' />
        }

        <Sidemenubox size={size} visible={sidemenu ? "visible": "hidden"} >
          <SmootLink
            to="skills"
            smooth={true}
            duration={500}
            color='#ED284C'
            onClick={onClickHandler}
            display={sidemenu ? "flex": "none"}
          >
            Skills</SmootLink>
          <SmootLink
            to="works"
            smooth={true}
            duration={500}
            color='#DD15C9'
            onClick={onClickHandler}
            display={sidemenu ? "flex": "none"}
          >Works</SmootLink>
          <SmootLink
            to="aboutme"
            smooth={true}
            duration={500}
            color='#30E6F1'
            onClick={onClickHandler}
            display={sidemenu ? "flex": "none"}
          >About</SmootLink>
          <SmootLink
            to="contact"
            smooth={true}
            duration={800}
            color='#fff'
            onClick={onClickHandler}
            display={sidemenu ? "flex": "none"}
          >Contact</SmootLink>
        </Sidemenubox>


      </MobHeaderWrapper>
    </Container>
  )
}

export default Index;
