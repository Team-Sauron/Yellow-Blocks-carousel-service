import React from 'react';
// import styled from 'styled-components';

// const Thumbnail = styled.img`
//   width: 60px;
//   height: 45px;
// `;

// const ImageButton = styled.button`
//   display: block;
//   cursor: pointer;
//   background-color: white;
//   border: 1px solid lightgrey;
//   margin-left 10px;
//   margin-top: 5px;
//   margin-bottom: 5px;
// `;

const ImageEntry = ({ image, onClick }) => (
  <button className="ImageButton" type="button" onClick={(e) => onClick(e)}>
    <img className="Thumbnail" src={image} alt="" />
  </button>
);

export default ImageEntry;
