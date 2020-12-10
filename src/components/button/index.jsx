import { Button } from "react-bootstrap";
import React from "react";
import "./index.scss";

const AppButton = (props) => {
  const { onClick, text, variant, className } = props;

  return (
    <Button
      className={className}
      variant={variant ? variant : "primary"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export { AppButton as default };
