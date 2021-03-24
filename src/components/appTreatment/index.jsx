import React from "react";
import "./index.scss";
import "/src/styles/w3-style.scss";

const AppTreatment = (props) => {
        const { className, img, title, description } = props;
      
        let badgeClassName = "app-treatment-container";
      
        if (className) badgeClassName = `${badgeClassName} ${className}`;
      
        return (
            <div className={badgeClassName}>
                <div className="w3-row">
                    <div className="w3-half">
                        <img src={img} alt="treatment-img" />
                    </div>
                    <div className="w3-half w3-padding-large">
                        {title && <h4 className="treatment-title w3-padding-24 center">{title}</h4>}
                        {description && <div className="treatment-desc center">{description}</div>}
                    </div>
                </div>
            </div>
            );
        };
      
    export { AppTreatment as default };