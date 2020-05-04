import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const wholeUrl = window.location.href;
    const id = wholeUrl.slice(wholeUrl.indexOf('=') + 1);
    $.ajax({
      method: 'GET',
      url: `/api/images/${id}`,
      success: (data) => {
        this.setState({
          images: data,
        });
      },
    });
  }

  render() {
    return (
      <div>
        <div />
        <div>IM INSIDE REACT</div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
