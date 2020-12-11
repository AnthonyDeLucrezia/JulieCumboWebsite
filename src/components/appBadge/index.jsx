import React from "react";
import "./index.scss";

const AppBadge = (props) => {
  const {
    className,
    img,
    title,
    subTitle,
    description,
    size,
    direction,
    imagePosition,
  } = props;

  let badgeClassName = "app-badge-container";

  if (direction && direction === "row")
    badgeClassName = `${badgeClassName} app-badge-container-row`;
  if (className) badgeClassName = `${badgeClassName} ${className}`;
  if (size && size === "large")
    badgeClassName = `${badgeClassName} app-badge-large`;

  if (direction && imagePosition && imagePosition === "right") {
    badgeClassName = `${badgeClassName} app-badge-img-right`;
    return (
      <div className={badgeClassName}>
        <div className="badge-body">
          {description && <div className="badge-desc">{description}</div>}
        </div>
        <div className="badge-header">
          <img src={img} alt="badge" />
          {title && <div className="badge-title">{title}</div>}
          {subTitle && <div className="badge-subtitle">{subTitle}</div>}
        </div>
      </div>
    );
  }

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
