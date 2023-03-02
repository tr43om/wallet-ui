import React, { ReactNode } from "react";
import styled from "styled-components";
import media from "styled-media-query";

interface PrimaryButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  title: string;
}

const PrimaryButton = ({ title, ...props }: PrimaryButtonProps) => {
  return <Button {...props}>{title}</Button>;
};

const Button = styled.button`
  all: unset;
  cursor: pointer;
  white-space: nowrap;
  font: ${({ theme }) => theme.variants.body4};
  border-radius: 4px;
  padding: 0.75rem 1.75rem;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  color: ${({ theme }) => theme.colors.primaryWhite};
  transition: all 0.3s;

  ${media.greaterThan("medium")`
    padding-inline: 2.2rem;
  `}

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryPressed};
    border: none;
  }
`;

export default PrimaryButton;
