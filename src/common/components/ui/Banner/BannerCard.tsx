import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";

interface BannerCardProps {
  title: string;
  description: string;
  image: any;
}

const BannerCard: React.FunctionComponent<BannerCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Title name={title} type="banner" />
          <p>{description}</p>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={image} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerCard;
