import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import CheckBox from "../../components/ui/CheckBox/CheckBox";
import Map from "../../components/ui/Map/Map";
import Title from "../../components/ui/Title/Title";

interface PickUpProps {}

const PickUp: React.FunctionComponent<PickUpProps> = () => {
  const radios = [
    { name: "Yes, the location above is correct", value: "1" },
    { name: "No, the location above is not correct", value: "2" },
  ];

  return (
    <Container>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Title type="section" name="pick up address" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col xs={5}>
              <Form.Control type="text" placeholder="Property Address" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Unit #" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="City" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="State" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Zip Code" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Title type="section" name="confirm location" />
              <Map />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <CheckBox radios={radios} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Label htmlFor="basic-url">Directions ?</Form.Label>
              <Form.Control
                className="txt-area"
                as="textarea"
                aria-label="With textarea"
                placeholder="Enter the street-by-street directions to the property"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Row>
            <Col>
              <ButtonGroup vertical size="lg">
                <Button className="mb-2">Submit</Button>
                <Button className="mb-6">Go Back</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default PickUp;
