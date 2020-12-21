import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import React from "react";

const AccordionCard = (props) => {
  const { title, content } = props;

  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          {title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>{content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export { AccordionCard as default };
