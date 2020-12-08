import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";

const LogoHeader = () => {
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
            <h5>Call us today</h5>
            <span>555–123–2323</span>
          </div>
        </div>
        <div className="contact-col">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="contact-text">
            <h5>Opening hours</h5>
            <span>Mon–Fri: 9am–6pm; Sun: 10am–1pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogoHeader as default };
