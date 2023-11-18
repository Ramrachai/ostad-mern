import styled from "@emotion/styled"
import Button from '@mui/material/Button';
import Banners from "./Banners"
import Brands from './Brands';
import {Wrapper, Container} from "../../../../components/Common"

export default function Hero() {
    return (
        <Wrapper bg="secondary">
            <HeroContainer>
                <Left>
                    <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                    <p>We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                    <Button variant='contained'>Get Started</Button>
                </Left>
                <Right>
                    <Banners />
                </Right>
            </HeroContainer>
            <Brands />
        </Wrapper>
    )
}



const HeroContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem; 
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: 65px; 
    }
    p{
        font-size: 20px;
        font-weight: 500;
        line-height: normal;
    }
    button {
        margin-top: 50px;
        width: max-content; 
        padding: 20px 30px; 
        border-radius: 16px;
    }
    @media (max-width: 768px) {
        margin-top: 50px;
        h1{
            font-size: 30px;
            text-align: center;
            line-height: 35px;
        }
        p{
            font-size: 15px;
            text-align: center;
            margin-top: 20px;
        }
        button{
            margin: 0 auto;
            margin-top: 30px;
        }
    }
`

const Right = styled.div`
    flex: 1;
`

