import React from 'react'
import styled from 'styled-components';
import { SectionName } from '../../stylesheets/global';
const Conatiner = styled.div`
  width: 100%;
  position: relative;
  background: #fff;
  padding-top: .1rem;
`
const ContactWrapper = styled.div`
 position: relative;
  width: 80%;
  margin: 0 auto;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1150px){
    width: 90%;
  }
  @media (max-width: 600px){
    height: 80vh;
    padding: 3rem 0;
  }
`
const Content = styled.div`
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  width: 60%;
  padding: 3rem;
  background: #162CF8;
  border-radius: 1rem;
  margin-top: 3rem;
  @media (max-width: 600px){
    top:40%;
    width: 100%;
    margin-top: 2rem;
  }
`
const Form = styled.form`
  
`
const Filedbox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1rem 0;
`
const Label = styled.label`
  font-size:2rem;
  font-weight: 300;
  text-transform: capitalize;
  color: #fff;
  margin-bottom: .4rem;
`
const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  outline: none;
  border: none;
  background:#E3E3E3;
  border-radius: .3rem;
  margin-bottom: .5rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  caret-color: blue;

`

const Message = styled.textarea`
  width: 100%;
  height: 10rem;
  outline: none;
  border: none;
  background:#E3E3E3;
  border-radius: .3rem;
  padding: 1rem;
  font-size: 1.6rem;
  caret-color: blue;
  font-size: 1.6rem;
  font-family:'roboto';
`

const GetInTouchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 0 0;
  
`
const GetInTouch = styled.button`
  width: 50%;
  height: 3.5rem;
  background: #D90169;
  color: #fff;
  border: none;
  outline: none;
  border-radius: .5rem;
  font-size: 1.8rem;
  cursor:pointer;
  @media (max-width: 600px){
    width: 70%;
    font-size: 1.6rem;
  }
`

function index() {
  return (
    <Conatiner id="contact">
      <SectionName>Contact.</SectionName>
      <ContactWrapper>
        <Content>
          <Form
            acceptCharset="UTF-8"
            action="https://usebasin.com/f/5c9fe9960733"
            method="POST"
          >
            <Filedbox>
              <Label>Name</Label>
              <Input type="text" name="name" />
            </Filedbox>
            <Filedbox>
              <Label>Email</Label>
              <Input type="email" name="email" required />
            </Filedbox>
            <Filedbox>
              <Label>Message</Label>
              <Message type="text" name="message" />
            </Filedbox>
            <GetInTouchBox>
              <GetInTouch type="submit" >Get In Touch</GetInTouch>
            </GetInTouchBox>
          </Form>
        </Content>
      </ContactWrapper>
    </Conatiner>
  )
}

export default index
