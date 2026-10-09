import React from "react";
import { BadgeWrapper } from "@/style/badge";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md";
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  size = "md",
  children,
  ...rest
}) => {
  return (
    <BadgeWrapper $variant={variant} $size={size} {...rest}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;
