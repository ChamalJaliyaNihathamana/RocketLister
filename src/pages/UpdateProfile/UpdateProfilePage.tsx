import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Sidenav from "../../common/components/ui/SideBar/Sidenav";
import UpdateProfile from "./UpdateProfileForm";

interface UpdateProfilePageProps {}

interface UpdateProfilePageState {}

class UpdateProfilePage extends React.Component<
  UpdateProfilePageProps,
  UpdateProfilePageState
> {
  constructor(props: UpdateProfilePageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={2}>
            <Sidenav />
          </Col>
          <Col xs={10}>
            <UpdateProfile />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpdateProfilePage;
