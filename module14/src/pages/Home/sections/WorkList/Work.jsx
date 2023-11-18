import React from 'react'
import { Icon } from '../../../../components/Common'
import { FaArrowRightLong } from "react-icons/fa6";
import styled from '@emotion/styled';


export default function Work({ icon, title, description, link }) {
    return (
        <WorkContainer>
            <Icon icon={icon} />
            <h3 >{title}</h3>
            <p>{description}</p>
            <LearnMoreLink href={link}>Learn More <FaArrowRightLong /></LearnMoreLink>
        </WorkContainer>
    )
}


const WorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
    padding: 2rem;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

`

const LearnMoreLink = styled.a` 
    color: #000;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px; 
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;

    svg {
        margin-left: 0.5rem;
        transition: all 0.3s ease-in-out;
    }

    &:hover, &:hover svg {
        color: var(--primary)
    } 
    &:hover  svg{ 
        transform: translateX(5px);
    }
`