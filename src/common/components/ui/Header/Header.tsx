import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
interface HeaderProps {
  location: string;
}

interface HeaderState {}
class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
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
      </Navbar>
    );
  }
}

export default Header;
