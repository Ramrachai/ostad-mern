import React from 'react'
import Image from "../../assets/projects/1.png"
import styled from '@emotion/styled'


export default function ProjectItem({ title, description, image }) {
  return (
    <ProjectItemContainer>
      <img src={image} alt={title} />
        <h3>{title}</h3>
    </ProjectItemContainer>
  )
}

const ProjectItemContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;
  text-align: left;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  &:hover {
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      img{
        filter: brightness(0.6);
      }
      h3{
        color: var(--primary);
      }
  }


  img{
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    transition: all 0.3s ease;
  }
  h3{
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: 500;
    padding-bottom: 1.2rem;
    transition: all 0.3s ease;
    @media (max-width: 480px) {
        font-size: 1.2rem;
        padding-bottom: 0.8rem;
    }
  }

`