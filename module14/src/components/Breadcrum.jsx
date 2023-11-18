import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function Breadcrum() {

    const location = useLocation();
    const { pathname } = location;
    const paths = pathname.split('/').filter((path) => path !== '');
    const currentPage = paths[paths.length - 1];

    return (
        <BreadcrumContainer style={{ position: "relative" }}>
            <PageTitle>{currentPage}</PageTitle>
            <PageLinks>
                <Link to={`/`}>Home</Link>
                <MdKeyboardArrowRight size={"1.4em"} />  
                <span className='current-page'>{currentPage}</span>
            </PageLinks>
        </BreadcrumContainer>
    )
}

Breadcrum.propTypes = {
    prevPage: PropTypes.string,
    currentPage: PropTypes.string
};


const BreadcrumContainer = styled.div`
    height: 250px;
    @media (max-width: 768px) {
        height: 120px;
    
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