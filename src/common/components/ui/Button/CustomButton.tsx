import * as React from "react";
import { Button } from "react-bootstrap";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  size?: any;
  disabled?: boolean;
  className?: string;
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled,
  className = "",
}) => (
  <Button
    variant={variant}
    size={size}
    onClick={onClick}
    disabled={disabled}
    className={className}
  >
    {children}
  </Button>
);

export default CustomButton;
