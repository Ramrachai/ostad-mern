import React from 'react'
import {Wrapper, Container} from "../../../../components/Common"
import SectionTitle from '../../../../components/SectionTitle'
import SectionSubTitle from '../../../../components/SectionSubTitle'
import Works from './Works'

export default function WorkList() {
  return (
    <Wrapper bg="light">
      <Container>
        <SectionTitle title={"Work List"}/>
        <SectionSubTitle subTitle={"We provide the Perfect Solution to your business growth"} />
        <Works />
      </Container>
    </Wrapper>
  )
}