import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Treatments = () => {
  const { t } = useTranslation();
  return (
    <div className={"treatments-container"}>
      <Row className="treatments-title">
        <Col>
          <h1>{t("treatments.title")}</h1>
        </Col>
      </Row>
      <div className="w3-content">
      <Row className="w3-padding-48">
        <Col className="test">PHOTO</Col>
        <Col xs={10} className="test2">TEXT</Col>
      </Row>
      <Row>
        <Col className="test">PHOTO</Col>
        <Col className="test2">TEXT</Col>
      </Row>
      </div>
    </div>
  );
};

export { Treatments as default };
