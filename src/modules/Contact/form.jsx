import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./index.scss";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    console.log(event.target["formGridSurname"].value);
    event.stopPropagation();
    setValidated(false);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "anthony",
        email: "delucrezia.anthony@gmail.com",
      }),
    };

    fetch("http://localhost:81/index.php", requestOptions)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <div className="w3-padding-48">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Nom patient</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridSurname">
            <Form.Label>Prénom patient</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridBirthdate">
            <Form.Label>Date de naissance patient</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control type="tel" required />
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
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Envoyer
        </Button>
      </Form>
    </div>
  );
};

export { ContactForm as default };
