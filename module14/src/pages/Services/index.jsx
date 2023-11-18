import Breadcrum from "../../components/Breadcrum";
import { Container, Wrapper } from "../../components/Common";
import ServiceList from "./ServiceList"


const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/serviceData.json";

export default function Services() {
    return (
        <Wrapper bg="gray">
            <Container>
                <Breadcrum />
                <ServiceList apiEndpoint={apiURL}/>
            </Container>
        </Wrapper>
    )
}



