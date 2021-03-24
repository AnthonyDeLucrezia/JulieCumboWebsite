import React from "react";
import { Row, Col } from "react-bootstrap";
import AppTeamMember from "./../../components/appteamMember/index.jsx";
import { useTranslation } from "react-i18next";
import "./index.scss";

const Team = () => {
  const { t } = useTranslation();
  const team = t("team.team");

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
