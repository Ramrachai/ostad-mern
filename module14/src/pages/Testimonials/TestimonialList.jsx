import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import TestimonialItem from './TestimonialItem';
import styled from '@emotion/styled';

export default function TestimonialList({ apiEndpoint }) {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, [apiEndpoint]);


    return (
        <TestimonialListContainer>
            {
                data.map((item, index) => {
                    return (
                        <TestimonialItem
                            key={index}
                            imgUrl={item.image}
                            name={item.name}
                            reviewText={item.reviewText}
                            position={item.position}
                        />
                    )
                })
            }
        </TestimonialListContainer>
    );
}

TestimonialList.propTypes = {
    apiEndpoint: PropTypes.string.isRequired
}

const TestimonialListContainer = styled.div`
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem; 
        margin: 4rem auto; 
        justify-content: space-between;
        place-items: center;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);  
        }
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);  
        }
`