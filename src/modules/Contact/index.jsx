import "./index.scss";
import React from "react";
import { Form,Button,Container,Col,Row } from "react-bootstrap";

const FormContact = () =>
(
  <div>
      <h3 className="w3-wide w3-margin-bottom-32">CONTACTEZ-NOUS</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSurname">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridBirthdate">
            <Form.Label>Date de naissance</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="tel"/>
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="forGridMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit" block>Submit</Button>
      </Form>
    </div>
);

const Infos = () =>
(
  <div className="w3-padding-48">
      <h3 className="w3-wide w3-margin-bottom-32">INFOS PRATIQUES</h3>
      <Container>
      <Row className="w3-row-padding">
        <Col>
          <p>E-mail :</p>
          <p>Téléphone : </p>
          <p>Adresse :</p>
        </Col>
        <Col>
          <p>Lundi : 08:00 - 17:00</p>
          <p>Mardi : 08:00 - 17:00</p>
          <p>Mercredi : 08:00 - 17:00</p>
          <p>Jeudi : 08:00 - 17:00</p>
          <p>Vendredi : 08:00 - 17:00</p>
        </Col>
      </Row>
    </Container>
  </div>
);

const Contact = () => {
  return (
    <> 
      <div className="w3-padding-48 w3-content w3-center">
        <FormContact />
        <Infos />
      </div>
    </>
  );
};

export { Contact as default };
