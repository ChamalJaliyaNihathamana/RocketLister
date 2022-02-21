import React from "react";
import {
  Navbar,
  Image,
  ButtonGroup,
  Nav,
  Row,
  Col,
  NavDropdown,
  Form,
  Container,
} from "react-bootstrap";
import CustomButton from "../Button/CustomButton";
import { Link, useLocation } from "react-router-dom";
import { GearFill } from "react-bootstrap-icons";
interface HeaderProps {
  type: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({ type = "default" }) => {
  // let location = useLocation();
  let navigation;

  if (type === "dashboard") {
    navigation = (
      <Navbar sticky="top" bg="light" className="shadow">
        <Navbar.Brand as={Link} to="/">
          <Image src="https://rocketlister.com/wp-content/uploads/2021/02/Rocket-Lister-Logo-2.png" />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <ButtonGroup>
            <CustomButton variant="outline-primary" className="me-2">
              Request Inventory Pick Up
            </CustomButton>
            <CustomButton className="me-2">Place Order</CustomButton>
            <CustomButton className="logout">Logout</CustomButton>
          </ButtonGroup>
        </Nav>
      </Navbar>
    );
  } else if (type === "packages") {
    <Navbar sticky="top" bg="light">
      <Row>
        <Col xs={3}>
          <Navbar.Brand as={Link} to="/">
            Rocket Lister
          </Navbar.Brand>
        </Col>
        <Col xs={6}>
          <Row className="nav-contair">
            <Nav>
              <Nav.Link as={Link} to="/dashboard">
                MY DASHBOARD
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                PACKAGES
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                FAQ
              </Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col xs={3}>
          <NavDropdown
            className="no-caret"
            title={
              <span>
                Welcome Jessica &nbsp;
                <GearFill />
              </span>
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              Manage Account
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Payment Method
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="CHOOSE SERVICES" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="ENTER PROPERTY DETAILS" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="ENTER ACCESS DETAILS" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="CONFIRM ORDER" />
          </Form.Group>
        </Col>
      </Row>
    </Navbar>;
  } else if (type === "home") {
    <Navbar sticky="top" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Rocket Lister
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/dashboard">
            MY DASHBOARD
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            PACKAGES
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            FAQ
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>;
  } else {
    navigation = null;
  }

  // const [location ,setLocation] = React.useState( "");
  return <>{navigation}</>;
};

export default Header;
