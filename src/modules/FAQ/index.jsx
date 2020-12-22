import React from "react";
import { Row, Col } from "react-bootstrap";
import AppAccordion from "./../../components/accordion/index.jsx";
import "./index.scss";

const FAQ = () => {
  const questions = [
    {
      title: "Envie d'une petite bière ?",
      key: "1",
      content:
        "Suspendisse rhoncus magna nec lacinia maximus. Fusce sed leo sem. Nunc ullamcorper erat molestie leo sollicitudin, vitae elementum velit tincidunt. Morbi nulla mauris, rhoncus in mi at, luctus lobortis mi. Praesent iaculis metus purus, a dapibus magna sollicitudin id.",
    },
    {
      title: "Une deuxième ?",
      key: "2",
      content:
        "Suspendisse rhoncus magna nec lacinia maximus. Fusce sed leo sem. Nunc ullamcorper erat molestie leo sollicitudin, vitae elementum velit tincidunt. Morbi nulla mauris, rhoncus in mi at, luctus lobortis mi. Praesent iaculis metus purus, a dapibus magna sollicitudin id.",
    },
    {
      title: "Dernière pour la route ?",
      key: "3",
      content:
        "Suspendisse rhoncus magna nec lacinia maximus. Fusce sed leo sem. Nunc ullamcorper erat molestie leo sollicitudin, vitae elementum velit tincidunt. Morbi nulla mauris, rhoncus in mi at, luctus lobortis mi. Praesent iaculis metus purus, a dapibus magna sollicitudin id.",
    },
  ];
  return (
    <div className={"faq-container"}>
      <Row className="faq-title">
        <Col>
          <h1>F.A.Q</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="faq-descritpion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            sagittis consequat lacus. Curabitur mauris tellus, congue et aliquam
            nec, faucibus non sapien. Cras id sem lobortis, consequat lacus at,
            vestibulum massa. Proin sit amet elit quis augue posuere gravida.
            Nunc et dignissim eros. Duis euismod non sapien et placerat.
            Pellentesque viverra augue a mi iaculis auctor.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="questions-container">
          <AppAccordion rows={questions} />
        </Col>
      </Row>
    </div>
  );
};

export { FAQ as default };
