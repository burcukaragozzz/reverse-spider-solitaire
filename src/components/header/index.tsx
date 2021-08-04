import React from "react";

import { Logo, Toggle } from "components";
import { Wrapper, Container } from "./styled";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container data-testid="container">
        <Logo />
        <Toggle />
      </Container>
    </Wrapper>
  );
};
