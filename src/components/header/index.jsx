import { Nav } from "react-bootstrap";

import SocialHeader from "./socialHeader.jsx";
import LogoHeader from "./logoHeader.jsx";
import React, { useState } from "react";
import { menu } from "./../../App.jsx";
import "./index.scss";

const AppHeader = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <div className="app-header">
      <SocialHeader />
      <LogoHeader />
      <Nav
        activeKey={activeKey}
        onSelect={(selectedKey) => setActiveKey(selectedKey)}
        className="app-nav"
      >
        <div className="menu-items">
          {menu.map((x) => {
            return (
              <Nav.Item>
                <Nav.Link key={x.link} href={x.link}>
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
