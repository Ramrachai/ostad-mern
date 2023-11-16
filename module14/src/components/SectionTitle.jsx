import styled from '@emotion/styled'

export default function SectionTitle({ title }) {
  return (
    <Title>{title}</Title>
  )
}

const Title = styled.h4`
  color: var(--primary);
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
  @media (max-width: 768px) {
      text-align: center;
      font-size: 16px;
    }
`