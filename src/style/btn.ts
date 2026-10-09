import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

const sizes = {
  sm: css`
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
  `,
  md: css`
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  `,
  lg: css`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  `,
};

const variants = {
  primary: css`
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};

    &:hover:not(:disabled) {
      opacity: 0.85;
    }
  `,
  outline: css`
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  `,
  ghost: css`
    border: 1px solid transparent;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.muted};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  `,
  danger: css`
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.onPrimary};

    &:hover:not(:disabled) {
      opacity: 0.85;
    }
  `,
};

export const Button = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.md};
  transition:
    opacity 0.15s ease-in-out,
    background-color 0.15s ease-in-out;

  ${({ $size = "md" }) => sizes[$size]}
  ${({ $variant = "primary" }) => variants[$variant]}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid currentColor;
  border-right-color: transparent;
`;
