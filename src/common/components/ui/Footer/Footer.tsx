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
      <Navbar bg="light" fixed="bottom" className="footer__navigation">
        <Container className=" me-auto justify-content-center">
          <Nav className="footer__list">
            <Nav.Link className="footer__item" href="#home">
              CONTACT US
            </Nav.Link>
            <Nav.Link className="footer__item" href="#features">
              PRIVACY POLICY
            </Nav.Link>
            <Nav.Link className="footer__item" href="#pricing">
              TERMS &amp; CONDITION
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
