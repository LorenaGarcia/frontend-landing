import React from "react";
import { Container, Main, FooterInfo } from "./Layout.styles";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>
        <Menu />
        {children}
      </Main>
      <FooterInfo>
        <Footer />
      </FooterInfo>
    </Container>
  );
};

export { Layout };
