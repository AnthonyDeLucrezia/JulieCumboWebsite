import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const Treatments = () => {
  return (
    <div className={"treatments-container"}>
      <Row className="treatments-title">
        <Col>
          <h1>Nos traitements</h1>
        </Col>
      </Row>
    </div>
  );
};

export { Treatments as default };
