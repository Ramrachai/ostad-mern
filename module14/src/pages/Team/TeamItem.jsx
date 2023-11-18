import styled from "@emotion/styled";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import PropTypes from 'prop-types';


export default function TeamItem({ imgUrl, name, fb, twitter, insta }) {

    return (
        <TeamItemContainer>
            <img src={imgUrl} alt={name} loading="lazy"/>
            <h3>{name}</h3>
            <ul>
                <li><a href={fb}><FaFacebookF /></a></li>
                <li><a href={twitter}><FaTwitter /></a></li>
                <li><a href={insta}><FaInstagram /></a></li>
            </ul>
        </TeamItemContainer>
    )
}


TeamItem.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    fb: PropTypes.string,
    twitter: PropTypes.string,
    insta: PropTypes.string
}


const TeamItemContainer = styled.div`
    text-align: center;
    border-radius: 20px;
    max-height: 400px;
    max-width: 320px;
    background-color: #fff;
    border: 1px solid #ddd;
    transition: all 0.3s ease;
    position: relative;
    &:hover {
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }

    img {
        width: 100%;
        height: auto; 
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
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

    ul {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin: 1rem 0;
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--gray);
        padding: 1rem;
        border-radius: 25px;


        li{
            list-style: none;
            position: relative;
            &:not(:last-child)::after {
                position: absolute;
                top: 8%; 
                left: 110%;
                content: "";
                display: block;
                width: 2px;
                height: 0.8rem;
                background-color: #c0c0c0;
                margin: 0 0.5rem;
            
            }

            &:hover svg {
                transform: translateY(-5px);
                color: var(--primary);
            }
        }
        a{
            line-height: 0;

        }
    }

    svg {
        font-size: 1rem;
        color: #8a8a8a;
        transition: all 0.3s ease;
    }
`