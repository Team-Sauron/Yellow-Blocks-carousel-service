/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { FaChevronLeft, FaChevronRight, FaExpandArrowsAlt } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import ImageBar from './ImageBar';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      images: [],
      isZoomed: false,
      fullScreen: false,
      x: 0,
      y: 0,
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  onMouseMove(e) {
    const img = e.target;
    const width = img.offsetWidth;
    const height = img.offsetHeight;
    const imgPosX = ((e.nativeEvent.offsetX / width) * 100);
    const imgPosY = ((e.nativeEvent.offsetY / height) * 100);
    this.setState({
      x: imgPosX,
      y: imgPosY,
    });
  }

  getImages() {
    const url = window.location.href;
    const id = url.slice(url.indexOf('=') + 1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3001/api/images/${id}`,
      success: (data) => {
        const urls = Object.values(data.pictures);
        this.setState({
          images: urls,
        });
      },
    });
  }

  nextImage() {
    const { images } = this.state;
    let { index } = this.state;
    this.setState({
      index: index += 1,
    });
    if (index === images.length) {
      this.setState({
        index: 0,
      });
    }
  }

  prevImage() {
    const { images } = this.state;
    let { index } = this.state;

    this.setState({
      index: index -= 1,
    });
    if (index === -1) {
      this.setState({
        index: images.length - 1,
      });
    }
  }

  handleImageClick(e) {
    let imgIndex = e.target.alt;
    if (imgIndex === undefined) {
      imgIndex = 3;
    } else {
      imgIndex = Number(imgIndex);
    }
    this.setState({
      index: imgIndex,
    });
  }

  toggleZoom() {
    const { isZoomed } = this.state;
    this.setState({
      isZoomed: !isZoomed,
    });
  }

  toggleFullScreen() {
    const { fullScreen } = this.state;
    this.setState({
      fullScreen: !fullScreen,
    });
  }

  render() {
    const { images } = this.state;
    const { isZoomed } = this.state;
    const { index } = this.state;
    const { x } = this.state;
    const { y } = this.state;
    const { fullScreen } = this.state;
    return (
      <div id={fullScreen ? 'fullScreenContainer' : 'Wrapper'}>
        <ImageBar images={images} onClick={this.handleImageClick} />
        <div className="ImageBox">
          <button className="previousImg" type="button" style={fullScreen ? { display: 'none' } : null} onClick={this.prevImage}>
            <FaChevronLeft size="18px" />
          </button>
          <button className="nextImg" type="button" style={fullScreen ? { display: 'none' } : null} onClick={this.nextImage}>
            <FaChevronRight size="18px" />
          </button>
          {fullScreen ? null : <div className="fullScreenLabel">Full screen</div>}
          <button className="Fullscreen" type="button" onClick={this.toggleFullScreen}>
            {fullScreen ? <GrClose size="18px" /> : <FaExpandArrowsAlt size="18px" />}
          </button>
          <img
            className={isZoomed ? 'ZoomedImg' : 'MainImage'}
            onClick={this.toggleZoom}
            src={images[index]}
            alt="mainView"
            onMouseMove={this.onMouseMove}
            style={{ transformOrigin: `${x}% ${y}%` }}
            onMouseLeave={isZoomed ? this.toggleZoom : null}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
