import React, { useEffect, useState } from 'react'
import Project from './Project'
import styled from '@emotion/styled';


export default function Projects() {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('../../../database/projectList.json');
            const data = await response.json();
            setProjectsData(data);
        }
        fetchData();
    }, []);

    return (
        <ProjectsContainer>
            {projectsData.map((item, index) => {
                return (
                    <Project
                        key={index}
                        title={item.title}
                        category={item.category}
                        link={item.link}
                        date={item.date}
                        image={item.image}
                    />
                )
            })}
        </ProjectsContainer>
    )
}


const ProjectsContainer = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    @media(max-width: 768px) {
        margin-top: 2rem;
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 480px) {
        margin-top: 2rem;
        grid-template-columns: repeat(1, 1fr);
    }  

    a:first-child {
        /* background: red; */
        grid-column: 1 / 3;
        grid-row: 1/3;
    }
`


