import Breadcrum from "../../components/Breadcrum";
import { Container, Wrapper } from "../../components/Common";
import TeamList from "./TeamList";


const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/teamData.json";

export default function Team() {
    return (
        <Wrapper bg="gray">
            <Container>
                <Breadcrum />
                <TeamList apiEndpoint={apiURL}/>
            </Container>
        </Wrapper>
    )
}



