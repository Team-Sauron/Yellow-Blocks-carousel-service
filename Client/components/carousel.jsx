import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import ImageBar from './ImageBar.jsx';

const Container = styled.div`
  border: 1px solid black;
  background-color: rgb(248, 248, 248)
`;
const ImageBox = styled.div`
  margin-left: 15%;
`;


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
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
        console.log(data.pictures);
        this.setState({
          images: data.pictures,
        });
      },
    });
  }

  render() {
    const { images } = this.state;
    return (
      <Container>
        <ImageBox className="mainViewer">
          <img src={images.pic1} alt="mainView" />
        </ImageBox>
        <ImageBar images={images} />
      </Container>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('carousel'));
