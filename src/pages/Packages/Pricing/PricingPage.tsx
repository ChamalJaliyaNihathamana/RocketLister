import { Container } from "@mui/material";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import CustomButton from "../../../common/components/ui/Button/CustomButton";
import PricingCard from "../../../common/components/ui/PricingCard/PricingCard";
import Title from "../../../common/components/ui/Title/Title";

interface PricingPageProps {}

interface PricingPageState {
  pricing: {
    heading: string;
    subheading: string;
    price: number;
    saving: number;
    features: string[];
    button: any;
  }[];
}

class PricingPage extends React.Component<PricingPageProps, PricingPageState> {
  state = {
    pricing: [
      {
        heading: "The Premier",
        subheading: "starting at",
        price: 160,
        saving: 75,
        features: [
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
        ],
        button: (
          <React.Fragment>
            <CustomButton>Select</CustomButton>
          </React.Fragment>
        ),
      },
      {
        heading: "The Premier",
        subheading: "starting at",
        price: 160,
        saving: 75,
        features: [
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
        ],
        button: (
          <React.Fragment>
            <CustomButton>Select</CustomButton>
          </React.Fragment>
        ),
      },
      {
        heading: "The Premier",
        subheading: "starting at",
        price: 160,
        saving: 75,
        features: [
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
          "Unlimited Photos",
          "MLS Entry",
        ],
        button: (
          <React.Fragment>
            <CustomButton>Select</CustomButton>
          </React.Fragment>
        ),
      },
    ],
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Title>Bundle and save more</Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title>Enter zip code & sqft to </Title>
            <Title>get Pricing </Title>
          </Col>
        </Row>
        <Row>
          <Form.Group className="mb-3">
            <Col className="">
              <Form.Label className="">Zip Code</Form.Label>
              <Form.Control className="" type="text" placeholder="90000" />
            </Col>
            <Col className="">
              <Form.Label className="">sqft</Form.Label>
              <Form.Control className="" type="text" placeholder="20,000" />
            </Col>
            <Col className="">
              <Form.Label className="">Discount Code</Form.Label>
              <Form.Control className="" type="text" placeholder="RTK**" />
            </Col>
          </Form.Group>
        </Row>
        <Row>
          <PricingCard data={this.state.pricing} />
        </Row>
        <CustomButton icon={<ChevronDoubleRight />}>
          A La Carte/Build Your Own
        </CustomButton>
      </Container>
    );
  }
}

export default PricingPage;
