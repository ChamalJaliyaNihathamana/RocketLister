import * as React from "react";
import { Container } from "react-bootstrap";
import Package from "./Package";

interface PackegePageProps {}

interface PackegePageState {}

class PackegePage extends React.Component<PackegePageProps, PackegePageState> {
  state = {};
  render() {
    return (
      <Container>
        <Package />
      </Container>
    );
  }
}

export default PackegePage;
