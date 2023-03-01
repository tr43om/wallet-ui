import React, { ReactNode } from "react";
import styled from "styled-components";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  padding-block: 1.75rem;
  padding-inline: 1rem;
  position: relative;
`;

export default Container;
