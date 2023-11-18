import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ImageComponent = ({ src, ...restProps }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    let observer;
    const currentImage = imageRef.current;

    if (currentImage) {
      // Use IntersectionObserver for lazy loading
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(currentImage);
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );

      observer.observe(currentImage);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src]);

  return <img ref={imageRef} src={imageSrc} {...restProps} />;
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageComponent;
