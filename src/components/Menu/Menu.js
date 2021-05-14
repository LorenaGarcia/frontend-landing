import React, { useState } from "react";
import { Container, NavBar, Logo, Burger, StyledMenu } from "./Menu.styles";
import logo from "../../images/logo-menu.png";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const ShowMenu = () => {
    setOpen(!open);
    console.log("click");
  };

  return (
    <Container>
      <NavBar>
        {open && (
          <StyledMenu open={open}>
            <Logo open={open} src={logo} alt="logo" />
            <a href="/">Nuestros productos</a>
            <a href="/">Disfruta cuidarte</a>
            <a href="/">Blog</a>
          </StyledMenu>
        )}

        <Logo src={logo} alt="logo" />

        <Burger open={open} onClick={() => ShowMenu()}>
          <div />
          <div />
          <div />
        </Burger>
      </NavBar>
    </Container>
  );
};

export { Menu };
