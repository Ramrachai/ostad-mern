import styled from '@emotion/styled'

export default function SectionSubTitle({ subTitle, align }) {
  return (
    <SubTitle align = {align} >{subTitle}</SubTitle>
  )
}

const SubTitle = styled.h2`
    text-transform: capitalize;
    color: var(--dark);
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: ${props => props.align || "left"};
    width: 45%;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        font-size: 24px;
    }
`