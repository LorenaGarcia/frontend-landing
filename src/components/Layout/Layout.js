import React from "react";
import { Container, Main, Footer, Div } from "./Layout.styles";
import { Menu } from "../Menu";

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>
        <Menu />
        {children}
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

export { Layout };
