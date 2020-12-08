import { Button } from "react-bootstrap";
import React from "react";

const AppButton = (props) => {
  const { onClick, text } = props;

  return (
    <Button variant="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export { AppButton as default };
