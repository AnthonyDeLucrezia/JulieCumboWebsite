import React from "react";
import "./index.scss";

const AppTitle = (props) => {
  return (
    <div className="app-title">
      <h1>{props.children}</h1>
    </div>
  );
};

export { AppTitle as default };
