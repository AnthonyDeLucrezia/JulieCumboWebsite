import React from "react";
import { Row, Col } from "react-bootstrap";
import AppTeamMember from "./../../components/appteamMember/index.jsx";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Team = () => {
  const { t } = useTranslation();
  const team = [
    {
      img: `images/tony.jpg`,
      title: "Julie Cumbo",
      subTitle: "Orthodontiste",
      description:
        "Spécialiste en orthodontie exclusive et fondatrice du cabinet JC Ortho depuis 2008. Votre sourire, votre profil et votre bien être est au cœur de mes préoccupations. Attentive aux évolutions de ma discipline, je m’investis depuis une quinzaine d’années dans ce que la science et la technologie ont de meilleur à offrir. Je m’entoure de spécialistes tels que des stomatologues, chirurgiens maxillo facial, ORL, posturologues, kinésithérapeutes, orthoptistes et logopèdes pour la prise en charge de vos traitements afin de réaliser une orthodontie fonctionnelle optimale. Le domaine des troubles du sommeil chez l’enfant me tient particulièrement à cœur, je reste attentive aux dernières recommandations dans ce domaine. Le sourire et votre bien être restent une priorité.",
    },
    {
      img: `images/fabian.jpeg`,
      title: "Analisa Sorini",
      subTitle: "Logopède",
      description:
        "Spécialisée en thérapie myo-fonctionnelle assure la prise en charge fonctionnelle associée aux traitements orthodontiques.",
    },
    {
      img: `images/julie.jpg`,
      title: "Gwendoline Di Nicolo",
      subTitle: "Assistante dentaire",
      description:
        "Assure la préparation, la désinfection et la stérilisation du matériel et du cabinet. Elle vous rassurera et vous exposera les consignes d’hygiènes et les recommandations pour mener à bien votre traitement.",
    },
    {
      img: `images/lechat.jpg`,
      title: "Anne-Sophie De Weer",
      subTitle: "Secrétaire",
      description:
        " Nos deux secrétaires médicales assurent l’accueil des patients et vous aidera dans vos démarches administratives. Elles assurent votre suivi de dossier mutuelle, assurance et financier.",
    },
    {
      img: `images/roger.jpg`,
      title: "Allison Joniaux",
      subTitle: "Secrétaire",
      description: "",
    },
  ];

  return (
    <div className={"team-container"}>
      <Row className="team-title">
        <Col>
          <h1>{t("team.title")}</h1>
        </Col>
      </Row>

      {team.map((x) => (
        <Row className={"team-list"}>
          <Col md={{ span: 12 }} className={"team-list-col"}>
            <AppTeamMember
              img={x.img}
              title={x.title}
              subTitle={x.subTitle}
              description={x.description}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export { Team as default };
