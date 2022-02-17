import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

interface AvatarProps {
  image: string;
  logo: string;
  name: string;
}

const Avatar: React.FunctionComponent<AvatarProps> = ({
  image,
  logo,
  name,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Figure>
            <Figure.Image width={160} max-height={160} alt={name} src={image} />
          </Figure>
        </Col>
        <Col>
          <h1>Hello {name}</h1>
          <h1>{logo}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Avatar;
