import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>IM INSIDE REACT</div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
