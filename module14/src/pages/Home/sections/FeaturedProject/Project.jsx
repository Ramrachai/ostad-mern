import styled from '@emotion/styled'
import React from 'react'


export default function Project({ title, category, link, date, image }) {
    return (
        <ProjectContainer href={link}>
            <img src={image} alt={title} />
            <span>{category} - {date}</span>
            <h3>{title}</h3>
        </ProjectContainer>
    )
}


const ProjectContainer = styled.a`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 20px;
    text-decoration: none;
    cursor: pointer;
    padding: 1rem; 
    color: var(--dark);
    transition: all 0.3s ease;
        img {
            width: 100%;
            height: auto;
            border-radius: 20px;
            transition: all 0.3s ease;

        }
        span {
            font-size: 14px;
            font-weight: 400;
            color: #2E3E5C;
            opacity: 0.8;

        }
        h3 {
            transition: all 0.3s ease;
            font-size: 20px;
            font-weight: 700;
        }
    @media (max-width: 480px) {
        h3 {
            font-size: 1rem;
        } 
        span {
            font-size: 0.8rem;
        }
    }

   &:hover { 
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
        h3 {
            color: var(--primary);
        }
        img {
            filter: brightness(0.5);
        }
   }     
`