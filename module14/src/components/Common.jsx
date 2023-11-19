import styled from "@emotion/styled";

const Wrapper = styled.section`
    background-color: var(--${props => props.bg});
    padding: 4rem 0px; 
    height: auto;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const Icon = ({icon}) => {
    const IconContainer = styled.div`
        border-radius: 16px;
        background-color: var(--secondary);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px; 
        height: 30px;
        width: 30px;

        img {
            height: 20px;
            width: 20px;
        }
    `
    return (
        <IconContainer>
            <img src={icon} alt="icon" />
        </IconContainer>
    )
}

const Spacing = styled.div`
    height: ${props => props.height}rem;
    width: 100%;
`

export  {Wrapper, Container, Icon, Spacing};



