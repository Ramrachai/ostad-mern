import React, { useState, useEffect } from 'react'
import Work from './Work'
import styled from '@emotion/styled';

export default function Works() {
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/worklist.json');
            const data = await response.json();
            setWorkData(data);
        }
        fetchData();
    }, []);

    return (
        <WorkContainer>
            {workData.map((item, index) => {
                return (
                    <Work
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                )
            })}
        </WorkContainer>
    )
}


const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 3rem;

    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 2rem;

    }

`