import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const AppFooter = () => {
  return (
    <Row className="app-footer">
      <Col md={{ span: 3, offset: 1 }}>
        <div className="app-footer-links"></div>
      </Col>
      <Col md={{ span: 3 }}>
        <div className="app-footer-hours"></div>
      </Col>
      <Col md={{ span: 3 }}>
        <div className="app-footer-contact"></div>
      </Col>
    </Row>
  );
};

export { AppFooter as default };
