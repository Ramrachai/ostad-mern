import { useEffect, useState } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';

export default function ProjectList({apiEndpoint}) {

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
      <ProjectListContainer>
          {
              data.map((item, index) => {
                  return (
                      <ProjectItem
                          key={index}
                          title={item.title}
                          description={item.description}
                          image={item.image}
                      />
                  )
              })
          }
      </ProjectListContainer>
  );
}

ProjectList.propTypes = {
  apiEndpoint: PropTypes.string.isRequired
}

const ProjectListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin-top: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 2rem;
  }
`
