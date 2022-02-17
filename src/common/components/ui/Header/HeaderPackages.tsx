import * as React from "react";
import {
  Col,
  Container,
  // Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./HeaderPackages.scss";

interface HeaderPackagesProps {
  // location: string
}

interface HeaderPackagesState {}
class HeaderPackages extends React.Component<
  HeaderPackagesProps,
  HeaderPackagesState
> {
  constructor(props: HeaderPackagesProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar sticky="top" bg="light">
        <Container>
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

          {/* <Row>
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
          </Row> */}
        </Container>
      </Navbar>
    );
  }
}

export default HeaderPackages;
