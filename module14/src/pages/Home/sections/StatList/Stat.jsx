import { Icon } from '../../../../components/Common'
import styled from '@emotion/styled';
import CountUp from 'react-countup';


export default function Stat({ icon, title, number }) {
    return (
        <StatContainer>
            <Icon icon={icon} />
            <CountUp
                className='countup'
                start={0}
                end={number}
                duration={3.5}
                separator=","
                decimals={0}
                decimal="."
                enableScrollSpy={true}
                />
            <p >{title}</p>
        </StatContainer>
    )
}


const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    padding: 2rem;
    aspect-ratio: 1/1;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    }

    .countup {
        font-size: 1.8rem;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
    }

`

