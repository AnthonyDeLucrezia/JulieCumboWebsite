import { Nav } from "react-bootstrap";

import SocialHeader from "./socialHeader.jsx";
import LogoHeader from "./logoHeader.jsx";
import React, { useState, useEffect } from "react";
import { menu } from "./../../App.jsx";
import { useHistory } from "react-router-dom";
import "./index.scss";

const AppHeader = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState("/home");

  useEffect(() => {
    history.push(activeKey);
  }, [activeKey]);

  return (
    <div className="app-header">
      <SocialHeader />
      <LogoHeader />
      <Nav className="app-nav">
        <div className="menu-items">
          {menu.map((x) => {
            return (
              <Nav.Item>
                <Nav.Link
                  key={x.link}
                  onClick={() => setActiveKey(x.link)}
                  className={activeKey === x.link && "activeKey"}
                >
                  {x.title}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </div>
      </Nav>
    </div>
  );
};

export { AppHeader as default };
