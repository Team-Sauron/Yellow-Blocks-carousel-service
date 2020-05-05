import React from 'react';
import styled from 'styled-components';
import ImageEntry from './ImageEntry.jsx';

const ImageHolder = styled.div`
  text-align: center;
`;
const ScrollUp = styled.button`
  grid-area: arrowUp
  cursor: pointer;
`;

const ScrollDown = styled.button`
  grid-area: arrowDown;
  cursor: pointer;
`;

const ImageBar = ({ images }) => (
  <ImageHolder>
    <ScrollUp>/\</ScrollUp>
    {Object.values(images).map((image) => <ImageEntry image={image} />)}
    <ScrollDown>\/</ScrollDown>
  </ImageHolder>
);

export default ImageBar;
