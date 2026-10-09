import React from "react";
import { Caption, Heading } from "@/style/text";
import { Column } from "@/style/wrapper";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <Column $gap="0.25rem">
      <Heading>{title}</Heading>
      {subtitle && <Caption>{subtitle}</Caption>}
    </Column>
  );
};

export default PageTitle;
