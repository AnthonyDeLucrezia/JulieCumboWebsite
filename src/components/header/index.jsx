import { Nav, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { menu } from "./../../App.jsx";
import "./index.scss";

const AppHeader = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <Nav
      activeKey={activeKey}
      onSelect={(selectedKey) => setActiveKey(selectedKey)}
      className="app-header"
    >
      <Row className="header-row">
        <Col xs={3}>
          <Nav.Item>
            <Nav.Link key={"logo"} href={"/"}>
              <img className="img-logo" src={`images/logo.png`} alt="logo" />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={6}>
          <div className="menu-items">
            {menu.map((x) => {
              return (
                <Nav.Item>
                  <Nav.Link key={x.link} href={x.link}>
                    {x.title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </div>
        </Col>
        <Col xs={3}>
          <div className="social-header">
            <div className="social-header-icon">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
            <div className="social-header-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="social-header-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </Col>
      </Row>
    </Nav>
  );
};

export { AppHeader as default };
