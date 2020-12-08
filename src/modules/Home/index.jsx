import React from "react";
import "./index.scss";
import AppButton from "./../../components/button/index.jsx";
import AppBadge from "./../../components/appBadge/index.jsx";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className={"home-container"}>
      <div className="home-slider">
        <img src={`images/pexels-evg-culture-1170979.jpg`} alt="First slide" />
        <div className="home-slider-content">
          <div className="home-slider-text">
            <div>
              <h1>Julie Cumbo</h1>
              <p>
                Confort, souci du travail bien fait et confiance retrouvée,
                telles sont nos priorités.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Row className="home-about-us">
        <Col md={{ span: 4, offset: 2 }} className="cabinet-text">
          <h1>Notre cabinet</h1>
          <blockquote class="home-quote">
            <p>
              <q>
                Un espace dédié aux soins spécialisés en orthodontie et
                orthopédie dento-maxillo faciale. Notre objectif est de proposer
                des traitements qui correspondent aux besoins, mais aussi aux
                souhaits de nos patients.
              </q>
            </p>
            <div>
              <cite>Julie Cumbo</cite>
              <time datetime="2018-04-30">– May 10, 2018</time>
            </div>
          </blockquote>
        </Col>
        <Col md={{ span: 4 }}>
          <img src={`images/map.png`} alt="First slide" className={"img-map"} />
        </Col>
      </Row>
      <Row className="team-row">
        <Col>
          <Row>
            <Col>
              <h1>Notre équipe</h1>
            </Col>
          </Row>
          <Row className="team-list">
            <Col md={{ span: 3 }}>
              <AppBadge img={`images/julie.jpg`} />
            </Col>
            <Col md={{ span: 3 }}>
              <AppBadge img={`images/julie.jpg`} />
            </Col>
            <Col md={{ span: 3 }}>
              <AppBadge img={`images/julie.jpg`} />
            </Col>
            <Col md={{ span: 3 }}>
              <AppBadge img={`images/julie.jpg`} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="help-row">
        <Col md={{ span: 3, offset: 2 }}>
          <h1>Des questions ? Une urgence ?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className="help-button">
          <AppButton
            text={"Nous contacter"}
            variant="secondary"
            className="question-btn"
          />
        </Col>
      </Row>
    </div>
  );
};

export { Home as default };
