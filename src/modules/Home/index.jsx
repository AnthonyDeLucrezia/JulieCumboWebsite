import React from "react";
import "./index.scss";
import AppButton from "./../../components/button/index.jsx";
import AppBadge from "./../../components/appBadge/index.jsx";
import ImageCatalog from "../../components/imageCatalog/index.jsx";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const team = [
    {
      img: `images/tony.jpg`,
      title: "Julie Cumbo",
      subTitle: "Orthodontiste",
    },
    {
      img: `images/fabian.jpeg`,
      title: "Analisa Sorini",
      subTitle: "Logopède",
    },
    {
      img: `images/julie.jpg`,
      title: "Gwendoline Di Nicolo",
      subTitle: "Assisstante dentaire",
    },
    {
      img: `images/lechat.jpg`,
      title: "Anne-Sophie De Weer",
      subTitle: "Secrétaire",
    },
    {
      img: `images/allison.jpg`,
      title: "Allison Joniaux",
      subTitle: "Secrétaire",
    },
  ];

  const imageCatalog = [
    {
      img: `images/img1.jpeg`,
      description: "Developer",
    },
    {
      img: `images/img2.jpeg`,
      description: "Developer",
    },
    {
      img: `images/img3.jpeg`,
      description: "La boss",
    },
    {
      img: `images/img4.jpeg`,
      description: "Il est mignon",
    },
    {
      img: `images/img5.jpeg`,
      description: "Un type random",
    },
    {
      img: `images/img6.jpg`,
      description: "Un type random",
    },
    {
      img: `images/img7.jpg`,
      description: "Il est mignon",
    },
    {
      img: `images/img8.jpg`,
      description: "Un type random",
    },
    {
      img: `images/img9.jpg`,
      description: "Un type random",
    },
  ];

  const onTeamClick = () => {
    history.push("/team");
  };

  const onContactClick = () => {
    history.push("/contact");
  };

  return (
    <div className={"home-container"}>
      <div className="home-slider">
        <img src={`images/pexels-evg-culture-1170979.jpg`} alt="First slide" />
        <div className="home-slider-content">
          <div className="home-slider-text">
            <div>
              <h1>{t("home.slider.title")}</h1>
              <p>{t("home.slider.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>
      <Row className="home-about-us">
        <Col md={{ span: 4, offset: 2 }} className="cabinet-text">
          <h1>{t("home.cabinet.title")}</h1>
          <blockquote class="home-quote">
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} size="lg" /> {t("home.cabinet.description")}
            </p>
          </blockquote>
        </Col>
        <Col md={{ span: 4 }}>
          <img src={`images/map.png`} alt="First slide" className={"img-map"} />
        </Col>
      </Row>
      <Row className="help-row">
        <Col md={{ span: 3, offset: 2 }}>
          <h1>{t("home.question.title")}</h1>
        </Col>
        <Col md={{ span: 3, offset: 1 }} className="help-button">
          <AppButton
            text={t("home.question.button")}
            variant="secondary"
            className="question-btn"
            onClick={onContactClick}
          />
        </Col>
      </Row>

      <Row className="team-row">
        <Col>
          <Row>
            <Col>
              <h1>{t("home.team.title")}</h1>
            </Col>
          </Row>
          <Row className="team-list">
            <Col>
              <Row>
                <Col>
                  <div className="teams-flex">
                    {team.map((x) => (
                      <AppBadge
                        img={x.img}
                        title={x.title}
                        subTitle={x.subTitle}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="team-btn-col">
                  <AppButton
                    text={t("home.team.button")}
                    variant="primary"
                    onClick={onTeamClick}
                    className="team-btn"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="offices-row">
        <Col>
          <Row>
            <Col>
              <h1>{t("home.office.title")}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ImageCatalog images={imageCatalog} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export { Home as default };
