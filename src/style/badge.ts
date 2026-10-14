import styled, { css } from "styled-components";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

const variants = {
  default: css`
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.success};
    border-color: ${({ theme }) => theme.colors.success};
  `,
  warning: css`
    color: ${({ theme }) => theme.colors.warning};
    border-color: ${({ theme }) => theme.colors.warning};
  `,
  danger: css`
    color: ${({ theme }) => theme.colors.danger};
    border-color: ${({ theme }) => theme.colors.danger};
  `,
  info: css`
    color: ${({ theme }) => theme.colors.info};
    border-color: ${({ theme }) => theme.colors.info};
  `,
};

export const BadgeWrapper = styled.span<{
  $variant: BadgeVariant;
  $size: "sm" | "md";
}>`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ $size }) => ($size === "sm" ? "0.125rem 0.5rem" : "0.25rem 0.625rem")};
  font-size: 0.75rem;

  ${({ $variant }) => variants[$variant]}
`;
