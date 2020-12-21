import React from "react";
import InstaFeed from "./../../components/instaFeed/index.jsx";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const Blog = () => {
  return (
    <div className={"blog-container"}>
      <Row className="blog-title">
        <Col>
          <h1>Blog</h1>
        </Col>
      </Row>
      <InstaFeed />
    </div>
  );
};

export { Blog as default };
