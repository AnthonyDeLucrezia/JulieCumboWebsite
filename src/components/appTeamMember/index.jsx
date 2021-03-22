import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";

const AppTeamMember = (props) => {
  const { t } = useTranslation();
  const { className, img, title, subTitle, description } = props;
  const [displayDesc, setDisplayDesc] = useState(false);

  let badgeClassName = "app-team-container";

  if (className) badgeClassName = `${badgeClassName} ${className}`;

  const onClick = () => {
    setDisplayDesc(!displayDesc);
  };

  return (
    <div className={badgeClassName}>
      <div className="team-header">
        <div className="team-img-container">
          <img src={img} alt="team-member" />
        </div>
        <div className="team-title-container">
          {title && <div className="team-title">{title}</div>}
          {subTitle && <div className="team-subtitle">{subTitle}</div>}
        </div>
        <div className="team-btn-container">
          <span onClick={onClick}>
            <FontAwesomeIcon icon={faEye} size="lg" />
            {displayDesc ? t("team.buttonMoins") : t("team.buttonPlus")}
          </span>
        </div>
      </div>
      {displayDesc && (
        <div className="team-body">
          {description && <p className="team-desc">{description}</p>}
        </div>
      )}
    </div>
  );
};

export { AppTeamMember as default };
