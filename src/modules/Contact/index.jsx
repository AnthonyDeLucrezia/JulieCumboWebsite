import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import MapContainer from "/src/components/googleMaps/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const FormContact = () => (
  <div className="w3-padding-48">
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nom patient</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridSurname">
          <Form.Label>Prénom patient</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridBirthdate">
          <Form.Label>Date de naissance patient</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="tel" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridSubject">
        <Form.Label>Objet</Form.Label>
        <Form.Control as="select">
          <option>Urgence</option>
          <option>Nouveau patient</option>
          <option>Modifier / Ajouter RDV</option>
          <option>Fournisseur</option>
          <option>Autres</option>
        </Form.Control>
      </Form.Group>

      <Form.Label>Message</Form.Label>
      <Form.Group controlId="forGridMessage">
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Envoyer
      </Button>
    </Form>
  </div>
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
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Chasse de Saint-Ghislain 24,
        7300 Boussu{" "}
      </p>
    </div>
  </div>
);

const Map = () => (
  <div className="w3-center w3-container googleMap">
    <MapContainer />
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-container">
      <Row className="contact-title">
        <Col>
          <h1>{t("contact.title")}</h1>
        </Col>
      </Row>
      <div className="w3-content">
        <FormContact />
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
