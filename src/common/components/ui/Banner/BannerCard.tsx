import React from "react";
import { Image, Col, Row } from "react-bootstrap";
import Title from "../Title/Title";

interface BannerCardProps {
  title: string;
  description: any;
  image: any;
}

const BannerCard: React.FunctionComponent<BannerCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Row className="banner">
      <Col  className="banner__text-box">
        <Title className="banner__text-box--title">{title}</Title>
        <p className="banner__text-box--description">{description}</p>
      </Col>
      <Col className="banner__image-box">
        <Image className="banner__image-box--image" src={image} />
      </Col>
    </Row>
  );
};

export default BannerCard;
