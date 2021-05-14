import React, { useState } from "react";
import { Container, Logo, Burger, StyledMenu } from "./Menu.styles";
import logo from "../../images/logo-menu.png";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const ShowMenu = () => {
    setOpen(!open);
    console.log("click");
  };

  return (
    <Container>
      {open && (
        <StyledMenu open={open}>
          <a href="/">Nuestros productos</a>
          <a href="/">Disfruta cuidarte</a>
          <a href="/">Blog</a>
        </StyledMenu>
      )}

      <div>
        <Logo src={logo} alt="logo" />
      </div>
      <div>
        <Burger open={open} onClick={() => ShowMenu()}>
          <div />
          <div />
          <div />
        </Burger>
      </div>
    </Container>
  );
};

export { Menu };
