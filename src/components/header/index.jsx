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
      className="justify-content-center app-header"
    >
      {menu.map((x) => {
        return (
          <Nav.Item>
            <Nav.Link key={x.link} href={x.link}>
              {x.title}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export { AppHeader as default };
