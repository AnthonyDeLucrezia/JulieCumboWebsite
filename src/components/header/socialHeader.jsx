import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./index.scss";

const SocialHeader = () => {
  return (
    <div className="social-header w3-padding-16">
      <div className="social-header-icon-fb">
      <a href="https://www.facebook.com/cabinetjcortho" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /></a>
      </div>
      <div className="social-header-icon-instagram">
      <a href="https://www.instagram.com/jcortho/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
      </div>
    </div>
  );
};

export { SocialHeader as default };
