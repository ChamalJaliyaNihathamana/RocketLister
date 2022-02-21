import * as React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import LoginForm from "./LoginForm";
import Title from "../../common/components/ui/Title/Title";
import CustomButton from "../../common/components/ui/Button/CustomButton";
import { ArrowLeft } from "react-bootstrap-icons";

interface LoginPageProps {}

interface LoginPageState {}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="login-page">
        <Row className="login-page__title-bar">
          <Title className="login-page__title-bar--title">Add Now & Save</Title>
          <CustomButton
            variant="link"
            className="login-page__title-bar--cta"
            icon={<ArrowLeft />}
          >
            Back to Home
          </CustomButton>
        </Row>
        <Row className="login-page__body">
          <Col xs={4} className="login-page__body__hero-img-container">
            <Image
              className="login-page__body__hero-img-container--img"
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              fluid
            />
          </Col>
          <Col
            xs={{ span: 5, offset: 1 }}
            className="login-page__body__login-form"
          >
            <Title className="login-page__body__login-form--title">
              Welcome to
            </Title>
            <Image
              className="mb-3 login-page__body__login-form--logo"
              src="https://rocketlister.com/wp-content/uploads/2021/02/Rocket-Lister-Logo-2.png"
            />
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
