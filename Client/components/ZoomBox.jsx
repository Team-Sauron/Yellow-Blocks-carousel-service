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

class ZoomBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ZoomIn>HELLO</ZoomIn>
    );
  }
}

export default ZoomBox;
