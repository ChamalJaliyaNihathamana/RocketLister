import * as React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import RegisterForm from "../common/components/ui/Form/RegisterForm";
import Title from "../common/components/ui/Title/Title";

interface RegisterPageProps {}

interface RegisterPageState {}

class RegisterPage extends React.Component<
  RegisterPageProps,
  RegisterPageState
> {
  constructor(props: RegisterPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="mb-3 mt-3">
        <Row>
          <Col xs={4}>
            <Image
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              fluid
            />
          </Col>
          <Col xs={{ span: 7, offset: 1 }}>
            <Title icon={<PersonFill />}>Customer Register</Title>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterPage;
