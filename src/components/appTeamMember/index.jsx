import React from "react";
import "./index.scss";

const AppTeamMember = (props) => {
  const { className, img, title, subTitle, description } = props;

  let badgeClassName = "app-team-container";

  if (className) badgeClassName = `${badgeClassName} ${className}`;

  return (
    <div className={badgeClassName}>
      <div className="team-img-container">
        <img src={img} alt="team-member" />
      </div>
      <div className="team-body">
        {title && <div className="team-title">{title}</div>}
        {subTitle && <div className="team-subtitle">{subTitle}</div>}
        {description && <div className="team-desc">{description}</div>}
      </div>
    </div>
  );
};

export { AppTeamMember as default };
