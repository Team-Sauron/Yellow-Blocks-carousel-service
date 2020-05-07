import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import ImageBar from './ImageBar.jsx';
import ZoomBox from './ZoomBox.jsx';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 100px 1fr 1fr;
grid-template-areas:
"ImageBar ImageBox side";
background-color: rgb(248, 248, 248)
`;
const ImageBox = styled.div`
  grid-area: ImageBox;
  border: 2px solid orange;
  text-align: center;
  position: relative;
  width: 650px;
  height: 500px;
`;
const NextButton = styled.button`
  grid-area: ImageBox;
  position: absolute;
  margin-top: 35%;
  margin-left: 590px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
const PrevButton = styled.button`
  grid-area: ImageBox;
  position: absolute;
  width: 40px;
  height: 40px;
  margin-top: 35%;
  cursor: pointer;
  border-radius: 20px;
`;
const MainImage = styled.img`
  grid-area: ImageBox;
`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [],
      defaultImg: [],
      isZoomed: false,
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
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
        index: images.length - 1,
        defaultImg: images[index],
      });
    }
  }

  handleImageClick(e) {
    this.setState({
      defaultImg: e.target.src,
    });
  }

  zoomIn() {
    const { isZoomed } = this.state;
    this.setState({
      isZoomed: !isZoomed,
    });
  }

  render() {
    const { images } = this.state;
    const { defaultImg } = this.state;
    const { isZoomed } = this.state;
    return (
      <Wrapper>
        <ImageBar images={images} onClick={this.handleImageClick} />
        <ImageBox className="mainViewer">
          <PrevButton type="button" onClick={this.prevImage}>left</PrevButton>
          <NextButton type="button" onClick={this.nextImage}>right</NextButton>
          {isZoomed ? <ZoomBox /> : null}
          <MainImage onClick={this.zoomIn} src={defaultImg} alt="mainView" />
        </ImageBox>
      </Wrapper>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
