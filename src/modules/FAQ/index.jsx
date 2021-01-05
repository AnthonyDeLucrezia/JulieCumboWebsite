import React from "react";
import { Row, Col } from "react-bootstrap";
import AppAccordion from "./../../components/accordion/index.jsx";
import { useTranslation } from "react-i18next";
import "./index.scss";

const FAQ = () => {
  const { t } = useTranslation();
  const questions = t("faq.questions");

  return (
    <div className={"faq-container"}>
      <Row className="faq-title">
        <Col>
          <h1>{t("faq.title")}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="faq-descritpion">{t("faq.description")}</p>
        </Col>
      </Row>
      <Row>
        <Col className="questions-container">
          <AppAccordion
            rows={questions.map((x, index) => ({
              title: x.title,
              key: index.toString(),
              content: x.response,
            }))}
          />
        </Col>
      </Row>
    </div>
  );
};

export { FAQ as default };
