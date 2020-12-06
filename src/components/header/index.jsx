import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import { menu } from "./../../App.jsx";
import "./index.scss";

const AppHeader = () => {
  const [activeKey, setActiveKey] = useState("home");

  return (
    <Nav
      activeKey={activeKey}
      onSelect={(selectedKey) => setActiveKey(selectedKey)}
      className="app-header"
    >
      <Nav.Item>
        <Nav.Link key={"logo"} href={"/"}>
          <img className="img-logo" src={`images/logo.png`} alt="logo" />
        </Nav.Link>
      </Nav.Item>
      <div className="app-home-title">
        <h1>Julie Cumbo</h1>
      </div>
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
  );
};

export { AppHeader as default };
