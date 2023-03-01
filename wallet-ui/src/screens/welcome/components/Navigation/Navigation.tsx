import React, { useState } from "react";
import styled from "styled-components";
import { Hamburger } from "../Hamburger";
import { ReactComponent as Logo } from "assets/icons/other/logo.svg";

const Navigation = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <Root>
      <Hamburger
        isOpen={isMenuOpened}
        toggle={() => setIsMenuOpened((open) => !open)}
      />
      {isMenuOpened ? (
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>About</MenuItem>
        </Menu>
      ) : (
        <LogoContainer>
          <Logo width={82} height={28} />
        </LogoContainer>
      )}
    </Root>
  );
};

const Root = styled.header`
  position: relative;
`;

const LogoContainer = styled.div`
  padding-left: 40px;
`;

const Menu = styled.ul`
  list-style: none;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const MenuItem = styled.li`
  text-align: center;
  font-size: 1.625rem;
`;

export default Navigation;
