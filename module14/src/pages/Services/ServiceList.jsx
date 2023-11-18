import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import ServiceItem from './ServiceItem';
import styled from '@emotion/styled';

export default function ServiceList({ apiEndpoint }) {

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
        <ServiceListContainer>
            {
                data.map((item, index) => {
                    return (
                        <ServiceItem
                            key={index}
                            title={item.title}
                            description={item.description}
                            images={item.images}
                        />
                    )
                })
            }
        </ServiceListContainer>
    );
}

ServiceList.propTypes = {
    apiEndpoint: PropTypes.string.isRequired
}

const ServiceListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.2rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

`