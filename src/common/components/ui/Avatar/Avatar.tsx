import React from "react";
import { Col, Figure, Row } from "react-bootstrap";

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
    <Row className="avatar">
      <Col xs={3} className="avatar__image-box">
        <Figure>
          <Figure.Image className="avatar__image" alt={name} src={image} />
        </Figure>
      </Col>
      <Col xs={9} className="avatar__text-box">
        <h1 className="avatar__text-box--avatar-name">{name}</h1>
        <h1 className="avatar__text-box--logo">{logo}</h1>
        <p className="avatar__text-box--org">
          <strong>Killer</strong>Williams
        </p>
      </Col>
    </Row>
  );
};

export default Avatar;
