import React from "react";
import "./index.scss";

const AppBadge = (props) => {
  const { className, img, title, subTitle, description, size } = props;

  let badgeClassName = "app-badge-container";

  if (className) badgeClassName = `${badgeClassName} ${className}`;
  if (size && size === "large")
    badgeClassName = `${badgeClassName} app-badge-large`;

  return (
    <div className={badgeClassName}>
      <div className="badge-header">
        <img src={img} alt="badge" />
        {title && <div className="badge-title">{title}</div>}
        {subTitle && <div className="badge-subtitle">{subTitle}</div>}
      </div>
      <div className="badge-body">
        {description && <div className="badge-desc">{description}</div>}
      </div>
    </div>
  );
};

export { AppBadge as default };
