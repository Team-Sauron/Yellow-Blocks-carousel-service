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
`;
const ZoomBox = styled.div`
  border: 2px solid orange;
  width: 100%;
`;
const NextButton = styled.button`
`;
const PrevButton = styled.button`

`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [],
      defaultImg: [],
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const url = window.location.href;
    const id = url.slice(url.indexOf('=') + 1);
    $.ajax({
      method: 'GET',
      url: `/api/images/${id}`,
      success: (data) => {
        const urls = Object.values(data.pictures);
        this.setState({
          images: urls,
          defaultImg: urls[0],
        });
      },
    });
  }

  nextImage() {
    const { images } = this.state;
    let { index } = this.state;
    if (index + 1 !== images.length) {
      this.setState({
        index: index += 1,
        defaultImg: images[index],
      });
    }
    if (index + 1 === images.length) {
      this.setState({
        index: -1,
        defaultImg: images[index],
      });
    }
  }

  prevImage() {
    const { images } = this.state;
    let { index } = this.state;
    if (index - 1 !== -1) {
      this.setState({
        index: index -= 1,
        defaultImg: images[index],
      });
    }
    if (index - 1 === -1) {
      this.setState({
        index: images.length,
        defaultImg: images[index],
      });
    }
  }

  handleImageClick(e) {
    this.setState({
      defaultImg: e.target.src,
    });
  }

  render() {
    const { images } = this.state;
    const { defaultImg } = this.state;
    return (
      <Wrapper>
        <ImageBar images={images} onClick={this.handleImageClick} />
        <ImageBox className="mainViewer">
          <PrevButton type="button" onClick={this.prevImage}>left</PrevButton>
          <NextButton type="button" onClick={this.nextImage}>right</NextButton>
          <img src={defaultImg} alt="mainView" />
        </ImageBox>
      </Wrapper>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
