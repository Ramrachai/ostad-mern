import styled from "@emotion/styled";
import PropTypes from 'prop-types';

export default function TestimonialItem({ imgUrl, name, reviewText, position }) {

  return (
    <TestimonialItemContainer>
      <img src={imgUrl} alt={name} loading="lazy"/>
      <p className="clamp-lines">{reviewText}</p>
      <h3>{name}</h3>
      <h5>{position}</h5>
    </TestimonialItemContainer>
  )
}


TestimonialItem.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  reviewText: PropTypes.string,
  position: PropTypes.string,
}


const TestimonialItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem; 
  text-align: center;
  border-radius: 20px;
  padding: 1.2rem 2rem;
  aspect-ratio: 1/1.1;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  &:hover img {
      transform: scale(1.1);
  }
  &:hover h3{
    color: var(--primary);
  }

  img {
    width: 100px;
    height: 100px; 
    object-fit: cover;
    border-radius: 20px; 
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  h3 {
    transition: all 0.3s ease;
    font-size: 1.5rem;
    font-weight: 500;
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  p.clamp-lines {
    color: #9D9D9D;
    text-align: center;
    font-family: Poppins;
    line-height: 26px;
    font-size: 16px;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`