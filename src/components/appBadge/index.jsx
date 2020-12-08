import React from "react";
import "./index.scss";

const AppBadge = (props) => {
  const { className, img } = props;

  return (
    <div className={`app-badge-container ${className}`}>
      <img src={img} alt="badge" />
      <div className="badge-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  );
};

export { AppBadge as default };
