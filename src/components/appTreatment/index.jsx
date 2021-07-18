import React from "react";
import { useTranslation } from "react-i18next";

import "./index.scss";

const AppTreatment = (props) => {
  const { t } = useTranslation();
  const { className, img, title, description } = props;

  let badgeClassName = "app-treatment-container";

  if (className) badgeClassName = `${badgeClassName} ${className}`;

  return (
    <div className={badgeClassName}>
        <div className="treatment-content">
            <div className="treatment-img-container">
                <img src={img} alt="treatment-img" />
            </div>
            <div className="treatment-test">
            <div className="treatment-title-container">
                {title && <div className="treatment-title">{title}</div>}
            </div>
            <div className="treatment-body">
                {description && <p className="treatment-desc">{description}</p>}
            </div>
            </div>
        </div>
    </div>
  );
};

export { AppTreatment as default };
