import React from "react";
import { Row, Col } from "react-bootstrap";
import AppTreatment from "./../../components/AppTreatment/index.jsx";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Treatments = () => {
  const { t } = useTranslation();
  const treatment = t("treatments.treatments");

  return (
    <div className={"treatments-container"}>
      <Row className="treatments-title w3-padding-16">
        <Col>
          <h1>{t("treatments.title")}</h1>
        </Col>
      </Row>
      {treatment.map((x) => (
          <Row className={"treatments-list"}>
              <Col md={{ span: 12 }} sm={{ span: 12 }}>
              <AppTreatment
              img={x.img}
              title={x.title}
              description={x.description}
            />
            </Col>
          </Row>
            
      ))}
    </div>
  );
};

export { Treatments as default };
