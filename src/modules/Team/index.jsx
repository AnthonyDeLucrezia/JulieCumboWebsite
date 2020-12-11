import React from "react";
import { Row, Col } from "react-bootstrap";
import AppBadge from "./../../components/appBadge/index.jsx";
import "./index.scss";

const Team = () => {
  const team = [
    {
      img: `images/tony.jpg`,
      title: "Anthony De Lucrezia",
      subTitle: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, sem non semper hendrerit, nunc massa interdum nibh, vitae congue felis nisl sed augue. Aliquam fringilla libero vel neque varius fringilla. Pellentesque convallis metus a enim finibus elementum et vel dui. Sed quis sem scelerisque, varius odio et, laoreet nisi. Nam dapibus est accumsan ornare elementum. In suscipit leo erat, nec viverra ligula laoreet nec. Vestibulum urna mauris, venenatis vitae dictum vel, pretium eget ante. Nulla sed leo eget nisi aliquet sodales vel non ipsum. Phasellus et mi sit amet sem ornare aliquam eget ut lectus. Praesent ornare euismod massa in sagittis. Aliquam semper, ante ac fermentum feugiat, diam arcu accumsan neque, suscipit rutrum dolor nisl nec magna. Praesent aliquam aliquet lectus vitae interdum.",
    },
    {
      img: `images/fabian.jpeg`,
      title: "Fabian Collier",
      subTitle: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, sem non semper hendrerit, nunc massa interdum nibh, vitae congue felis nisl sed augue. Aliquam fringilla libero vel neque varius fringilla. Pellentesque convallis metus a enim finibus elementum et vel dui. Sed quis sem scelerisque, varius odio et, laoreet nisi. Nam dapibus est accumsan ornare elementum. In suscipit leo erat, nec viverra ligula laoreet nec. Vestibulum urna mauris, venenatis vitae dictum vel, pretium eget ante. Nulla sed leo eget nisi aliquet sodales vel non ipsum. Phasellus et mi sit amet sem ornare aliquam eget ut lectus. Praesent ornare euismod massa in sagittis. Aliquam semper, ante ac fermentum feugiat, diam arcu accumsan neque, suscipit rutrum dolor nisl nec magna. Praesent aliquam aliquet lectus vitae interdum.",
    },
    {
      img: `images/julie.jpg`,
      title: "Julie Cumbo",
      subTitle: "La boss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, sem non semper hendrerit, nunc massa interdum nibh, vitae congue felis nisl sed augue. Aliquam fringilla libero vel neque varius fringilla. Pellentesque convallis metus a enim finibus elementum et vel dui. Sed quis sem scelerisque, varius odio et, laoreet nisi. Nam dapibus est accumsan ornare elementum. In suscipit leo erat, nec viverra ligula laoreet nec. Vestibulum urna mauris, venenatis vitae dictum vel, pretium eget ante. Nulla sed leo eget nisi aliquet sodales vel non ipsum. Phasellus et mi sit amet sem ornare aliquam eget ut lectus. Praesent ornare euismod massa in sagittis. Aliquam semper, ante ac fermentum feugiat, diam arcu accumsan neque, suscipit rutrum dolor nisl nec magna. Praesent aliquam aliquet lectus vitae interdum.",
    },
    {
      img: `images/lechat.jpg`,
      title: "Le chat",
      subTitle: "Il est mignon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, sem non semper hendrerit, nunc massa interdum nibh, vitae congue felis nisl sed augue. Aliquam fringilla libero vel neque varius fringilla. Pellentesque convallis metus a enim finibus elementum et vel dui. Sed quis sem scelerisque, varius odio et, laoreet nisi. Nam dapibus est accumsan ornare elementum. In suscipit leo erat, nec viverra ligula laoreet nec. Vestibulum urna mauris, venenatis vitae dictum vel, pretium eget ante. Nulla sed leo eget nisi aliquet sodales vel non ipsum. Phasellus et mi sit amet sem ornare aliquam eget ut lectus. Praesent ornare euismod massa in sagittis. Aliquam semper, ante ac fermentum feugiat, diam arcu accumsan neque, suscipit rutrum dolor nisl nec magna. Praesent aliquam aliquet lectus vitae interdum.",
    },
    {
      img: `images/roger.jpg`,
      title: "Roger Bigou",
      subTitle: "Un type random",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend, sem non semper hendrerit, nunc massa interdum nibh, vitae congue felis nisl sed augue. Aliquam fringilla libero vel neque varius fringilla. Pellentesque convallis metus a enim finibus elementum et vel dui. Sed quis sem scelerisque, varius odio et, laoreet nisi. Nam dapibus est accumsan ornare elementum. In suscipit leo erat, nec viverra ligula laoreet nec. Vestibulum urna mauris, venenatis vitae dictum vel, pretium eget ante. Nulla sed leo eget nisi aliquet sodales vel non ipsum. Phasellus et mi sit amet sem ornare aliquam eget ut lectus. Praesent ornare euismod massa in sagittis. Aliquam semper, ante ac fermentum feugiat, diam arcu accumsan neque, suscipit rutrum dolor nisl nec magna. Praesent aliquam aliquet lectus vitae interdum.",
    },
  ];

  return (
    <div className={"team-container"}>
      <Row className="team-title">
        <Col>
          <h1>Notre équipe</h1>
        </Col>
      </Row>

      {team.map((x, index) => (
        <Row className={"team-list"}>
          <Col md={{ span: 12 }} className={"team-list-col"}>
            <AppBadge
              img={x.img}
              title={x.title}
              subTitle={x.subTitle}
              description={x.description}
              size="large"
              direction="row"
              imagePosition={index % 2 == 0 ? "left" : "right"}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export { Team as default };
