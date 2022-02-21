import * as React from "react";
import { Container, Form } from "react-bootstrap";

export type classNameType = string;
export type childrenType = React.ReactNode;

export interface CustomFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  className?: classNameType;
}

const CustomForm: React.FunctionComponent<CustomFormProps> = ({
  defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  ...rest
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} {...rest}>
        <Form.Control className="mb-3">
          {Array.isArray(children)
            ? children.map((child) => {
                return child.props.name
                  ? React.createElement(child.type, {
                      ...{
                        ...child.props,
                        register,
                        key: child.props.name,
                      },
                    })
                  : child;
              })
            : children}
        </Form.Control>
        <button className="btn btn--brand">{buttonLabel}</button>
      </Form>
    </Container>
  );
};

export default CustomForm;
