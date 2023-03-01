import React from "react";
import styled from "styled-components";
import { Container } from "../../components";
import { Navigation } from "./components";
const Welcome = () => {
  return (
    <Root>
      <Container>
        <Navigation />
      </Container>
    </Root>
  );
};

const Root = styled.section`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryWhite};
  min-height: 100vh;
`;

export default Welcome;
