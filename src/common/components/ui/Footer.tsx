import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="light" fixed="bottom">
        <Container className=" me-auto justify-content-center">
          <Nav>
            <Nav.Link href="#home">CONTACT US</Nav.Link>
            <Nav.Link href="#features">PRIVACY POLICY</Nav.Link>
            <Nav.Link href="#pricing">TERMS &amp; CONDITION</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
//
