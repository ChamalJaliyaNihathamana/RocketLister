import * as React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.scss";
// import * as BSI from "react-bootstrap-icons";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  size?: any;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactElement;
}
const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  className = "",
  icon = "",
}) => (
  <Button
    variant={variant}
    size={size}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {icon ? <span className="button-icon">{icon}</span> : null}
    {children}
  </Button>
);

export default CustomButton;
