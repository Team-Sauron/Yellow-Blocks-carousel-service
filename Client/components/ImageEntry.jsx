import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 60px;
  height: 45px;
`;

const Button = styled.button`
  display: block;
  cursor: pointer;
  background-color: white;
  border: 1px solid lightgrey;
`;

const ImageEntry = ({ image }) => (
  <Button type="button">
    <Thumbnail className="thumbNail" src={image} alt="" />
  </Button>
);

export default ImageEntry;
