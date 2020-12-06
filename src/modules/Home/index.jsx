import React from "react";
import "./index.scss";
import Carousel from "./../../components/carousel/index.jsx";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="app-home-title">
            <h1>JULIE CUMBO</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel />
        </Col>
      </Row>
    </>
  );
};

export { Home as default };
