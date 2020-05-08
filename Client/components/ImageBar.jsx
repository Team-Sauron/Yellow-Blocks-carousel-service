import React from 'react';
// import styled from 'styled-components';
import ImageEntry from './ImageEntry.jsx';

const ImageHolder = styled.div`
`;
const ScrollUp = styled.button`
  grid-area: arrowUp
  cursor: pointer;
`;
// const ImageHolder = styled.div`
//   grid-area: ImageBar;
//   text-align: center;
//   margin-top: 50%;
// `;
// const ScrollUp = styled.button`
//   grid-area: arrowUp
//   cursor: pointer;
// `;

// const ScrollDown = styled.button`
//   grid-area: arrowDown;
//   cursor: pointer;
// `;

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
