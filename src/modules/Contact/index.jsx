import "./index.scss";
import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import MapContainer from "/src/components/googleMaps/index.jsx";

const FormContact = () => (
  <div className="w3-padding-48">
    <h4 className="w3-wide w3-margin-bottom-32 w3-center">CONTACTEZ-NOUS</h4>
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

      <Form.Group controlId="forGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  </div>
);

const Infos = () => (
  <div className="w3-padding-48">
    <h3 className="w3-wide w3-margin-bottom-32 w3-center">INFOS PRATIQUES</h3>
    <Container>
      <Row className="w3-row-padding">
        <Col>
          <p>E-mail :</p>
          <p>Téléphone : </p>
          <p>Adresse :</p>
        </Col>
        <Col>
          <p>Lundi : 08:30 - 17:00</p>
          <p>Mardi : Fermé</p>
          <p>Mercredi : 08:30 - 13:00</p>
          <p>Jeudi : 08:30 - 17:00</p>
          <p>Vendredi : 08:30 - 16:30</p>
        </Col>
      </Row>
    </Container>
  </div>
);

const Map = () => (
  <div className="w3-center w3-content w3-container googleMap">
    <MapContainer />
  </div>
);

const Contact = () => (
  <div className="w3-padding-48 w3-content maps-container">
    <FormContact />
    <Infos />
    <Map />
  </div>
);

export { Contact as default };
