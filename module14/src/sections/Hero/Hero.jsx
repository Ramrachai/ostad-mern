import React from 'react'
import styled from "@emotion/styled"
import Button from '@mui/material/Button';
import Banners from "./Banners"
import Brands from './Brands';

export default function Hero() {
    return (
        <HeroWrapper>
            <Container>
                <Left>
                    <h1>Increase Your Customers Loyalty and Satisfaction</h1>
                    <p>We help businesses like yours earn more customers, standout from competitors,  make more money</p>
                    <Button variant='contained'>Get Started</Button>
                </Left>
                <Right>
                    <Banners />
                </Right>
            </Container>
            <Brands />
        </HeroWrapper>
    )
}


const HeroWrapper = styled.section`
    background-color: var(--secondary);
    padding: 1.4rem 0px; 
    height: auto;
    @media (max-width: 768px) {
        height: auto;
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem; 
    width: 80%;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
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

