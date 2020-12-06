import React from "react";
import "./index.scss";
import Carousel from "./../../components/carousel/index.jsx";
import { Row, Col } from "react-bootstrap";
import AppTitle from "./../../components/title/index.jsx";

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <Carousel />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppTitle>bonjour</AppTitle>
        </Col>
      </Row>
    </>
  );
};

export { Home as default };
