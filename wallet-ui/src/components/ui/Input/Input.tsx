import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <Root>
      <Label>{label}</Label>
      <StyledInput {...props} $error={false} />
    </Root>
  );
};

const Root = styled.label`
  display: grid;
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
  margin-bottom: 10px;
`;

const StyledInput = styled.input<{
  $error: boolean;
}>`
  width: 100%;
  max-width: 10rem;
  outline: none;
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 13px 16px;
  border-radius: 4px;
  transition: all 0.3s;
  caret-color: ${({ theme }) => theme.colors.primaryBlue};
  border: 1px solid
    ${({ $error, theme }) => {
      if ($error) {
        return theme.colors.accent;
      } else {
        return "#E1E1E4";
      }
    }};
  &::placeholder {
    color: #f7f7f7;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBlue};
  }
`;

export default Input;
