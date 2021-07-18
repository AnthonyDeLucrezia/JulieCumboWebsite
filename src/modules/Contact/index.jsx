import React from "react";
import { Col, Row } from "react-bootstrap";
import ContactForm from "./form.jsx";
import { useTranslation } from "react-i18next";
import MapContainer from "/src/components/googleMaps/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const Contact = () => {
  const { t } = useTranslation();

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  const Infos = () => (
    <div className="w3-padding-48">
      <p>
        <FontAwesomeIcon icon={faClock} /> Horaire consultations :
      </p>
      <div className="infos">
        <p>Lundi : 8h30 à 13h00 / 14h00 à 18h30</p>
        <p>Mardi : Fermé</p>
        <p>Mecredi : 8h30 à 14h30</p>
        <p>Jeudi : 8h30 à 13h00 / 14h00 à 18h30</p>
        <p>Vendredi : 8h30 à 16h30</p>
      </div>
      <div>
        <p className="w3-padding-12">
          <FontAwesomeIcon icon={faEnvelope} /> info@jcortho.com
        </p>
        <p className="w3-padding-12">
          <FontAwesomeIcon icon={faPhoneAlt} /> 065/47.59.96
        </p>
        <p className="w3-padding-12">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Chasse de Saint-Ghislain
          24,7300 Boussu
        </p>
      </div>
    </div>
  );

  const Map = () => (
    <div className="w3-center w3-container googleMap">
      <MapContainer />
    </div>
  );

  return (
    <div className="contact-container w3-content">
      <Row className="contact-title w3-padding-16">
        <Col>
          <h1>{t("contact.title")}</h1>
        </Col>
      </Row>
      <div className="w3-content">
        <div class="w3-center">
          <ColoredLine />
          <div>
            <span className="social-header-icon-fb">
              <a href="https://www.facebook.com/cabinetjcortho" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
              </a>
            </span>
            <span className="social-header-icon-instagram">
              <a href="https://www.instagram.com/jcortho/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </span>
          </div>
          <ColoredLine />
        </div>
        <ContactForm />
        <Row>
          <Col>
            <Infos />{" "}
          </Col>
          <Col className="maps-container">
            {" "}
            <Map />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { Contact as default };
