import * as React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./ToastComponent.scss";

interface ToastComponentProps {
  toastPostion?: any;
  show: boolean;
  onHide?: any;
  header: string;
  content: string;
  status?: string;
}

const ToastComponent: React.FunctionComponent<ToastComponentProps> = (
  props
) => {
  return (
    <ToastContainer className="p-3 on-top" position={props.toastPostion}>
      <Toast {...props} onClose={props.onHide} delay={3000} autohide>
        <Toast.Header>
          <img src="" className="rounded me-2" alt="" />
          <strong className="me-auto">{props.header}</strong>
          <small>{props.status}</small>
        </Toast.Header>
        <Toast.Body>{props.content}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default ToastComponent;
