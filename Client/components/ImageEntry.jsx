import React from 'react';

const ImageEntry = ({ image, onClick }) => (
  <button className="ImageButton" type="button" onClick={(e) => onClick(e)}>
    <img className="Thumbnail" src={image} alt="" />
  </button>
);

export default ImageEntry;
