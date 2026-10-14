'use client';

import React from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
`;

const StyledInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ $hasError }) => ($hasError ? '#ef4444' : '#cbd5e1')};
  background-color: #ffffff;
  color: #0f172a;
  outline: none;
  transition: all 150ms ease-in-out;

  &:focus {
    border-color: ${({ $hasError }) => ($hasError ? '#ef4444' : '#2563eb')};
    box-shadow: 0 0 0 2px ${({ $hasError }) => ($hasError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(37, 99, 235, 0.2)')};
  }

  &:disabled {
    background-color: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  font-size: 0.75rem;
  color: #ef4444;
  margin: 0;
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  color: #64748b;
  margin: 0;
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <InputWrapper>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <StyledInput ref={ref} id={inputId} $hasError={Boolean(error)} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
        {!error && helperText && <HelperText>{helperText}</HelperText>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';
export default Input;
