import React from "react";
import "./index.scss";
import AppButton from "./../../components/button/index.jsx";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="home-slider">
        <img src={`images/pexels-evg-culture-1170979.jpg`} alt="First slide" />
        <div className="home-slider-content">
          <div className="home-slider-text">
            <h1>Appoitments</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              justo metus, mattis non lobortis at, hendrerit nec sem. Donec
              aliquam lacus nec urna maximus posuere. Curabitur ornare nisi eget
              fermentum
            </p>
          </div>
        </div>
      </div>
      <Row>
        <Col className="home-about-us">
          <h1>Notre cabinet</h1>
          <blockquote class="home-quote">
            <img class="img-circle" src="images/julie.jpg" alt="" />
            <p>
              <q>
                I urgently required dental help last 4th of July. And despite
                all other clinics being closed, BeDentist took my appointment!
              </q>
            </p>
            <div>
              <cite>Julie Cumbo</cite>
              <time datetime="2018-04-30">– May 10, 2018</time>
            </div>
          </blockquote>
        </Col>
      </Row>
      <Row className="help-row">
        <Col md={{ span: 3, offset: 2 }}>
          <h1>Des questions ?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className="help-button">
          <AppButton text={"Nous contacter"} />
        </Col>
      </Row>
    </>
  );
};

export { Home as default };
