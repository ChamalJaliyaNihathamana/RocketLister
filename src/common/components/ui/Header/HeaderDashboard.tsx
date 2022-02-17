import * as React from "react";

import { Button, ButtonGroup, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../Button/CustomButton";

interface HeaderDashboardProps {
  // location: string
}

interface HeaderDashboardState {}
class HeaderDashboard extends React.Component<
  HeaderDashboardProps,
  HeaderDashboardState
> {
  constructor(props: HeaderDashboardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar sticky="top" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Rocket Lister
          </Navbar.Brand>
          <Nav>
            <ButtonGroup>
              <CustomButton variant="outline-primary" className="me-2">
                Request Inventory Pick Up
              </CustomButton>
              <CustomButton className="me-2">Place Order</CustomButton>
              <CustomButton variant="warning">Logout</CustomButton>
            </ButtonGroup>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderDashboard;
