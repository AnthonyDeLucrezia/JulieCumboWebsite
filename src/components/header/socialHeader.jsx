import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

const SocialHeader = () => {
  return (
    <div className="social-header">
      <div className="social-header-icon">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </div>
      <div className="social-header-icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div className="social-header-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export { SocialHeader as default };
