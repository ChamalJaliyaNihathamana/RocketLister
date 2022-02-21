import * as React from "react";

import { ButtonGroup, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../Button/CustomButton";
import "./HeaderDashboard.scss";

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
  }
}

export default HeaderDashboard;
