import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";


import "./index.scss";

const AppFooter = () => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row className="app-footer">
        <Col md={{ span: 3, offset: 1 }} className="app-footer-col">
          <div className="app-footer-links">
            <span className="footer-title">Liens utiles</span>
            <ul>
              <li key="/home" onClick={() => history.push("/home")}>
                <span>Accueil</span>
              </li>
              <li key="/faq" onClick={() => history.push("/faq")}>
                <span>FAQ</span>
              </li>
              <li key="/contacts" onClick={() => history.push("/contacts")}>
                <span>Contacts</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={{ span: 3 }} className="app-footer-col">
          <div className="app-footer-hours">
            <span className="footer-title">Horaire du secrétariat </span>
            <div className="contact-col">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="contact-text">
                <span>Lun–Ven: 9h00–18h00; Dim: 10h–13h</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={{ span: 3 }} className="app-footer-col">
          <div className="app-footer-contact">
            <span className="footer-title">Contacts</span>
            <div className="contact-col">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="contact-text">
                <span>065 / 47 59 96</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { AppFooter as default };
