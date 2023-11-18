import styled from '@emotion/styled'
import googleLogo from "../../../../assets/home/hero/logos/logos_google.png"
import trelloLogo from "../../../../assets/home/hero/logos/Trello-logo-blue 1.png"
import mondayLogo from "../../../../assets/home/hero/logos/logos_monday.png"
import notionLogo from "../../../../assets/home/hero/logos/Notion.png"
import slackLogo from "../../../../assets/home/hero/logos/Slack.png"


export default function Brands() {
    return (
        <BrandWrapper>
            <BrandsContainer>
                <img src={googleLogo} alt="google logo" />
                <img src={trelloLogo} alt="trello logo" />
                <img src={mondayLogo} alt="monday logo" />
                <img src={notionLogo} alt="notion logo" />
                <img src={slackLogo} alt="slack logo" />
            </BrandsContainer>
        </BrandWrapper>
    )
}


const BrandWrapper = styled.div`
    background-color: var(--light);
    width: 100%;
    padding: 1rem 0;
    margin-top: 50px;
`
const BrandsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    img {
        width: 100px;
        height: auto;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`