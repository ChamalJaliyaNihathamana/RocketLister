import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhotoCarousel from "../../../common/components/ui/Carousel/Carousel";
import Title from "../../../common/components/ui/Title/Title";

interface PackageProps {}

const Package: React.FunctionComponent<PackageProps> = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>Most Popular Add On</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title>Photos & Marketing Package</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <PhotoCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default Package;
