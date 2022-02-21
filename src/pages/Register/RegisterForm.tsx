import React from "react";
import {
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Upload } from "react-bootstrap-icons";
import CustomButton from "../../common/components/ui/Button/CustomButton";


interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = () => {
  return (
    <Form className="mb-10">
      <Form.Group className="mb-3">
        <Row className="mt-3">
          <Col>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Col>
          <Col>
            <Form.Label>Re-Type Password</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <ButtonGroup className="mb-3">
              <CustomButton size="sm" className="upload" icon={<Upload />}>
                Upload Headshot
              </CustomButton>
              <CustomButton size="sm" className="upload" icon={<Upload />}>
                Upload Logo
              </CustomButton>
            </ButtonGroup>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Row>
          <Col xs={8}>
            <Form.Label>Brokerage - Choose other if not listed</Form.Label>
            <InputGroup>
              <Form.Control type="text" placeholder="Real Estate Brokerage" />

              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                title=""
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3">
        <Row>
          <Col>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col xs={6}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col>
            <Form.Label>Referred By</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Referred By
                "
              />

              <DropdownButton
                variant="outline-secondary"
                id="input-group-dropdown-2"
                title=""
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Row>
          <Col className="col-terms">
            <Form.Check type="checkbox" label="I agree to" />
            <CustomButton variant="link" className="terms">
              terms of use & service.
            </CustomButton>
          </Col>
        </Row>
      </Form.Group>

      <CustomButton>Register</CustomButton>
    </Form>
  );
};

export default Register;
