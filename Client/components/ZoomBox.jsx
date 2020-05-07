import React from 'react';
import styled from 'styled-components';

const ZoomIn = styled.div`
  border: 10px solid orange;
  z-index: 1000;
  position: absolute;
  margin-left: 30px;
  margin-right: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 580px;
  height: 450px;
`;
const ZoomedImg = styled.img`
  transform: scale(1.1);
`;

const ZoomBox = ({ defaultImg }) => (
  <ZoomIn>
    <ZoomedImg src={defaultImg} />
  </ZoomIn>
);

export default ZoomBox;
