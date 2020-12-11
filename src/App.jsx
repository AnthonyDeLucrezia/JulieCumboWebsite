import React from "react";
import AppHeader from "./components/header/index.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./modules/Home/index.jsx";
import Contact from "./modules/Contact/index.jsx";
import Team from "./modules/Team/index.jsx";
import Treatments from "./modules/Treatments/index.jsx";
import Blog from "./modules/Blog/index.jsx";
import FAQ from "./modules/FAQ/index.jsx";
import AppFooter from "./components/footer/index.jsx";
import "./styles/global.scss";

export const menu = [
  { title: "Accueil", link: "/home", component: <Home /> },
  { title: "Equipe", link: "/team", component: <Team /> },
  { title: "Traitements", link: "/treatments", component: <Treatments /> },
  { title: "Blog", link: "/blog", component: <Blog /> },
  { title: "F.A.Q", link: "/faq", component: <FAQ /> },
  { title: "Contact", link: "/contact", component: <Contact /> },
];

const App = () => (
  <Router>
    <AppHeader />
    <Container fluid className="app-content-container">
      <Switch>
        {menu.map((x) => {
          return <Route path={x.link}>{x.component}</Route>;
        })}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
    <AppFooter />
  </Router>
);

export { App as default };
