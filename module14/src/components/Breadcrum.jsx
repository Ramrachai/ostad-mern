import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function Breadcrum({bg}) {

    const location = useLocation();
    const { pathname } = location;
    const paths = pathname.split('/').filter((path) => path !== '');
    const currentPage = paths[paths.length - 1];

    return (
        <BreadcrumWrapper bg={bg}>
            <BreadcrumContainer >
                <PageTitle>{currentPage}</PageTitle>
                <PageLinks>
                    <Link to={`/`}>Home</Link>
                    <MdKeyboardArrowRight size={"1.4em"} />  
                    <span className='current-page'>{currentPage}</span>
                </PageLinks>
            </BreadcrumContainer>
        </BreadcrumWrapper>
    )
}


const BreadcrumWrapper = styled.div`
    background-color: var(--${props => props.bg});
    height: 250px;

    @media (max-width: 768px) {
        height: 180px;
    }
`

const BreadcrumContainer = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 2rem 0;
    @media (max-width: 768px) {
        width: 90%;
    }
`

const PageTitle = styled.h3`
    font-size: 40px;
    font-weight: 600;
    color: var(--dark);
    position:absolute; 
    text-transform: capitalize;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);

    @media (max-width: 768px) {
        text-align: center;
        font-size: 24px;
    }
`
const PageLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    font-size: 16px;
    font-weight: 500;
    position:absolute; 
    top: 70%;
    left: 0%;
    a{
        color: var(--dark);
    }
    
    span{
        color: var(--primary);
        text-transform: capitalize;
    }

    @media (max-width: 768px) {
        text-align: center;
        font-size: 14px;
        top: 75%;
    }

`