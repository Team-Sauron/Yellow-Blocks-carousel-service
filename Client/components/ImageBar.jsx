import React from 'react';
import styled from 'styled-components';
import ImageEntry from './ImageEntry.jsx';

const ImageHolder = styled.div`
`;

const ImageBar = ({ images }) => (
  <ImageHolder>
    {Object.values(images).map((image) => <ImageEntry image={image} />)}
  </ImageHolder>
);

export default ImageBar;
