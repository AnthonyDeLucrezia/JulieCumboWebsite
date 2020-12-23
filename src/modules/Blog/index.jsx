import React from "react";
import InstaFeed from "./../../components/instaFeed/index.jsx";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <div className={"blog-container"}>
      <Row className="blog-title">
        <Col>
          <h1>{t("blog.title")}</h1>
        </Col>
      </Row>
      <InstaFeed />
    </div>
  );
};

export { Blog as default };
