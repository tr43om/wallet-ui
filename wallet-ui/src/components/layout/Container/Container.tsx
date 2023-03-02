import React, { ReactNode } from "react";
import styled from "styled-components";
import media from "styled-media-query";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  padding-inline: 1rem;
  position: relative;

  ${media.greaterThan("medium")`
    padding-inline: 5rem;
  `}
`;

export default Container;
