import React from "react";
import "./index.scss";

const AppBadge = (props) => {
  const { className, img, name, description } = props;

  return (
    <div className={`app-badge-container ${className}`}>
      <img src={img} alt="badge" />
      <div className="badge-name">{name}</div>
      <div className="badge-desc">{description}</div>
    </div>
  );
};

export { AppBadge as default };
