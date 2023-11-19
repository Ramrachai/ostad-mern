import Breadcrum from "../../components/Breadcrum";
import { Container, Spacing, Wrapper } from "../../components/Common";
import SectionSubTitle from "../../components/SectionSubTitle";
import SectionTitle from "../../components/SectionTitle";
import ProjectList from "./ProjectList";

const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/projectsData.json";

export default function Projects() {
  return (
    <>
      <Breadcrum bg={"gray"} />
      <Wrapper bg="light">
        <Container>
          <Spacing height="2" />
          <SectionTitle title={"all project"} />
          <SectionSubTitle subTitle={"Better Agency/SEO Solution At Your Fingertips"} />
          <ProjectList apiEndpoint={apiURL} />
        </Container>
      </Wrapper>
    </>
  )
}

