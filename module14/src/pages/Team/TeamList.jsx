import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import TeamItem from './TeamItem';
import styled from '@emotion/styled';

export default function TeamList({ apiEndpoint }) {

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
        <TeamListContainer>
            {
                data.map((item, index) => {
                    return (
                        <TeamItem
                            key={index}
                            imgUrl={item.image}
                            name={item.name}
                            fb={item.social.facebook}
                            twitter={item.social.twitter}
                            insta={item.social.instagram}
                        />
                    )
                })
            }
        </TeamListContainer>
    );
}

TeamList.propTypes = {
    apiEndpoint: PropTypes.string.isRequired
}

const TeamListContainer = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.2rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
        justify-content: center;
    }

`