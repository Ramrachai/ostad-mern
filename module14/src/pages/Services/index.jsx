import Breadcrum from "../../components/Breadcrum";
import { Container, Wrapper, Spacing } from "../../components/Common";
import ServiceList from "./ServiceList"
import SectionTitle from "../../components/SectionTitle";
import SectionSubTitle from "../../components/SectionSubTitle";

const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/serviceData.json";

export default function Services() {
    return (
        <>
            <Breadcrum bg={"gray"} />
            <Wrapper bg="light">
                <Container>
                    <Spacing height="2" />
                    <SectionTitle title={"our all services"} />
                    <SectionSubTitle subTitle={"we provide be web design services"} />
                    <ServiceList apiEndpoint={apiURL} />
                </Container>
            </Wrapper>
        </>
    )
}



