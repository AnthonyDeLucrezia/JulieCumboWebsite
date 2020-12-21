import Accordion from "react-bootstrap/Accordion";
import AccordionCard from "./accordionCard.jsx";
import React from "react";

const AppAccordion = (props) => {
  const { rows } = props;

  return (
    <Accordion defaultActiveKey="0">
      {rows.map((x) => {
        return (
          <AccordionCard title={x.title} content={x.content} key={x.key} />
        );
      })}
    </Accordion>
  );
};

export { AppAccordion as default };
