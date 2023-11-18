import { Container, Wrapper } from '../../../../components/Common'
import Projects from './Projects';
import SectionTitle from "../../../../components/SectionTitle"
import SectionSubTitle from "../../../../components/SectionSubTitle"

export default function FreaturedProject() {

  return (
    <Wrapper bg="secondary">
      <Container>
        <SectionTitle title={"Featured Project"}/>
        <SectionSubTitle subTitle={"We provide the Perfect Solution to your business growth"} />
        <Projects />
      </Container>
    </Wrapper>
  )
}
