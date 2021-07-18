import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import { useTranslation } from "react-i18next";


const LogoHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="logo-header">
      <div className="logo-item">
        <img className="img-logo" src={`images/logo.png`} alt="logo" />
      </div>
      <div className="contact-items">
        <div className="contact-col">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </div>
          <div className="contact-text">
            <h5>Appelez-nous</h5>
            <span>{t("infos.phone")}</span>
          </div>
        </div>
        <div className="contact-col">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faAt} />
          </div>
          <div className="contact-text">
            <h5>Ecrivez-nous</h5>
            <span>{t("infos.email")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogoHeader as default };
