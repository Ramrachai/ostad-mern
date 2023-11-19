import Breadcrum from "../../components/Breadcrum";
import { Container, Wrapper, Spacing } from "../../components/Common";
import TestimonialList from "./TestimonialList";
import SectionTitle from "../../components/SectionTitle";
import SectionSubTitle from "../../components/SectionSubTitle";


const apiURL = "https://raw.githubusercontent.com/Ramrachai/ostad-mern/main/module14/database/testimonialData.json";

export default function Testimonials() {
    return (
        <>
            <Breadcrum bg={"gray"}/>
            <Wrapper>
                <Container>
                    <Spacing height="2" />
                    <SectionTitle title={"Testimonial List"} />
                    <SectionSubTitle subTitle={"Better Agency/SEO Solution At Your Fingertips"} />
                    <TestimonialList apiEndpoint={apiURL} />
                </Container>
            </Wrapper>
        </>
    )
}



