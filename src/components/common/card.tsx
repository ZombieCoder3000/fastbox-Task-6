import React from "react";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardWrapper,
} from "@/style/wrapper";

type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, header, footer, className }) => {
  return (
    <CardWrapper className={className}>
      {header && <CardHeader>{header}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
};

export default Card;
