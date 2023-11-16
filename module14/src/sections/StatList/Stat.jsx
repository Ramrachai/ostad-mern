import React from 'react'
import { Icon } from '../../components/Common'
import styled from '@emotion/styled';


export default function Stat({ icon, title, number }) {
    return (
        <StatContainer>
            <Icon icon={icon} />
            <h3>{number}</h3>
            <p >{title}</p>
        </StatContainer>
    )
}


const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

`

