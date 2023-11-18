import { Wrapper, Container } from "../../components/Common.jsx"
import SectionTitle from "../../components/SectionTitle.jsx"
import SectionSubtitle from "../../components/SectionSubTitle.jsx"
import styled from '@emotion/styled'

export default function Subscribe() {
  return (
    <Wrapper bg="light">
      <SubsContainer>
        <SectionTitle title={"subscribe"} />
        <SectionSubtitle align={"center"} subTitle={"Subscribe to get the latest news about us"} />
        <Description>Please drop your email below to get daily update about what we do</Description>
        <SubsEmailField>
          <input required="" placeholder="Enter Your Email Address" type="email" />
          <button className="subscribe-btn" type="button">Subscribe</button>
        </SubsEmailField>
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

const SubsEmailField = styled.div`
    position: relative;
    display: flex;
    height: 3.2rem;
    width: 100%;
    min-width: 200px;
    max-width: 600px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .1);
    margin-top: 3rem;

 input {
    height: 100%;
    width: 100%;
    border-radius: 16px;
    border: 1px solid  rgb(176,190,197);
    background-color: transparent;
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: rgb(69 90 100);
    outline: none;
    transition: all .15s cubic-bezier(0.4, 0, 0.2, 1);
  }

  input:focus {
    border: 1px solid #F55F1D;
  }

  .subscribe-btn {
    position: absolute;
    width: max-content;
    right: 5px;
    top: 4px;
    bottom: 4px;
    z-index: 10;
    border-radius: 16px;
    background-color: #F55F1D;
    color: #fff;
    padding: 0.625rem 1.2rem;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 400;
    border: none;
    transition: .6s ease;
  }

  .subscribe-btn:hover {
    right: 8px;
    font-weight: 600;
  }

`