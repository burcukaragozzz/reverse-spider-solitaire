import React from "react";

import { Logo, Toggle } from "components";
import { Wrapper, Container, HeaderText } from "./styled";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container data-testid="container">
        <Logo />
        <HeaderText>Spider Solitaire</HeaderText>
      </Container>
      <Toggle />
    </Wrapper>
  );
};
