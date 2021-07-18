import React, { useRef, useEffect } from "react";
import Typed from "./typed.js";
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
      img: `images/julie.png`,
      title: "Julie Cumbo",
      subTitle: "Orthodontiste",
    },
    {
      img: `images/analisa.png`,
      title: "Analisa Sorini",
      subTitle: "Logopède",
    },
    {
      img: `images/liza.png`,
      title: "Liza Bourlard",
      subTitle: "Assisstante dentaire",
    },
    {
      img: `images/anne-sophie.png`,
      title: "Anne-Sophie De Weer",
      subTitle: "Secrétaire",
    }
  ];

  const imageCatalog = [
    {
      img: `images/cabinet1.JPG`,
      description: "Developer",
    },
    {
      img: `images/cabinet2.JPG`,
      description: "Developer",
    },
    {
      img: `images/cabinet3.JPG`,
      description: "La boss",
    },
    {
      img: `images/cabinet4.JPG`,
      description: "Il est mignon",
    },
    {
      img: `images/cabinet5.JPG`,
      description: "Un type random",
    },
    {
      img: `images/cabinet6.JPG`,
      description: "Un type random",
    },
    {
      img: `images/cabinet7.JPG`,
      description: "Il est mignon",
    },
    {
      img: `images/cabinet8.JPG`,
      description: "Un type random",
    },
    {
      img: `images/cabinet9.JPG`,
      description: "Un type random",
    },
    {
        img: `images/cabinet10.JPG`,
        description: "Un type random",
    },
    {
        img: `images/cabinet11.JPG`,
        description: "Un type random",
      },
      {
        img: `images/cabinet12.JPG`,
        description: "Un type random",
      },
      {
        img: `images/cabinet13.JPG`,
        description: "Un type random",
      },
      {
        img: `images/cabinet14.JPG`,
        description: "Un type random",
      },
  ];

  const onTeamClick = () => {
    history.push("/team");
  };

  const onContactClick = () => {
    history.push("/contact");
  };

  const TypedEffect = () => {
    const typeTarget = useRef(null);
    
    useEffect(() => {
      const typed = new Typed(typeTarget.current, {
        strings: ["Confort, souci du travail bien fait et confiance retrouvée, telles sont nos priorités."],
        typeSpeed: 80,
        loop:true,
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    return <span ref={typeTarget} />;
  };

  return (
    <div className={"home-container"}>
      <div className="home-slider">
        <img src={`images/header.jpeg`} alt="First slide" />
        <div className="home-slider-text w3-display-middle w3-center w3-padding-large">
		    <h1>{t("home.slider.title")}</h1>
            <p><TypedEffect/></p>
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
      <Row className="help-row w3-padding-48">
        <Col md={{ span: 4, offset: 2 }}>
          <h2>{t("home.question.title")}</h2>
        </Col>
        <Col md={{ span: 4, offset: 1 }} className="help-button">
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
