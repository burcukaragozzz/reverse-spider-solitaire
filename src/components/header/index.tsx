import React from "react";

import { Logo, Toggle } from "components";
import { HeaderWrapper, Container, HeaderText } from "./styled";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container data-testid="container">
        <Logo />
        <HeaderText>Spider Solitaire</HeaderText>
      </Container>
      <Toggle />
    </HeaderWrapper>
  );
};
