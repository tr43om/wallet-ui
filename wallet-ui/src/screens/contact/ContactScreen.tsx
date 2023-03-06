import { Container } from "components";
import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { MembersList } from "./components";

const ContactScreen = () => {
  return (
    <Container>
      <Root>
        <Title>Contact us</Title>
        <MembersList />
      </Root>
    </Container>
  );
};

const Root = styled.div`
  min-height: 100vh;
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.variants.title9};
  margin-bottom: 2rem;
  order: -2;

  ${media.greaterThan("large")`
    font: ${({ theme }) => theme.variants.title2};
    margin-bottom: 1.25rem;
    
  `}
`;

export default ContactScreen;
