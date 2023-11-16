import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from '../../components/Common'
import Feature from './Feature'

export default function FreaturedProject() {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../../../database/worklist.json');
      const data = await response.json();
      console.log("data==", data)
      setWorkData(data);
    }
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Container>
        {workData.map((item, index) => {
          return (
            <Feature
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          )
        })}
      </Container>
    </Wrapper>
  )
}
