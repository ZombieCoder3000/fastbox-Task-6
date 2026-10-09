import styled from "styled-components";

export const InputGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.border};

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.brand};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.danger};
`;
