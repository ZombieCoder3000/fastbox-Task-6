import React from "react";
import { Button as StyledButton, Spinner } from "@/style/btn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <Spinner className="animate-spin" />}
      {children}
    </StyledButton>
  );
};

export default Button;
