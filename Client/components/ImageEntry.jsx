import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 60px;
  height: 45px;
`;

const Button = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
`;

const ImageEntry = ({ image }) => (
  <Button type="button">
    <Thumbnail className="thumbNail" src={image} alt="" />
  </Button>
);

export default ImageEntry;
