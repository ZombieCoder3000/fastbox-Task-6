import styled from 'styled-components';

export const StyledButton = styled.button<{ $variant?: 'primary' | 'secondary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  background-color: ${({ $variant }) =>
    $variant === 'outline' ? 'transparent' : $variant === 'secondary' ? '#64748b' : '#2563eb'};
  color: ${({ $variant }) => ($variant === 'outline' ? '#0f172a' : '#ffffff')};
  border-color: ${({ $variant }) => ($variant === 'outline' ? '#cbd5e1' : 'transparent')};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'outline' ? '#f1f5f9' : $variant === 'secondary' ? '#475569' : '#1d4ed8'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;