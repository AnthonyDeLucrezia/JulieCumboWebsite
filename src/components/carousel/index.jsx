import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.scss";

const AppCarousel = () => {
  return (
    <Carousel className="app-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`images/pexels-evg-culture-1170979.jpg`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={`images/pexels-daniel-frank-287237.jpg`}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export { AppCarousel as default };
