import { Card, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const AccordionCard = (props) => {
  const { title, content, cardKey, className } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className={className}>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={cardKey}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h5>
            <FontAwesomeIcon icon={isOpen ? faMinusSquare : faPlusSquare} />{" "}
            {title}
          </h5>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={cardKey}>
        <Card.Body>
          <p className="content">{content}</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export { AccordionCard as default };
