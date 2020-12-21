import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const FAQ = () => {
  return (
    <div className={"faq-container"}>
      <Row className="faq-title">
        <Col>
          <h1>F.A.Q</h1>
        </Col>
      </Row>
    </div>
  );
};

export { FAQ as default };
