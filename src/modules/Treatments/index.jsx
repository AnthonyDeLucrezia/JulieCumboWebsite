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
    </div>
  );
};

export { Treatments as default };
