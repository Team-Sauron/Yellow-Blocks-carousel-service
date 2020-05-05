import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import ImageBar from './ImageBar.jsx';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 100px 1fr 1fr;
grid-template-areas:
"arrowUp"
"ImageBar ImageBox side"
"arrowDown";
background-color: rgb(248, 248, 248)
`;
const ImageBox = styled.div`
  border: 2px solid orange;
  grid-area:
`;
const ZoomBox = styled.div`
  border: 2px solid orange;
  width: 100%;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      images: [],
    };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const url = window.location.href;
    const id = url.slice(url.indexOf('=') + 1);
    $.ajax({
      mehtod: 'GET',
      url: `/api/images/${id}`,
      success: (data) => {
        this.setState({
          images: data.pictures,
        });
      },
    });
  }

  nextImage(e) {
    e.preventDefault();
    if (this.state.images[`pic${this.state.index}`] === undefined) {
      this.state.index = 0;
    }
    this.setState({
      index: this.state.index += 1,
    });
  }

  prevImage(e) {
    e.preventDefault();
    if (this.state.index - 1 !== 0) {
      this.setState({
        index: this.state.index -= 1,
      });
    }
  }

  render() {
    const { images } = this.state;
    const { index } = this.state;
    return (
      <Wrapper>
        <ImageBar images={images} />
        <ImageBox className="mainViewer">
        <button onClick={this.nextImage}>right</button>
        <button onClick={this.prevImage}>left</button>
          <img src={images[`pic${this.state.index}`]} alt="mainView" />
        </ImageBox>
      </Wrapper>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
