import Accordion from "react-bootstrap/Accordion";
import AccordionCard from "./accordionCard.jsx";
import "./index.scss";
import React, { useState } from "react";

const AppAccordion = (props) => {
  const { rows } = props;
  const [activeKey, setActiveKey] = useState(undefined);

  return (
    <Accordion className="accordion-list" activeKey={activeKey}>
      {rows.map((x) => {
        return (
          <AccordionCard
            title={x.title}
            content={x.content}
            cardKey={x.key}
            onClick={() => setActiveKey(x.key)}
            className="accordion-card"
          />
        );
      })}
    </Accordion>
  );
};

export { AppAccordion as default };
