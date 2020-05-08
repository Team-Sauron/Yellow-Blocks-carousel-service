import React from 'react';
// import styled from 'styled-components';
import ImageEntry from './ImageEntry.jsx';

const ImageBar = ({ images, onClick }) => (
  <div className="ImageHolder">
    <button className="ScrollUp" type="button">/\</button>
    {images.map((image, key) => (
      <ImageEntry
        key={key}
        image={image}
        onClick={(e) => onClick(e)}
      />
    ))}
    <button className="ScrollDown" type="button">\/</button>
  </div>
);

export default ImageBar;
