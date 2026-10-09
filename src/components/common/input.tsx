import React, { forwardRef } from "react";
import { ErrorText, Input as StyledInput, InputGroup } from "@/style/input";
import { Caption, Label } from "@/style/text";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, ...rest }, ref) => {
    const inputId = id ?? rest.name;

    return (
      <InputGroup>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <StyledInput id={inputId} ref={ref} $hasError={Boolean(error)} {...rest} />
        {error && <ErrorText>{error}</ErrorText>}
        {!error && helperText && <Caption>{helperText}</Caption>}
      </InputGroup>
    );
  },
);

Input.displayName = "Input";

export default Input;
