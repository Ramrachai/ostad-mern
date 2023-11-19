import { useEffect, useState } from 'react'
import Project from './Project'
import styled from '@emotion/styled';


export default function Projects() {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/projectList.json');
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

    a:first-of-type {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
    }

    @media (max-width: 768px) {
        margin-top: 2rem;
        grid-template-columns: repeat(2, 1fr);
       
        a:first-of-type {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
        }
    }
    @media (max-width: 480px) {
        margin-top: 2rem;
        grid-template-columns: repeat(1, 1fr);
    }  



`


