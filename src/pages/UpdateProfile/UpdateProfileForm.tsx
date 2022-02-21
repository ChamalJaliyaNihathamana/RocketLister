import React from "react";
import {
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import ModalComponent from "../../common/components/ui/Modal/Modal";
import ToastComponent from "../../common/components/ui/Toast/ToastComponent";
import CustomButton from "../../common/components/ui/Button/CustomButton";
import { toast } from "react-toastify";

interface UpdateProfileProps {}

const UpdateProfile: React.FunctionComponent<UpdateProfileProps> = () => {
  const notify = () =>
    toast.success("Upload Photo Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [modalShow, setModalShow] = React.useState(false);
  const [toastShow, setToastShow] = React.useState(false);
  return (
    <Container>
      <Form className="main_form">
        <Form.Group className="mb-3">
          <Row className="form_title">
            <Col>
              <p>
                <FaIcons.FaUser className="title_icon" />
                UpdateProfile Profile
              </p>
            </Col>
            <Col>
              <ButtonGroup className="mb-3">
                <CustomButton size="sm" onClick={() => setToastShow(true)}>
                  <FaIcons.FaUpload className="button_icon" />
                  Upload Logo
                </CustomButton>
                <CustomButton size="sm" onClick={notify}>
                  <FaIcons.FaUpload className="button_icon" />
                  Upload Photo
                </CustomButton>
              </ButtonGroup>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="First Name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Last Name" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Mailing Address" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="City" />
            </Col>
            <Col>
              <InputGroup>
                <FormControl type="text" placeholder="State" />

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
            <Col>
              <Form.Control type="text" placeholder="Zip Code" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Brokerage - Choose other if not listed*"
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
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Mobile" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Email" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
              <Form.Control type="text" placeholder="MSL Login" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="MSL Password" />
            </Col>
          </Row>
        </Form.Group>

        <ButtonGroup className="mb-2">
          <CustomButton>
            <FaIcons.FaUserCircle className="button_icon" />
            Change Username
          </CustomButton>
          <CustomButton onClick={() => setModalShow(true)}>
            <FaIcons.FaLock className="button_icon" />
            Change Password
          </CustomButton>
          <CustomButton>
            <FaIcons.FaRegCreditCard className="button_icon" />
            UpdateProfile Credit Card
          </CustomButton>
        </ButtonGroup>
      </Form>
      <ToastComponent
        content="You have successfully UpdateProfiled the logo"
        header="Logo Upload"
        status="Successful"
        toastPostion="bottom-end"
        show={toastShow}
        onHide={() => setToastShow(false)}
      />
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
      {/* <Button className="button-save" onClick={() => setToastShow(true)}>
        Save
      </Button> */}
    </Container>
  );
};

export default UpdateProfile;
