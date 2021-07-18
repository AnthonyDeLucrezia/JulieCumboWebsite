import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import AppPagination from "./../../components/pagination/index.jsx";
import AppAccordion from "./../../components/accordion/index.jsx";
import { useTranslation } from "react-i18next";
import "./index.scss";

const FAQ = () => {
  const { t } = useTranslation();
  const nbrItemsPerPage = 5;
  const [rows, setRows] = useState([]);
  const [pages, setPages] = useState([]);
  const questions = t("faq.questions");

  useEffect(() => {
    const nbrPages = Math.round(questions.length / 5);
    const pageArr = [];
    for (let i = 0; i < nbrPages; i++) {
      pageArr.push(i + 1);
    }
    setPages(pageArr);
    setRows(
      questions.slice(0, nbrItemsPerPage).map((x, index) => ({
        title: x.title,
        key: index.toString(),
        content: x.response,
      }))
    );
  }, []);

  const onPageChange = (page) => {
    const oldPage = page - 1 > 0 ? page - 1 : 0;
    setRows(
      questions
        .slice(oldPage * nbrItemsPerPage, page * nbrItemsPerPage)
        .map((x, index) => ({
          title: x.title,
          key: index.toString(),
          content: x.response,
        }))
    );
  };

  return (
    <div className={"faq-container"}>
      <Row className="faq-title w3-padding-16">
        <Col>
          <h1>{t("faq.title")}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="questions-container">
          <AppAccordion rows={rows} />
        </Col>
      </Row>
      <div className="question-pagination-container">
        <AppPagination items={pages} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export { FAQ as default };
