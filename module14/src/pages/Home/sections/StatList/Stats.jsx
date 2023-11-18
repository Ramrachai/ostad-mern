import { useState, useEffect } from 'react'
import Stat from './Stat'
import styled from '@emotion/styled';

export default function Stats() {
    const [statData, setStatData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/statData.json');
            const data = await response.json();
            setStatData(data);
        }
        fetchData();
    }, []);

    return (
        <StatContainer>
            {statData.map((item, index) => {
                return (
                    <Stat
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        number={item.number}
                    />
                )
            })}
        </StatContainer>
    )
}


const StatContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }

`