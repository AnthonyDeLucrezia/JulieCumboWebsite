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
            <ul className="span-links">
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
        <div className="app-footer-links">
            <span className="footer-title">Contact</span>
            <ul>
              <li>
                <span>065/47.59.96</span>
              </li>
              <li>
                <span>info@jcortho.com</span>
              </li>
              <li>
                <span>Chasse de Saint-Ghislain 24,7300 Boussu</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={{ span: 3 }} className="app-footer-col">
          <div className="app-footer-links">
            <span className="footer-title">Horaire secrétariat</span>
            <ul>
              <li>
                <span>Lu, Ma, Je : 8h30 à 13h00 / 14h00 à 17h00</span>
              </li>
              <li>
                <span>Me : 8h30 à 14h00</span>
              </li>
              <li>
                <span>Ve : 8h30 à 13h00 / 14h00 à 16h00</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { AppFooter as default };
