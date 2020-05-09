import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import ImageEntry from './ImageEntry';

const ImageBar = ({ images, onClick }) => (
  <div className="ImageHolder">
    <button className="ScrollUp" type="button">
      <FaChevronUp size="18px" />
    </button>
    {images.map((image, key) => (
      <ImageEntry
        key={key}
        number={key}
        image={image}
        onClick={(e) => onClick(e)}
      />
    ))}
    <button className="ScrollDown" type="button">
      <FaChevronDown size="18px" />
    </button>
  </div>
);

export default ImageBar;
