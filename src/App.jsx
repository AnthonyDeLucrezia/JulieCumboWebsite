import React from "react";
import AppHeader from "./components/header/index.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./modules/Home/index.jsx";
import Contact from "./modules/Contact/index.jsx";
import "./styles/global.scss";

export const menu = [
  { title: "Home", link: "/home", component: <Home /> },
  { title: "Contact", link: "/contact", component: <Contact /> },
];

const App = () => (
  <Router>
    <AppHeader />
    <Container fluid className="app-container">
      <Switch>
        {menu.map((x) => {
          return <Route path={x.link}>{x.component}</Route>;
        })}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  </Router>
);

export { App as default };
