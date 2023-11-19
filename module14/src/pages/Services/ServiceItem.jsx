import styled from "@emotion/styled";
import PropTypes from 'prop-types';


export default function ServiceItem({ title, description, images }) {

    return (
        <ServiceItemContainer>
            <h3>{title}</h3>
            <p>{description}</p>
            <ImgContainer>
                {images.map((item, index) => {
                    return (
                        <img key={index} src={item} alt={title} loading="lazy"/>
                    )
                })}
            </ImgContainer>
            
        </ServiceItemContainer>
    )
}


ServiceItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
}


const ServiceItemContainer = styled.div`
    padding: 2rem;
    text-align: left;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    transition: all 0.3s ease;
    position: relative;
    &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }


    h3 {
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 1.2rem;
        @media (max-width: 480px) {
            font-size: 1.2rem;
            padding-bottom: 0.8rem;
        }
    }
    p{
        color:#9D9D9D; 
        font-weight: 200;
    }

`
const ImgContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 8px;
    margin-top: 2rem;
    

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 10px;
        transition: all 0.3s ease;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

    }
    img:first-of-type {
        grid-column: 1 / 9;
    }
    img:nth-of-type(2) {
        grid-column: 9 / 13;
    }
    img:nth-of-type(3) {
        grid-column: 1 / 7;
    }
    img:nth-of-type(4) {
        grid-column: 7 / 13;
    }
`