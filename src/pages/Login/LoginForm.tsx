import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import CustomButton from "../../common/components/ui/Button/CustomButton";

interface LoginProps {
}

const Login: React.FunctionComponent<LoginProps> = () => {
  return (
    <Form className="login">
      <Form.Group className="mb-3">
        <Row>
          <Col className="login__username">
            <Form.Label className="login__username--label">Username / E-mail</Form.Label>
            <Form.Control className="login__username--field" type="text" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Row>
          <Col className="login__password">
            <Form.Label className="login__password--label">Password</Form.Label>
            <Form.Control className="login__password--field" type="password" />
          </Col>
        </Row>
      </Form.Group>

      <CustomButton variant="link" className="login__cta--forgot-password">
        Forgot Password ?
      </CustomButton>
      <CustomButton className="login__cta--signin">Sign in</CustomButton>
      <span className="login__cta--register">
        Don't have an account ?
        <CustomButton variant="link" className="register__link">
          Register
        </CustomButton>
      </span>
    </Form>
  );
};

export default Login;
