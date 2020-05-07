import React from 'react';
import styled from 'styled-components';

const TestBox = styled.div`
  border: 10px solid orange;
  z-index: 1000;
  position: absolute;
  width: 620px;
  height: 480px;
`;

class ZoomBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <TestBox>HELLO</TestBox>
    );
  }
}

export default ZoomBox;
