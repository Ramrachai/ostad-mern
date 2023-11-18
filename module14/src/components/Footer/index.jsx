import { Wrapper, Container } from '../Common'
import styled from '@emotion/styled'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <Wrapper bg="dark">
      <FooterContainer>
        <LeftContainer>
          <div className="footer-content__logo">
            <h2>WEB LOGO</h2>
          </div>
          <div className="footer-content__text">
            <p>Some footer text about the  Agency. Just a little description to help people understand you better</p>
          </div>
          <div className="footer-content__social">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </LeftContainer>

        <MiddleContainer>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Services</Link></li>
            <li><Link href="/">Portfolio</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Contact Us</Link></li>
          </ul>
        </MiddleContainer>
        <RightContainer>
          <h3>Address</h3>
          <div>
            <span className='office'>Design Agency Head Office.</span>
            <span className='road'>Airport Road</span>
            <span className='country'>United Arab Emirate</span>
          </div>
        </RightContainer>
      </FooterContainer>
      <Copyright>
        <p>Copyright Design Agency {currentYear}</p>
      </Copyright>
    </Wrapper>
  )
}

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
  color: white;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4rem;
  }

`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  gap: 1rem;

  .footer-content__logo {
    img {
      width: 200px;
    }
  }
  .footer-content__text {
    p {
      font-size: 14px;
      width: 250px;
    }
  }
  .footer-content__social {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    a {
      color: white;
      font-size: 14px;
      padding:8px;
      border-radius: 50%;
      background-color: var(--primary); 
      line-height: 0;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: var(--secondary);
        color: var(--primary);
      }
    }
  }

`
const MiddleContainer = styled.div`
  flex: 1;


  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 1.2rem;
      a {
        color: white;
        font-size: 14px;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }

`
const RightContainer = styled.div`
  flex: 1;
  div {
    display: flex;
    flex-direction: column; 
    gap: 8px; 
    margin-top: 1rem;
  }
`


const Copyright = styled.div`
  width: 80%;
  margin: auto;

  p{
    text-align: left;
    font-size: 20px;
    color: #fff;

    @media (max-width:768px) {
      font-size: 16px;
      text-align: center;
      margin-top: 1rem;
    }
  }
`