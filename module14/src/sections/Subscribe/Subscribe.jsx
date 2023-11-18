import React from 'react'
import {Wrapper, Container} from "../../components/Common.jsx"
import SectionTitle from "../../components/SectionTitle.jsx"
import SectionSubtitle from "../../components/SectionSubtitle.jsx"
import styled from '@emotion/styled'

export default function Subscribe() {
  return (
    <Wrapper bg="light">
      <SubsContainer>
          <SectionTitle title={"subscribe"} />
          <SectionSubtitle align={"center"} subTitle={"Subscribe to get the latest news about us"}/>
          <Description>Please drop your email below to get daily update about what we do</Description>
          <Form>
            <input type="text"  />
            <button>Subscribe</button>
          </Form>

      </SubsContainer>
    </Wrapper>
  )
}


const Description = styled.p`
  color: #8b8b8b; 
  text-align: center;
  font-size: 14px;
`

const SubsContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Form = styled.form`
  width: 100%;
  margin: 1.5rem auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(5%);
  

  input {
    width: 50%;
    height: 50px;
    border-radius: 20px;
    
  }
  button{
    transform: translateX(-105%);
    border-radius: 14px;
    background: #F55F1D;
  }
  @media (max-width: 768px) {
    transform: translateX(10%);
    input{
      width: 90%;
    }
  }
`