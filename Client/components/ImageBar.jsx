import React from 'react';
import styled from 'styled-components';
import ImageEntry from './ImageEntry.jsx';

const ImageHolder = styled.div`
  grid-area: ImageBar;
  text-align: center;
  margin-top: 50%;
`;
const ScrollUp = styled.button`
  grid-area: arrowUp
  cursor: pointer;
`;

const ScrollDown = styled.button`
  grid-area: arrowDown;
  cursor: pointer;
`;

const ImageBar = ({ images, onClick }) => (
  <ImageHolder>
    <ScrollUp>/\</ScrollUp>
    {images.map((image, key) => (
      <ImageEntry
        key={key}
        image={image}
        onClick={(e) => onClick(e)}
      />
    ))}
    <ScrollDown>\/</ScrollDown>
  </ImageHolder>
);

export default ImageBar;
