import React from 'react';
import styled from 'styled-components';

const TestBox = styled.div`
  display: block;
  border: 10px solid orange;
  z-index: 9;
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
