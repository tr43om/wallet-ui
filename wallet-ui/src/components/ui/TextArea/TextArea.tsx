import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: boolean;
}
const TextArea = ({
  label,
  maxLength,
  value,
  error,
  ...props
}: TextAreaProps) => {
  return (
    <Root>
      <Header>
        <Label>{label}</Label>

        <Counter>
          {value?.toString().length} / {maxLength}
        </Counter>
      </Header>

      <StyledTextArea $error={false} value={value} {...props} />
    </Root>
  );
};

const Root = styled.label`
  display: grid;
  width: 100%;
  max-width: 10rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Counter = styled.p`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
`;

const StyledTextArea = styled.textarea<{
  $error: boolean;
}>`
  resize: none;
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

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondaryActiveText};
  margin-bottom: 10px;
`;

export default TextArea;
